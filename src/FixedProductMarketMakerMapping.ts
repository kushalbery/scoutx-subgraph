import { BigInt, log } from "@graphprotocol/graph-ts";

import {
  FixedProductMarketMaker,
  FpmmFundingAddition,
  Transaction,
  CreatedFPMM,
  Condition,
  Player,
  TradePrice,
  PlayerVolume,
  PlayerVolumeByTransaction,
  FeesWithdraws,
  FpmmOwnerTransfers,
  FpmmPoolBalanceTransfers,
} from "../generated/schema";
import {
  FPMMFundingAdded,
  FPMMBuy,
  FPMMSell,
  FPMMCreated,
  LongShortCurrentPrice,
  FeesWithdraw,
  OwnershipTransferred,
  PoolBalancesTransfered,
} from "../generated/templates/FixedProductMarketMaker/FixedProductMarketMaker";
import { nthRoot } from "./utils/nth-root";
import {
  updateVolumes,
  updateLiquidityFields,
  updateFeeFields,
  calculatePrices,
  loadPoolMembership,
  recordBuy,
  updatePlayerVolume,
  recordFundingAddition,
  recordSell,
} from "./utils/fpmm";
import {
  updateMarketPositionFromLiquidityAdded,
  updateMarketPositionFromTrade,
} from "./utils/market-positions";
import {
  AddressZero,
  bigOne,
  bigZero,
  TRADE_TYPE_BUY,
  TRADE_TYPE_SELL,
} from "./utils/constants";
import { getCollateralScale } from "./utils/collateral-tokens";
import { updateGlobalVolume } from "./utils/global";
import { increment, max } from "./utils/maths";
import {
  incrementAccountTrades,
  markAccountAsSeen,
  requireAccount,
  updateUserVolume,
} from "./utils/account";
import {
  updateUserPlayerTourHoldings,
  updateInvestmentAmountOnBuy,
  updateInvestmentAmountOnSell,
} from "./utils/user-holdings";

export function handleFundingAdded(event: FPMMFundingAdded): void {
  let fpmmAddress = event.address.toHexString();
  let fpmm = FixedProductMarketMaker.load(fpmmAddress);
  if (fpmm == null) {
    log.error(
      "cannot add funding: FixedProductMarketMaker instance for {} not found",
      [fpmmAddress]
    );
    return;
  }

  let oldAmounts = fpmm.outcomeTokenAmounts;
  let amountsAdded = event.params.amountsAdded;
  let newAmounts = new Array<BigInt>(oldAmounts.length);
  let amountsProduct = bigOne;
  for (let i = 0; i < newAmounts.length; i += 1) {
    newAmounts[i] = oldAmounts[i].plus(amountsAdded[i]);
    amountsProduct = amountsProduct.times(newAmounts[i]);
  }
  fpmm.outcomeTokenAmounts = newAmounts;
  let liquidityParameter = nthRoot(amountsProduct, newAmounts.length);
  let collateralScale = getCollateralScale(fpmm.collateralToken);
  updateLiquidityFields(
    fpmm as FixedProductMarketMaker,
    liquidityParameter,
    collateralScale.toBigDecimal()
  );

  fpmm.totalSupply = fpmm.totalSupply.plus(event.params.sharesMinted);
  if (fpmm.totalSupply.equals(event.params.sharesMinted)) {
    // The market maker previously had zero liquidity
    // We then need to update with the initial prices.
    fpmm.outcomeTokenPrices = calculatePrices(newAmounts);
  }

  fpmm.liquidityAddQuantity = increment(fpmm.liquidityAddQuantity);
  fpmm.longTradeVolume = event.params.longTradeVolume;
  fpmm.shortTradeVolume = event.params.shortTradeVolume;
  fpmm.totalFpmmHoldingValue = event.params.totalFpmmHoldingValue;
  fpmm.save();
  markAccountAsSeen(event.params.funder.toHexString(), event.block.timestamp);
  recordFundingAddition(event);
  updateMarketPositionFromLiquidityAdded(event);
}

export function handleBuy(event: FPMMBuy): void {
  let fpmmAddress = event.address.toHexString();
  let fpmm = FixedProductMarketMaker.load(fpmmAddress);
  if (fpmm == null) {
    log.error("cannot buy: FixedProductMarketMaker instance for {} not found", [
      fpmmAddress,
    ]);
    return;
  }

  let oldAmounts = fpmm.outcomeTokenAmounts;
  let investmentAmountMinusFees = event.params.investmentAmount.minus(
    event.params.feeAmount
  );

  let outcomeIndex = event.params.outcomeIndex.toI32();

  let newAmounts = new Array<BigInt>(oldAmounts.length);
  let amountsProduct = bigOne;
  for (let i = 0; i < newAmounts.length; i += 1) {
    if (i == outcomeIndex) {
      newAmounts[i] = oldAmounts[i]
        .plus(investmentAmountMinusFees)
        .minus(event.params.outcomeTokensBought);
    } else {
      newAmounts[i] = oldAmounts[i].plus(investmentAmountMinusFees);
    }
    amountsProduct = amountsProduct.times(newAmounts[i]);
  }
  fpmm.outcomeTokenAmounts = newAmounts;
  fpmm.outcomeTokenPrices = calculatePrices(newAmounts);
  let liquidityParameter = nthRoot(amountsProduct, newAmounts.length);
  let collateralScale = getCollateralScale(fpmm.collateralToken);
  let collateralScaleDec = collateralScale.toBigDecimal();
  updateLiquidityFields(
    fpmm as FixedProductMarketMaker,
    liquidityParameter,
    collateralScaleDec
  );

  updateVolumes(
    fpmm as FixedProductMarketMaker,
    event.block.timestamp,
    event.params.investmentAmount,
    collateralScaleDec,
    TRADE_TYPE_BUY
  );
  updateFeeFields(
    fpmm as FixedProductMarketMaker,
    event.params.feeAmount,
    collateralScaleDec
  );

  fpmm.tradesQuantity = increment(fpmm.tradesQuantity);
  fpmm.buysQuantity = increment(fpmm.buysQuantity);
  fpmm.longTradeVolume = event.params.longTradeVolume;
  fpmm.shortTradeVolume = event.params.shortTradeVolume;
  fpmm.totalFpmmHoldingValue = event.params.totalFpmmHoldingValue;
  fpmm.save();

  updateUserVolume(
    event.params.buyer.toHexString(),
    event.params.investmentAmount,
    collateralScaleDec,
    event.block.timestamp
  );
  updatePlayerVolume(
    event.block.timestamp,
    event.params.questionId.toHexString(),
    event.params.longTradeVolume.plus(event.params.shortTradeVolume),
    event.transaction.hash.toHexString()
  );
  markAccountAsSeen(event.params.buyer.toHexString(), event.block.timestamp);
  incrementAccountTrades(
    event.params.buyer.toHexString(),
    event.block.timestamp
  );
  recordBuy(event, investmentAmountMinusFees);
  let pnlId = event.params.buyer
    .toHexString()
    .concat("-")
    .concat(event.address.toHexString())
    .concat("-")
    .concat(event.params.outcomeIndex.toString());

  updateUserPlayerTourHoldings(
    pnlId,
    event.params.questionId.toHexString(),
    event.params.buyer.toHexString(),
    investmentAmountMinusFees,
    event.params.outcomeTokensBought,
    TRADE_TYPE_BUY,
    event.address.toHexString(),
    event.params.outcomeIndex,
    event.params.fpmmFactoryAddress.toHexString()
  );
  updateInvestmentAmountOnBuy(
    event.params.buyer.toHexString(),
    investmentAmountMinusFees
  );
  updateGlobalVolume(
    event.params.investmentAmount,
    event.params.feeAmount,
    collateralScaleDec,
    TRADE_TYPE_BUY
  );
  updateMarketPositionFromTrade(event);
}

export function handleSell(event: FPMMSell): void {
  let fpmmAddress = event.address.toHexString();
  let fpmm = FixedProductMarketMaker.load(fpmmAddress);
  if (fpmm == null) {
    log.error(
      "cannot sell: FixedProductMarketMaker instance for {} not found",
      [fpmmAddress]
    );
    return;
  }

  let oldAmounts = fpmm.outcomeTokenAmounts;
  let returnAmountPlusFees = event.params.returnAmount.plus(
    event.params.feeAmount
  );

  let outcomeIndex = event.params.outcomeIndex.toI32();
  let newAmounts = new Array<BigInt>(oldAmounts.length);
  let amountsProduct = bigOne;
  for (let i = 0; i < newAmounts.length; i += 1) {
    if (i == outcomeIndex) {
      newAmounts[i] = oldAmounts[i]
        .minus(returnAmountPlusFees)
        .plus(event.params.outcomeTokensSold);
    } else {
      newAmounts[i] = oldAmounts[i].minus(returnAmountPlusFees);
    }
    amountsProduct = amountsProduct.times(newAmounts[i]);
  }
  fpmm.outcomeTokenAmounts = newAmounts;
  fpmm.outcomeTokenPrices = calculatePrices(newAmounts);
  let liquidityParameter = nthRoot(amountsProduct, newAmounts.length);
  let collateralScale = getCollateralScale(fpmm.collateralToken);
  let collateralScaleDec = collateralScale.toBigDecimal();
  updateLiquidityFields(
    fpmm as FixedProductMarketMaker,
    liquidityParameter,
    collateralScaleDec
  );

  updateVolumes(
    fpmm as FixedProductMarketMaker,
    event.block.timestamp,
    event.params.returnAmount,
    collateralScaleDec,
    TRADE_TYPE_SELL
  );
  updateFeeFields(
    fpmm as FixedProductMarketMaker,
    event.params.feeAmount,
    collateralScaleDec
  );

  fpmm.tradesQuantity = increment(fpmm.tradesQuantity);
  fpmm.sellsQuantity = increment(fpmm.sellsQuantity);
  fpmm.longTradeVolume = event.params.longTradeVolume;
  fpmm.shortTradeVolume = event.params.shortTradeVolume;
  fpmm.totalFpmmHoldingValue = event.params.totalFpmmHoldingValue;
  fpmm.save();

  updateUserVolume(
    event.params.seller.toHexString(),
    event.params.returnAmount,
    collateralScaleDec,
    event.block.timestamp
  );
  updatePlayerVolume(
    event.block.timestamp,
    event.params.questionId.toHexString(),
    event.params.longTradeVolume.plus(event.params.shortTradeVolume),
    event.transaction.hash.toHexString()
  );
  markAccountAsSeen(event.params.seller.toHexString(), event.block.timestamp);
  incrementAccountTrades(
    event.params.seller.toHexString(),
    event.block.timestamp
  );
  recordSell(event, returnAmountPlusFees);
  let pnlId = event.params.seller
    .toHexString()
    .concat("-")
    .concat(event.address.toHexString())
    .concat("-")
    .concat(event.params.outcomeIndex.toString());
  updateInvestmentAmountOnSell(
    event.params.seller.toHexString(),
    event.params.outcomeTokensSold,
    pnlId
  );
  updateUserPlayerTourHoldings(
    pnlId,
    event.params.questionId.toHexString(),
    event.params.seller.toHexString(),
    returnAmountPlusFees,
    event.params.outcomeTokensSold,
    TRADE_TYPE_SELL,
    event.address.toHexString(),
    event.params.outcomeIndex,
    event.params.fpmmFactoryAddress.toHexString()
  );
  updateGlobalVolume(
    event.params.returnAmount,
    event.params.feeAmount,
    collateralScaleDec,
    TRADE_TYPE_SELL
  );
  updateMarketPositionFromTrade(event);
}

export function handleFPMMCreated(event: FPMMCreated): void {
  let address = event.address;
  let addressHexString = address.toHexString();
  let entity = CreatedFPMM.load(address.toHex());

  if (!entity) {
    entity = new CreatedFPMM(event.address.toHex());
  }

  let conditionIds = event.params.conditionIds;
  let outcomeTokenCount = 1;
  let conditionIdStr = conditionIds.toHexString();

  let condition = Condition.load(conditionIdStr);
  if (condition == null) {
    log.error("failed to create market maker {}: condition {} not prepared", [
      addressHexString,
      conditionIdStr,
    ]);
    return;
  }

  outcomeTokenCount *= condition.outcomeSlotCount;
  condition.fixedProductMarketMakers = condition.fixedProductMarketMakers.concat(
    [addressHexString]
  );
  condition.save();

  entity.creator = event.params.creator;
  entity.tokenName = event.params.tokenName;
  entity.tokenSymbol = event.params.tokenSymbol;
  entity.save();
}

export function handleCurrentPrice(event: LongShortCurrentPrice): void {
  let fpmmAddress = event.address.toHexString();
  let fpmm = FixedProductMarketMaker.load(fpmmAddress);
  if (fpmm == null) {
    log.error(
      "cannot update current price: FixedProductMarketMaker instance for {} not found",
      [fpmmAddress]
    );
    return;
  }

  let playerAddress = event.address.toHexString();
  let player = Player.load(playerAddress);
  if (player == null) {
    log.info("Creating new player", []);
    player = new Player(playerAddress);
  }
  player.currentLongTokenPrice = event.params.currentLongPrice;
  player.currentShortTokenPrice = event.params.currentShortPrice;
  player.timestamp = event.params.timestamp;
  player.questionId = event.params.questionId;
  player.save();

  fpmm.longTradeVolume = event.params.longTradeVolume;
  fpmm.shortTradeVolume = event.params.shortTradeVolume;
  fpmm.totalFpmmHoldingValue = event.params.totalFpmmHoldingValue;
  fpmm.save();

  let tradePrice = new TradePrice(event.transaction.hash.toHexString());
  tradePrice.longTokenPrice = event.params.currentLongPrice;
  tradePrice.shortTokenPrice = event.params.currentShortPrice;
  tradePrice.timestamp = event.params.timestamp;
  tradePrice.questionId = event.params.questionId;
  tradePrice.fpmm = event.address.toHexString();
  tradePrice.player = event.address.toHexString();
  tradePrice.save();
}

export function handleFeesWithdraw(event: FeesWithdraw): void {
  const id = event.address
    .toHexString()
    .concat(event.params.withdrawalNo.toHexString());
  const feesWithdrawEntity = new FeesWithdraws(id);
  feesWithdrawEntity.fpmm = event.address.toHexString();
  feesWithdrawEntity.amount = event.params.amount;
  feesWithdrawEntity.withdrawer = event.params.withdrawer;
  feesWithdrawEntity.timestamp = event.block.timestamp;
  feesWithdrawEntity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  const fpmmOwnerTransferredEntity = new FpmmOwnerTransfers(
    event.transaction.hash.toHexString()
  );
  fpmmOwnerTransferredEntity.timestamp = event.block.timestamp;
  fpmmOwnerTransferredEntity.previousOwner = event.params.previousOwner;
  fpmmOwnerTransferredEntity.newOwner = event.params.newOwner;
  fpmmOwnerTransferredEntity.save();
}

export function handlePoolBalancesTransfered(
  event: PoolBalancesTransfered
): void {
  let fpmmAddress = event.address.toHexString();
  let fpmm = FixedProductMarketMaker.load(fpmmAddress);
  if (fpmm == null) {
    log.error(
      "cannot update pool balance transfered: FixedProductMarketMaker instance for {} not found",
      [fpmmAddress]
    );
    return;
  }

  fpmm.longTradeVolume = event.params.longTradeVolume;
  fpmm.shortTradeVolume = event.params.shortTradeVolume;
  fpmm.totalFpmmHoldingValue = event.params.totalFpmmHoldingValue;
  fpmm.save();

  const fpmmPoolBalanceTransferEntity = new FpmmPoolBalanceTransfers(
    event.transaction.hash.toHexString()
  );
  fpmmPoolBalanceTransferEntity.owner = event.params.withdrawer;
  fpmmPoolBalanceTransferEntity.longPoolBalance = event.params.amount[0];
  fpmmPoolBalanceTransferEntity.shortPoolBalance = event.params.amount[1];
  fpmmPoolBalanceTransferEntity.totalFpmmHoldingValue =
    event.params.totalFpmmHoldingValue;
  fpmmPoolBalanceTransferEntity.longTradeVolume = event.params.longTradeVolume;
  fpmmPoolBalanceTransferEntity.shortTradeVolume =
    event.params.shortTradeVolume;
  fpmmPoolBalanceTransferEntity.questionId = event.params.questionId;
  fpmmPoolBalanceTransferEntity.fpmmFactoryAddress =
    event.params.fpmmFactoryAddress;
  fpmmPoolBalanceTransferEntity.timestamp = event.block.timestamp;
  fpmmPoolBalanceTransferEntity.fpmm = event.address.toHexString();
  fpmmPoolBalanceTransferEntity.save();
}

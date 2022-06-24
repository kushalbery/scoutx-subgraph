/* eslint-disable no-param-reassign */
import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import {
  FixedProductMarketMaker,
  FpmmFundingAddition,
  FpmmPoolMembership,
  PlayerVolume,
  PlayerVolumeByTransaction,
  Transaction,
} from "../../generated/schema";
import { timestampToDay } from "./time";
import { bigOne, bigZero, TRADE_TYPE_BUY, TRADE_TYPE_SELL } from "./constants";
import {
  FPMMBuy,
  FPMMFundingAdded,
  FPMMSell,
} from "../../generated/templates/FixedProductMarketMaker/FixedProductMarketMaker";
import { max } from "./maths";

export function loadPoolMembership(
  fpmmAddress: string,
  userAddress: string
): FpmmPoolMembership {
  let poolMembershipId = fpmmAddress.concat(userAddress);
  let poolMembership = FpmmPoolMembership.load(poolMembershipId);
  if (poolMembership == null) {
    poolMembership = new FpmmPoolMembership(poolMembershipId);
    poolMembership.pool = fpmmAddress;
    poolMembership.funder = userAddress;
    poolMembership.amount = bigZero;
  }
  return poolMembership as FpmmPoolMembership;
}

/**
 * Computes the price of each outcome token given their holdings. Returns an array of numbers in the range [0, 1]
 * Credits to: https://github.com/protofire/gnosis-conditional-exchange
 */
export function calculatePrices(outcomeTokenAmounts: BigInt[]): BigDecimal[] {
  let outcomePrices = new Array<BigDecimal>(outcomeTokenAmounts.length);

  let totalTokensBalance = bigZero;
  let product = bigOne;
  for (let i = 0; i < outcomeTokenAmounts.length; i += 1) {
    totalTokensBalance = totalTokensBalance.plus(outcomeTokenAmounts[i]);
    product = product.times(outcomeTokenAmounts[i]);
  }

  // If there are no tokens in the market maker then return a zero price for everything
  if (totalTokensBalance.equals(bigZero)) {
    return outcomePrices;
  }

  let denominator = bigZero;
  for (let i = 0; i < outcomeTokenAmounts.length; i += 1) {
    denominator = denominator.plus(product.div(outcomeTokenAmounts[i]));
  }

  for (let i = 0; i < outcomeTokenAmounts.length; i += 1) {
    outcomePrices[i] = product
      .divDecimal(outcomeTokenAmounts[i].toBigDecimal())
      .div(denominator.toBigDecimal());
  }
  return outcomePrices;
}

export function updateVolumes(
  fpmm: FixedProductMarketMaker,
  timestamp: BigInt,
  tradeSize: BigInt,
  collateralScaleDec: BigDecimal,
  tradeType: string
): void {
  let currentDay = timestampToDay(timestamp);

  if (fpmm.lastActiveDay.notEqual(currentDay)) {
    fpmm.lastActiveDay = currentDay;
  }

  fpmm.collateralVolume = fpmm.collateralVolume.plus(tradeSize);
  fpmm.scaledCollateralVolume = fpmm.collateralVolume.divDecimal(
    collateralScaleDec
  );

  if (tradeType == TRADE_TYPE_BUY) {
    fpmm.collateralBuyVolume = fpmm.collateralBuyVolume.plus(tradeSize);
    fpmm.scaledCollateralBuyVolume = fpmm.collateralBuyVolume.divDecimal(
      collateralScaleDec
    );
  } else if (tradeType == TRADE_TYPE_SELL) {
    fpmm.collateralSellVolume = fpmm.collateralSellVolume.plus(tradeSize);
    fpmm.scaledCollateralSellVolume = fpmm.collateralSellVolume.divDecimal(
      collateralScaleDec
    );
  }
}

export function updateLiquidityFields(
  fpmm: FixedProductMarketMaker,
  liquidityParameter: BigInt,
  collateralScale: BigDecimal
): void {
  fpmm.liquidityParameter = liquidityParameter;
  fpmm.scaledLiquidityParameter = liquidityParameter.divDecimal(
    collateralScale
  );
}

export function updateFeeFields(
  fpmm: FixedProductMarketMaker,
  feeAmount: BigInt,
  collateralScaleDec: BigDecimal
): void {
  fpmm.feeVolume = fpmm.feeVolume.plus(feeAmount);
  fpmm.scaledFeeVolume = fpmm.feeVolume.divDecimal(collateralScaleDec);
}

export function recordBuy(event: FPMMBuy, netTradeAmount: BigInt): void {
  let buy = new Transaction(event.transaction.hash.toHexString());
  buy.type = TRADE_TYPE_BUY;
  buy.timestamp = event.block.timestamp;
  buy.market = event.address.toHexString();
  buy.user = event.params.buyer.toHexString();
  buy.tradeAmount = event.params.investmentAmount;
  buy.feeAmount = event.params.feeAmount;
  buy.netTradeAmount = netTradeAmount;
  buy.outcomeIndex = event.params.outcomeIndex;
  buy.outcomeTokensAmount = event.params.outcomeTokensBought;
  buy.save();
}

export function updatePlayerVolume(
  timeStampNow: BigInt,
  questionId: string,
  totalVolumeTraded: BigInt,
  tradeId: string
): void {
  let playerVolume = PlayerVolume.load(questionId);
  if (playerVolume === null) {
    let playerVolumeCount = new PlayerVolumeByTransaction(tradeId);
    playerVolumeCount.volume = totalVolumeTraded;
    playerVolumeCount.timestamp = timeStampNow;
    playerVolumeCount.playerQuestionId = questionId;
    playerVolumeCount.save();

    let playerVolume = new PlayerVolume(questionId);
    playerVolume.save();
    return;
  }
}

export function recordSell(event: FPMMSell, netTradeAmount: BigInt): void {
  let sell = new Transaction(event.transaction.hash.toHexString());
  sell.type = TRADE_TYPE_SELL;
  sell.timestamp = event.block.timestamp;
  sell.market = event.address.toHexString();
  sell.user = event.params.seller.toHexString();
  sell.tradeAmount = event.params.returnAmount;
  sell.feeAmount = event.params.feeAmount;
  sell.netTradeAmount = netTradeAmount;
  sell.outcomeIndex = event.params.outcomeIndex;
  sell.outcomeTokensAmount = event.params.outcomeTokensSold;
  sell.save();
}

export function recordFundingAddition(event: FPMMFundingAdded): void {
  let fpmmFundingAdded = new FpmmFundingAddition(
    event.transaction.hash.toHexString()
  );
  fpmmFundingAdded.timestamp = event.block.timestamp;
  fpmmFundingAdded.fpmm = event.address.toHexString();
  fpmmFundingAdded.funder = event.params.funder.toHexString();
  let amountsAdded = event.params.amountsAdded;
  fpmmFundingAdded.amountsAdded = amountsAdded;

  // The amounts of outcome token are limited by the cheapest outcome.
  // This will have the full balance added to the market maker
  // therefore this is the amount of collateral that the user has split.
  let addedFunds = max(amountsAdded);

  let amountsRefunded = new Array<BigInt>(amountsAdded.length);
  for (
    let outcomeIndex = 0;
    outcomeIndex < amountsAdded.length;
    outcomeIndex += 1
  ) {
    // Event emits the number of outcome tokens added to the market maker
    // Subtract this from the amount of collateral added to get the amount refunded to funder
    amountsRefunded[outcomeIndex] = addedFunds.minus(
      amountsAdded[outcomeIndex]
    );
  }
  fpmmFundingAdded.amountsRefunded = amountsRefunded;
  fpmmFundingAdded.sharesMinted = event.params.sharesMinted;
  fpmmFundingAdded.save();
}

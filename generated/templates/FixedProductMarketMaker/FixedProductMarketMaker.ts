// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FPMMBuy extends ethereum.Event {
  get params(): FPMMBuy__Params {
    return new FPMMBuy__Params(this);
  }
}

export class FPMMBuy__Params {
  _event: FPMMBuy;

  constructor(event: FPMMBuy) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get investmentAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get feeAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get outcomeIndex(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outcomeTokensBought(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get questionId(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get longTradeVolume(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get shortTradeVolume(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get fpmmFactoryAddress(): Address {
    return this._event.parameters[8].value.toAddress();
  }

  get totalFpmmHoldingValue(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get poolBalances(): Array<BigInt> {
    return this._event.parameters[10].value.toBigIntArray();
  }

  get averagePrice(): BigInt {
    return this._event.parameters[11].value.toBigInt();
  }
}

export class FPMMCreated extends ethereum.Event {
  get params(): FPMMCreated__Params {
    return new FPMMCreated__Params(this);
  }
}

export class FPMMCreated__Params {
  _event: FPMMCreated;

  constructor(event: FPMMCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenName(): string {
    return this._event.parameters[1].value.toString();
  }

  get tokenSymbol(): string {
    return this._event.parameters[2].value.toString();
  }

  get conditionalTokensAddr(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get collateralTokensAddr(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get conditionIds(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get fee(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class FPMMFundingAdded extends ethereum.Event {
  get params(): FPMMFundingAdded__Params {
    return new FPMMFundingAdded__Params(this);
  }
}

export class FPMMFundingAdded__Params {
  _event: FPMMFundingAdded;

  constructor(event: FPMMFundingAdded) {
    this._event = event;
  }

  get funder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountsAdded(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get sharesMinted(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalFpmmHoldingValue(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get longTradeVolume(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get shortTradeVolume(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get questionId(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get fpmmFactoryAddress(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get poolBalances(): Array<BigInt> {
    return this._event.parameters[8].value.toBigIntArray();
  }
}

export class FPMMSell extends ethereum.Event {
  get params(): FPMMSell__Params {
    return new FPMMSell__Params(this);
  }
}

export class FPMMSell__Params {
  _event: FPMMSell;

  constructor(event: FPMMSell) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get returnAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get feeAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get outcomeIndex(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outcomeTokensSold(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get questionId(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get longTradeVolume(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get shortTradeVolume(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get fpmmFactoryAddress(): Address {
    return this._event.parameters[8].value.toAddress();
  }

  get totalFpmmHoldingValue(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get poolBalances(): Array<BigInt> {
    return this._event.parameters[10].value.toBigIntArray();
  }

  get averagePrice(): BigInt {
    return this._event.parameters[11].value.toBigInt();
  }
}

export class FeesWithdraw extends ethereum.Event {
  get params(): FeesWithdraw__Params {
    return new FeesWithdraw__Params(this);
  }
}

export class FeesWithdraw__Params {
  _event: FeesWithdraw;

  constructor(event: FeesWithdraw) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get withdrawer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get withdrawalNo(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LongShortCurrentPrice extends ethereum.Event {
  get params(): LongShortCurrentPrice__Params {
    return new LongShortCurrentPrice__Params(this);
  }
}

export class LongShortCurrentPrice__Params {
  _event: LongShortCurrentPrice;

  constructor(event: LongShortCurrentPrice) {
    this._event = event;
  }

  get currentLongPrice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get currentShortPrice(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get questionId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get fpmmAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get totalFpmmHoldingValue(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get longTradeVolume(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get shortTradeVolume(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get poolBalances(): Array<BigInt> {
    return this._event.parameters[8].value.toBigIntArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PoolBalancesTransfered extends ethereum.Event {
  get params(): PoolBalancesTransfered__Params {
    return new PoolBalancesTransfered__Params(this);
  }
}

export class PoolBalancesTransfered__Params {
  _event: PoolBalancesTransfered;

  constructor(event: PoolBalancesTransfered) {
    this._event = event;
  }

  get withdrawer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get totalFpmmHoldingValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get longTradeVolume(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get shortTradeVolume(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get questionId(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get fpmmFactoryAddress(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class FixedProductMarketMaker extends ethereum.SmartContract {
  static bind(address: Address): FixedProductMarketMaker {
    return new FixedProductMarketMaker("FixedProductMarketMaker", address);
  }

  averagePrice(): BigInt {
    let result = super.call("averagePrice", "averagePrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_averagePrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("averagePrice", "averagePrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calcBuyAmount(investmentAmount: BigInt, outcomeIndex: BigInt): BigInt {
    let result = super.call(
      "calcBuyAmount",
      "calcBuyAmount(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(investmentAmount),
        ethereum.Value.fromUnsignedBigInt(outcomeIndex)
      ]
    );

    return result[0].toBigInt();
  }

  try_calcBuyAmount(
    investmentAmount: BigInt,
    outcomeIndex: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calcBuyAmount",
      "calcBuyAmount(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(investmentAmount),
        ethereum.Value.fromUnsignedBigInt(outcomeIndex)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calcSellAmount(returnAmount: BigInt, outcomeIndex: BigInt): BigInt {
    let result = super.call(
      "calcSellAmount",
      "calcSellAmount(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(returnAmount),
        ethereum.Value.fromUnsignedBigInt(outcomeIndex)
      ]
    );

    return result[0].toBigInt();
  }

  try_calcSellAmount(
    returnAmount: BigInt,
    outcomeIndex: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calcSellAmount",
      "calcSellAmount(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(returnAmount),
        ethereum.Value.fromUnsignedBigInt(outcomeIndex)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBalancesFor(target: Address): Array<BigInt> {
    let result = super.call(
      "getBalancesFor",
      "getBalancesFor(address):(uint256[])",
      [ethereum.Value.fromAddress(target)]
    );

    return result[0].toBigIntArray();
  }

  try_getBalancesFor(target: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getBalancesFor",
      "getBalancesFor(address):(uint256[])",
      [ethereum.Value.fromAddress(target)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getFee(): BigInt {
    let result = super.call("getFee", "getFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getFee", "getFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLongHoldingValue(_user: Address): BigInt {
    let result = super.call(
      "getLongHoldingValue",
      "getLongHoldingValue(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getLongHoldingValue(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLongHoldingValue",
      "getLongHoldingValue(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLongPrice(): BigInt {
    let result = super.call("getLongPrice", "getLongPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getLongPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getLongPrice", "getLongPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLongTradeVolume(): BigInt {
    let result = super.call(
      "getLongTradeVolume",
      "getLongTradeVolume():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getLongTradeVolume(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLongTradeVolume",
      "getLongTradeVolume():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoolBalances(): Array<BigInt> {
    let result = super.call(
      "getPoolBalances",
      "getPoolBalances():(uint256[])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_getPoolBalances(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getPoolBalances",
      "getPoolBalances():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getPositionIds(): Array<BigInt> {
    let result = super.call(
      "getPositionIds",
      "getPositionIds():(uint256[])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_getPositionIds(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getPositionIds",
      "getPositionIds():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getShortHoldingValue(_user: Address): BigInt {
    let result = super.call(
      "getShortHoldingValue",
      "getShortHoldingValue(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getShortHoldingValue(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getShortHoldingValue",
      "getShortHoldingValue(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getShortPrice(): BigInt {
    let result = super.call("getShortPrice", "getShortPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getShortPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getShortPrice",
      "getShortPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getShortTradeVolume(): BigInt {
    let result = super.call(
      "getShortTradeVolume",
      "getShortTradeVolume():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getShortTradeVolume(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getShortTradeVolume",
      "getShortTradeVolume():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStatus(): i32 {
    let result = super.call("getStatus", "getStatus():(uint8)", []);

    return result[0].toI32();
  }

  try_getStatus(): ethereum.CallResult<i32> {
    let result = super.tryCall("getStatus", "getStatus():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getTotalLongValue(): BigInt {
    let result = super.call(
      "getTotalLongValue",
      "getTotalLongValue():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTotalLongValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalLongValue",
      "getTotalLongValue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalShortValue(): BigInt {
    let result = super.call(
      "getTotalShortValue",
      "getTotalShortValue():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTotalShortValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalShortValue",
      "getTotalShortValue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalValueForAddress(account: Address): BigInt {
    let result = super.call(
      "getTotalValueForAddress",
      "getTotalValueForAddress(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getTotalValueForAddress(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalValueForAddress",
      "getTotalValueForAddress(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalValueLocked(): BigInt {
    let result = super.call(
      "getTotalValueLocked",
      "getTotalValueLocked():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTotalValueLocked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalValueLocked",
      "getTotalValueLocked():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getfeePoolWeight(): BigInt {
    let result = super.call(
      "getfeePoolWeight",
      "getfeePoolWeight():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getfeePoolWeight(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getfeePoolWeight",
      "getfeePoolWeight():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC1155BatchReceived(
    operator: Address,
    from: Address,
    ids: Array<BigInt>,
    values: Array<BigInt>,
    data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    operator: Address,
    from: Address,
    ids: Array<BigInt>,
    values: Array<BigInt>,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    operator: Address,
    from: Address,
    id: BigInt,
    value: BigInt,
    data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(id),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    operator: Address,
    from: Address,
    id: BigInt,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(id),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _conditionalTokensAddr(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _collateralTokenAddr(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _questionId(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _oracle(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _fee(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddFundingCall extends ethereum.Call {
  get inputs(): AddFundingCall__Inputs {
    return new AddFundingCall__Inputs(this);
  }

  get outputs(): AddFundingCall__Outputs {
    return new AddFundingCall__Outputs(this);
  }
}

export class AddFundingCall__Inputs {
  _call: AddFundingCall;

  constructor(call: AddFundingCall) {
    this._call = call;
  }

  get addedFunds(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get distributionHint(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class AddFundingCall__Outputs {
  _call: AddFundingCall;

  constructor(call: AddFundingCall) {
    this._call = call;
  }
}

export class BuyCall extends ethereum.Call {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }

  get investmentAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get outcomeIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get minOutcomeTokensToBuy(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class ConcludeSeasonCall extends ethereum.Call {
  get inputs(): ConcludeSeasonCall__Inputs {
    return new ConcludeSeasonCall__Inputs(this);
  }

  get outputs(): ConcludeSeasonCall__Outputs {
    return new ConcludeSeasonCall__Outputs(this);
  }
}

export class ConcludeSeasonCall__Inputs {
  _call: ConcludeSeasonCall;

  constructor(call: ConcludeSeasonCall) {
    this._call = call;
  }
}

export class ConcludeSeasonCall__Outputs {
  _call: ConcludeSeasonCall;

  constructor(call: ConcludeSeasonCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class PauseSeasonCall extends ethereum.Call {
  get inputs(): PauseSeasonCall__Inputs {
    return new PauseSeasonCall__Inputs(this);
  }

  get outputs(): PauseSeasonCall__Outputs {
    return new PauseSeasonCall__Outputs(this);
  }
}

export class PauseSeasonCall__Inputs {
  _call: PauseSeasonCall;

  constructor(call: PauseSeasonCall) {
    this._call = call;
  }
}

export class PauseSeasonCall__Outputs {
  _call: PauseSeasonCall;

  constructor(call: PauseSeasonCall) {
    this._call = call;
  }
}

export class PlaySeasonCall extends ethereum.Call {
  get inputs(): PlaySeasonCall__Inputs {
    return new PlaySeasonCall__Inputs(this);
  }

  get outputs(): PlaySeasonCall__Outputs {
    return new PlaySeasonCall__Outputs(this);
  }
}

export class PlaySeasonCall__Inputs {
  _call: PlaySeasonCall;

  constructor(call: PlaySeasonCall) {
    this._call = call;
  }
}

export class PlaySeasonCall__Outputs {
  _call: PlaySeasonCall;

  constructor(call: PlaySeasonCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SellCall extends ethereum.Call {
  get inputs(): SellCall__Inputs {
    return new SellCall__Inputs(this);
  }

  get outputs(): SellCall__Outputs {
    return new SellCall__Outputs(this);
  }
}

export class SellCall__Inputs {
  _call: SellCall;

  constructor(call: SellCall) {
    this._call = call;
  }

  get returnAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get outcomeIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get maxOutcomeTokensToSell(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SellCall__Outputs {
  _call: SellCall;

  constructor(call: SellCall) {
    this._call = call;
  }
}

export class SetFeesCall extends ethereum.Call {
  get inputs(): SetFeesCall__Inputs {
    return new SetFeesCall__Inputs(this);
  }

  get outputs(): SetFeesCall__Outputs {
    return new SetFeesCall__Outputs(this);
  }
}

export class SetFeesCall__Inputs {
  _call: SetFeesCall;

  constructor(call: SetFeesCall) {
    this._call = call;
  }

  get newFees(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeesCall__Outputs {
  _call: SetFeesCall;

  constructor(call: SetFeesCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawFeeCall extends ethereum.Call {
  get inputs(): WithdrawFeeCall__Inputs {
    return new WithdrawFeeCall__Inputs(this);
  }

  get outputs(): WithdrawFeeCall__Outputs {
    return new WithdrawFeeCall__Outputs(this);
  }
}

export class WithdrawFeeCall__Inputs {
  _call: WithdrawFeeCall;

  constructor(call: WithdrawFeeCall) {
    this._call = call;
  }
}

export class WithdrawFeeCall__Outputs {
  _call: WithdrawFeeCall;

  constructor(call: WithdrawFeeCall) {
    this._call = call;
  }
}

export class WithdrawPoolBalancesCall extends ethereum.Call {
  get inputs(): WithdrawPoolBalancesCall__Inputs {
    return new WithdrawPoolBalancesCall__Inputs(this);
  }

  get outputs(): WithdrawPoolBalancesCall__Outputs {
    return new WithdrawPoolBalancesCall__Outputs(this);
  }
}

export class WithdrawPoolBalancesCall__Inputs {
  _call: WithdrawPoolBalancesCall;

  constructor(call: WithdrawPoolBalancesCall) {
    this._call = call;
  }
}

export class WithdrawPoolBalancesCall__Outputs {
  _call: WithdrawPoolBalancesCall;

  constructor(call: WithdrawPoolBalancesCall) {
    this._call = call;
  }
}

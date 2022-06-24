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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

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
}

export class FPMMFundingRemoved extends ethereum.Event {
  get params(): FPMMFundingRemoved__Params {
    return new FPMMFundingRemoved__Params(this);
  }
}

export class FPMMFundingRemoved__Params {
  _event: FPMMFundingRemoved;

  constructor(event: FPMMFundingRemoved) {
    this._event = event;
  }

  get funder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountsRemoved(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get collateralRemovedFromFeePool(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get sharesBurnt(): BigInt {
    return this._event.parameters[3].value.toBigInt();
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
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FPMM extends ethereum.SmartContract {
  static bind(address: Address): FPMM {
    return new FPMM("FPMM", address);
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
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

  collectedFees(): BigInt {
    let result = super.call("collectedFees", "collectedFees():(uint256)", []);

    return result[0].toBigInt();
  }

  try_collectedFees(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "collectedFees",
      "collectedFees():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  feesWithdrawableBy(account: Address): BigInt {
    let result = super.call(
      "feesWithdrawableBy",
      "feesWithdrawableBy(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_feesWithdrawableBy(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feesWithdrawableBy",
      "feesWithdrawableBy(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  generateBasicPartition(outcomeSlotCount: BigInt): Array<BigInt> {
    let result = super.call(
      "generateBasicPartition",
      "generateBasicPartition(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(outcomeSlotCount)]
    );

    return result[0].toBigIntArray();
  }

  try_generateBasicPartition(
    outcomeSlotCount: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "generateBasicPartition",
      "generateBasicPartition(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(outcomeSlotCount)]
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

  getPrices(): Array<BigInt> {
    let result = super.call("getPrices", "getPrices():(uint256[])", []);

    return result[0].toBigIntArray();
  }

  try_getPrices(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall("getPrices", "getPrices():(uint256[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOwner(sender: Address): boolean {
    let result = super.call("isOwner", "isOwner(address):(bool)", [
      ethereum.Value.fromAddress(sender)
    ]);

    return result[0].toBoolean();
  }

  try_isOwner(sender: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner(address):(bool)", [
      ethereum.Value.fromAddress(sender)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
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

  get _conditionId(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _fee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
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

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

export class RemoveFundingCall extends ethereum.Call {
  get inputs(): RemoveFundingCall__Inputs {
    return new RemoveFundingCall__Inputs(this);
  }

  get outputs(): RemoveFundingCall__Outputs {
    return new RemoveFundingCall__Outputs(this);
  }
}

export class RemoveFundingCall__Inputs {
  _call: RemoveFundingCall;

  constructor(call: RemoveFundingCall) {
    this._call = call;
  }

  get sharesToBurn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveFundingCall__Outputs {
  _call: RemoveFundingCall;

  constructor(call: RemoveFundingCall) {
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

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawFeesCall extends ethereum.Call {
  get inputs(): WithdrawFeesCall__Inputs {
    return new WithdrawFeesCall__Inputs(this);
  }

  get outputs(): WithdrawFeesCall__Outputs {
    return new WithdrawFeesCall__Outputs(this);
  }
}

export class WithdrawFeesCall__Inputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawFeesCall__Outputs {
  _call: WithdrawFeesCall;

  constructor(call: WithdrawFeesCall) {
    this._call = call;
  }
}

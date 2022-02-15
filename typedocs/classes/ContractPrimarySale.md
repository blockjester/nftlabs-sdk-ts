[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / ContractPrimarySale

# Class: ContractPrimarySale<TContract\>

Handles primary sales recipients for a Contract

## Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `IThirdwebPrimarySale` |

## Table of contents

### Constructors

- [constructor](ContractPrimarySale.md#constructor)

### Methods

- [getRecipient](ContractPrimarySale.md#getrecipient)
- [setRecipient](ContractPrimarySale.md#setrecipient)

## Constructors

### constructor

• **new ContractPrimarySale**<`TContract`\>(`contractWrapper`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `IThirdwebPrimarySale`<`TContract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractWrapper` | `ContractWrapper`<`TContract`\> |

#### Defined in

[core/classes/contract-sales.ts:11](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-sales.ts#L11)

## Methods

### getRecipient

▸ **getRecipient**(): `Promise`<`string`\>

Get the primary sale recipient.

#### Returns

`Promise`<`string`\>

the wallet address.

#### Defined in

[core/classes/contract-sales.ts:19](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-sales.ts#L19)

___

### setRecipient

▸ **setRecipient**(`recipient`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Set the primary sale recipient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `string` | the wallet address |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[core/classes/contract-sales.ts:27](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-sales.ts#L27)

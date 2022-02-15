[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / ContractRoyalty

# Class: ContractRoyalty<TContract, TSchema\>

Handles Contract royalites

## Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `IThirdwebRoyalty` & `IThirdwebContract` |
| `TSchema` | extends `IGenericSchemaType` |

## Table of contents

### Constructors

- [constructor](ContractRoyalty.md#constructor)

### Methods

- [getRoyaltyInfo](ContractRoyalty.md#getroyaltyinfo)
- [setRoyaltyInfo](ContractRoyalty.md#setroyaltyinfo)

## Constructors

### constructor

• **new ContractRoyalty**<`TContract`, `TSchema`\>(`contractWrapper`, `metadata`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `IThirdwebRoyalty`<`TContract`\> & `IThirdwebContract`<`TContract`\> |
| `TSchema` | extends `IGenericSchemaType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractWrapper` | `ContractWrapper`<`TContract`\> |
| `metadata` | [`ContractMetadata`](ContractMetadata.md)<`TContract`, `TSchema`\> |

#### Defined in

[core/classes/contract-royalty.ts:18](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-royalty.ts#L18)

## Methods

### getRoyaltyInfo

▸ **getRoyaltyInfo**(): `Promise`<{ `fee_recipient`: `string` ; `seller_fee_basis_points`: `number`  }\>

#### Returns

`Promise`<{ `fee_recipient`: `string` ; `seller_fee_basis_points`: `number`  }\>

#### Defined in

[core/classes/contract-royalty.ts:26](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-royalty.ts#L26)

___

### setRoyaltyInfo

▸ **setRoyaltyInfo**(`royaltyData`): `Promise`<`TransactionResultWithMetadata`<{ `fee_recipient`: `string` ; `seller_fee_basis_points`: `number`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `royaltyData` | `Object` |
| `royaltyData.fee_recipient` | `undefined` \| `string` |
| `royaltyData.seller_fee_basis_points` | `undefined` \| `number` |

#### Returns

`Promise`<`TransactionResultWithMetadata`<{ `fee_recipient`: `string` ; `seller_fee_basis_points`: `number`  }\>\>

#### Defined in

[core/classes/contract-royalty.ts:36](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-royalty.ts#L36)

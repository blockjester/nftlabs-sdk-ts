[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / ContractMetadata

# Class: ContractMetadata<TContract, TSchema\>

Handles metadata for a Contract

## Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `IThirdwebContract` |
| `TSchema` | extends `IGenericSchemaType` |

## Table of contents

### Constructors

- [constructor](ContractMetadata.md#constructor)

### Methods

- [get](ContractMetadata.md#get)
- [set](ContractMetadata.md#set)
- [update](ContractMetadata.md#update)

## Constructors

### constructor

• **new ContractMetadata**<`TContract`, `TSchema`\>(`contractWrapper`, `schema`, `storage`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `IThirdwebContract`<`TContract`\> |
| `TSchema` | extends `IGenericSchemaType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractWrapper` | `ContractWrapper`<`TContract`\> |
| `schema` | `TSchema` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |

#### Defined in

[core/classes/contract-metadata.ts:24](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-metadata.ts#L24)

## Methods

### get

▸ **get**(): `Promise`<`output`<`TSchema`[``"output"``]\>\>

#### Returns

`Promise`<`output`<`TSchema`[``"output"``]\>\>

the metadata of the given contract

#### Defined in

[core/classes/contract-metadata.ts:50](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-metadata.ts#L50)

___

### set

▸ **set**(`metadata`): `Promise`<`If`<`Equals`<`never`, `output`<`TSchema`[``"output"``]\>\>, `Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>, `TransactionResultWithMetadata`<`output`<`TSchema`[``"output"``]\>\>\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `input`<`TSchema`[``"input"``]\> | the metadata to set |

#### Returns

`Promise`<`If`<`Equals`<`never`, `output`<`TSchema`[``"output"``]\>\>, `Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>, `TransactionResultWithMetadata`<`output`<`TSchema`[``"output"``]\>\>\>\>

#### Defined in

[core/classes/contract-metadata.ts:60](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-metadata.ts#L60)

___

### update

▸ **update**(`metadata`): `Promise`<`If`<`Equals`<`never`, `output`<`TSchema`[``"output"``]\>\>, `Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>, `TransactionResultWithMetadata`<`output`<`TSchema`[``"output"``]\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Partial`<`input`<`TSchema`[``"input"``]\>\> |

#### Returns

`Promise`<`If`<`Equals`<`never`, `output`<`TSchema`[``"output"``]\>\>, `Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>, `TransactionResultWithMetadata`<`output`<`TSchema`[``"output"``]\>\>\>\>

#### Defined in

[core/classes/contract-metadata.ts:72](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-metadata.ts#L72)

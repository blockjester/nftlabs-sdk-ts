[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / ContractEncoder

# Class: ContractEncoder<TContract\>

Encodes and decodes Contract functions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `BaseContract` |

## Table of contents

### Constructors

- [constructor](ContractEncoder.md#constructor)

### Methods

- [decode](ContractEncoder.md#decode)
- [encode](ContractEncoder.md#encode)

## Constructors

### constructor

• **new ContractEncoder**<`TContract`\>(`contractWrapper`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `BaseContract`<`TContract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractWrapper` | `ContractWrapper`<`TContract`\> |

#### Defined in

[core/classes/contract-encoder.ts:11](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-encoder.ts#L11)

## Methods

### decode

▸ **decode**(`fn`, `encodedArgs`): `Result`

Decode encoded call data for a given function

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | keyof `TContract`[``"functions"``] |
| `encodedArgs` | `string` |

#### Returns

`Result`

#### Defined in

[core/classes/contract-encoder.ts:34](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-encoder.ts#L34)

___

### encode

▸ **encode**(`fn`, `args`): `string`

Encodes the given contract function with argument

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | keyof `TContract`[``"functions"``] |
| `args` | `Parameters`<`TContract`[``"functions"``][keyof `TContract`[``"functions"``]]\> |

#### Returns

`string`

the encoded data

#### Defined in

[core/classes/contract-encoder.ts:19](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-encoder.ts#L19)

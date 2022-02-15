[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / Split

# Class: Split

Create custom royalty splits to distribute funds.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const split = sdk.getSplit("{{contract_address}}");
```

## Implements

- `UpdateableNetwork`

## Table of contents

### Constructors

- [constructor](Split.md#constructor)

### Properties

- [encoder](Split.md#encoder)
- [metadata](Split.md#metadata)
- [contractFactory](Split.md#contractfactory)
- [contractType](Split.md#contracttype)
- [schema](Split.md#schema)

### Methods

- [balanceOf](Split.md#balanceof)
- [balanceOfAllRecipients](Split.md#balanceofallrecipients)
- [balanceOfToken](Split.md#balanceoftoken)
- [balanceOfTokenAllRecipients](Split.md#balanceoftokenallrecipients)
- [distribute](Split.md#distribute)
- [distributeToken](Split.md#distributetoken)
- [getAddress](Split.md#getaddress)
- [getAllRecipients](Split.md#getallrecipients)
- [getRecipientSplitPercentage](Split.md#getrecipientsplitpercentage)
- [onNetworkUpdated](Split.md#onnetworkupdated)
- [withdraw](Split.md#withdraw)
- [withdrawToken](Split.md#withdrawtoken)

## Constructors

### constructor

• **new Split**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`Split`\> |

#### Defined in

[contracts/split.ts:52](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L52)

## Properties

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`Split`\>

#### Defined in

[contracts/split.ts:50](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L50)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`Split`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `recipients`: `ZodDefault`<`ZodArray`<`ZodObject`<{ `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `shares`: `string`  }, { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>, ``"many"``\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, `extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `recipients`: `ZodDefault`<`ZodArray`<`ZodObject`<{ `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `shares`: `string`  }, { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>, ``"many"``\>\>  }\>\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `recipients`: { `address`: `string` ; `shares`: `string`  }[] ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `recipients`: `undefined` \| { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }[] ; `trusted_forwarder`: `undefined` \| `string`  }\> = SplitsContractDeploy; `input`: `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `recipients`: `ZodDefault`<`ZodArray`<`ZodObject`<{ `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `shares`: `string`  }, { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>, ``"many"``\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `recipients`: { `address`: `string` ; `shares`: `string`  }[]  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `recipients`: `undefined` \| { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }[]  }\> = SplitsContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `recipients`: `ZodArray`<`ZodObject`<`extendShape`<{ `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, { `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema }\>, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `shares`: `BigNumber`  }, { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>, ``"many"``\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `recipients`: { shares: BigNumber; address: string; }[]  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `recipients`: { shares: string \| number \| bigint \| BigNumber; address: string; }[]  }\> = SplitsContractOutput }\>

#### Defined in

[contracts/split.ts:49](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L49)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `Split__factory` = `Split__factory`

#### Defined in

[contracts/split.ts:40](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L40)

___

### contractType

▪ `Static` **contractType**: ``"split"``

#### Defined in

[contracts/split.ts:39](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L39)

___

### schema

▪ `Static` **schema**: `Object` = `SplitsContractSchema`

internal

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deploy` | `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `recipients`: `ZodDefault`<`ZodArray`<`ZodObject`<{ `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `shares`: `string`  }, { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>, ``"many"``\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, `extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `recipients`: `ZodDefault`<`ZodArray`<`ZodObject`<{ `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `shares`: `string`  }, { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>, ``"many"``\>\>  }\>\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `recipients`: { `address`: `string` ; `shares`: `string`  }[] ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `recipients`: `undefined` \| { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }[] ; `trusted_forwarder`: `undefined` \| `string`  }\> |
| `input` | `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `recipients`: `ZodDefault`<`ZodArray`<`ZodObject`<{ `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `shares`: `string`  }, { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>, ``"many"``\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `recipients`: { `address`: `string` ; `shares`: `string`  }[]  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `recipients`: `undefined` \| { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }[]  }\> |
| `output` | `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `recipients`: `ZodArray`<`ZodObject`<`extendShape`<{ `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, { `address`: `ZodString` ; `shares`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema }\>, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `shares`: `BigNumber`  }, { `address`: `string` ; `shares`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>, ``"many"``\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `recipients`: { shares: BigNumber; address: string; }[]  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `recipients`: { shares: string \| number \| bigint \| BigNumber; address: string; }[]  }\> |

#### Defined in

[contracts/split.ts:44](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L44)

## Methods

### balanceOf

▸ **balanceOf**(`address`): `Promise`<`BigNumber`\>

Get Funds owed to a particular wallet

**`remarks`** Get the amount of funds in the native currency held by the contract thats owed to a specific recipient.

**`example`**
```javascript
// The address to check the funds of
const address = "{{wallet_address}}";
const funds = await contract.balanceOf(address);
console.log(funds);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[contracts/split.ts:172](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L172)

___

### balanceOfAllRecipients

▸ **balanceOfAllRecipients**(): `Promise`<{ `[key: string]`: `BigNumber`;  }\>

Returns all the recipients and their balances in the native currency.

#### Returns

`Promise`<{ `[key: string]`: `BigNumber`;  }\>

A map of recipient addresses to their balances in the native currency.

#### Defined in

[contracts/split.ts:132](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L132)

___

### balanceOfToken

▸ **balanceOfToken**(`walletAddress`, `tokenAddress`): `Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

Get non-native Token Funds owed to a particular wallet

**`remarks`** Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.

**`example`**
```javascript
// The address to check the funds of
const address = "{{wallet_address}}";
// The address of the currency to check the contracts funds of
const tokenAddress = "0x..."
const funds = await contract.balanceOfToken(address, tokenAddress);
console.log(funds);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |
| `tokenAddress` | `string` |

#### Returns

`Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

#### Defined in

[contracts/split.ts:204](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L204)

___

### balanceOfTokenAllRecipients

▸ **balanceOfTokenAllRecipients**(`tokenAddress`): `Promise`<{ `[key: string]`: `CurrencyValue`;  }\>

Returns all the recipients and their balances in a non-native currency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | The address of the currency to check the balances in. |

#### Returns

`Promise`<{ `[key: string]`: `CurrencyValue`;  }\>

A map of recipient addresses to their balances in the specified currency.

#### Defined in

[contracts/split.ts:147](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L147)

___

### distribute

▸ **distribute**(): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Distribute Funds

**`remarks`** Distribute funds held by the contract in the native currency to all recipients.

**`example`**
```javascript
await contract.distribute();
```

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/split.ts:297](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L297)

___

### distributeToken

▸ **distributeToken**(`tokenAddress`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Distribute Funds

**`remarks`** Distribute funds held by the contract in the native currency to all recipients.

**`example`**
```javascript
// The address of the currency to distribute funds
const tokenAddress = "0x..."
await contract.distributeToken(tokenAddress);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | The address of the currency contract to distribute funds |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/split.ts:317](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L317)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Implementation of

UpdateableNetwork.getAddress

#### Defined in

[contracts/split.ts:78](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L78)

___

### getAllRecipients

▸ **getAllRecipients**(): `Promise`<`SplitRecipient`[]\>

Get Recipients of this splits contract

**`remarks`** Get the data about the shares of every split recipient on the contract

**`example`**
```javascript
const recipients = await contract.getAllRecipients();
console.log(recipients);
```

#### Returns

`Promise`<`SplitRecipient`[]\>

#### Defined in

[contracts/split.ts:97](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L97)

___

### getRecipientSplitPercentage

▸ **getRecipientSplitPercentage**(`address`): `Promise`<`SplitRecipient`\>

Get the % of funds owed to a given address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address to check percentage of |

#### Returns

`Promise`<`SplitRecipient`\>

#### Defined in

[contracts/split.ts:236](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L236)

___

### onNetworkUpdated

▸ **onNetworkUpdated**(`network`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |

#### Returns

`void`

#### Implementation of

UpdateableNetwork.onNetworkUpdated

#### Defined in

[contracts/split.ts:74](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L74)

___

### withdraw

▸ **withdraw**(`walletAddress`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Triggers a transfer to account of the amount of native currency they are owed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | `string` | The address to distributes the amount to |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/split.ts:261](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L261)

___

### withdrawToken

▸ **withdrawToken**(`walletAddress`, `tokenAddress`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Triggers a transfer to account of the amount of a given currency they are owed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | `string` | The address to distributes the amount to |
| `tokenAddress` | `string` | The address of the currency contract to distribute funds |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/split.ts:275](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/split.ts#L275)

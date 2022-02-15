[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / Pack

# Class: Pack

Create lootboxes of NFTs with rarity based open mechanics.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const pack = sdk.getPack("{{contract_address}}");
```

## Implements

- `UpdateableNetwork`

## Table of contents

### Constructors

- [constructor](Pack.md#constructor)

### Properties

- [encoder](Pack.md#encoder)
- [metadata](Pack.md#metadata)
- [roles](Pack.md#roles)
- [royalty](Pack.md#royalty)
- [contractFactory](Pack.md#contractfactory)
- [contractRoles](Pack.md#contractroles)
- [contractType](Pack.md#contracttype)
- [schema](Pack.md#schema)

### Methods

- [balance](Pack.md#balance)
- [balanceOf](Pack.md#balanceof)
- [create](Pack.md#create)
- [depositLink](Pack.md#depositlink)
- [get](Pack.md#get)
- [getAddress](Pack.md#getaddress)
- [getAll](Pack.md#getall)
- [getLinkBalance](Pack.md#getlinkbalance)
- [getNFTs](Pack.md#getnfts)
- [getOwned](Pack.md#getowned)
- [isApproved](Pack.md#isapproved)
- [onNetworkUpdated](Pack.md#onnetworkupdated)
- [open](Pack.md#open)
- [setApproval](Pack.md#setapproval)
- [transfer](Pack.md#transfer)
- [transferBatchFrom](Pack.md#transferbatchfrom)
- [transferFrom](Pack.md#transferfrom)

## Constructors

### constructor

• **new Pack**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`Pack`\> |

#### Defined in

[contracts/pack.ts:73](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L73)

## Properties

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`Pack`\>

#### Defined in

[contracts/pack.ts:70](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L70)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`Pack`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = PacksContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = PacksContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = PacksContractOutput }\>

#### Defined in

[contracts/pack.ts:68](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L68)

___

### roles

• **roles**: [`ContractRoles`](ContractRoles.md)<`Pack`, ``"transfer"`` \| ``"admin"`` \| ``"minter"`` \| ``"pauser"``\>

#### Defined in

[contracts/pack.ts:69](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L69)

___

### royalty

• **royalty**: [`ContractRoyalty`](ContractRoyalty.md)<`Pack`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = PacksContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = PacksContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = PacksContractOutput }\>

#### Defined in

[contracts/pack.ts:71](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L71)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `Pack__factory` = `Pack__factory`

#### Defined in

[contracts/pack.ts:59](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L59)

___

### contractRoles

▪ `Static` **contractRoles**: readonly [``"admin"``, ``"minter"``, ``"pauser"``, ``"transfer"``]

#### Defined in

[contracts/pack.ts:58](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L58)

___

### contractType

▪ `Static` **contractType**: ``"pack"``

#### Defined in

[contracts/pack.ts:57](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L57)

___

### schema

▪ `Static` **schema**: `Object` = `PacksContractSchema`

internal

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deploy` | `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> |
| `input` | `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> |
| `output` | `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> |

#### Defined in

[contracts/pack.ts:63](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L63)

## Methods

### balance

▸ **balance**(`tokenId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[contracts/pack.ts:213](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L213)

___

### balanceOf

▸ **balanceOf**(`address`, `tokenId`): `Promise`<`BigNumber`\>

Get Pack Balance

**`remarks`** Get a wallets pack balance (number of a specific packs in this contract owned by the wallet).

**`example`**
```javascript
// Address of the wallet to check pack balance
const address = "{{wallet_address}}"";
// The token ID of the pack you want to check the wallets balance of
const tokenId = "0"

const balance = await contract.balanceOf(address, tokenId);
console.log(balance);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[contracts/pack.ts:209](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L209)

___

### create

▸ **create**(`args`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<`PackMetadata`\>\>

Create Pack

**`remarks`** Create a new pack with its own rewards.

**`example`**
```javascript
// Data to create the pack
const pack = {
  // The address of the contract that holds the rewards you want to include
  assetContract: "0x...",
  // The metadata of the pack
  metadata: {
    name: "Cool Pack",
    description: "This is a cool pack",
    // This can be an image url or image file
    image: readFileSync("path/to/image.png"),
  },
  // The NFTs you want to include in the pack
  assets: [
    {
      tokenId: 0, // The token ID of the asset you want to add
      amount: 1, // The amount of the asset you want to add
    }, {
      tokenId: 1,
      amount: 1,
    }
  ],
};

await contract.create(pack);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `IPackCreateArgs` | Args for the pack creation |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<`PackMetadata`\>\>

- The newly created pack metadata

#### Defined in

[contracts/pack.ts:383](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L383)

___

### depositLink

▸ **depositLink**(`amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/pack.ts:503](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L503)

___

### get

▸ **get**(`packId`): `Promise`<`PackMetadata`\>

*****************************
READ FUNCTIONS

#### Parameters

| Name | Type |
| :------ | :------ |
| `packId` | `string` |

#### Returns

`Promise`<`PackMetadata`\>

#### Defined in

[contracts/pack.ts:109](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L109)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Implementation of

UpdateableNetwork.getAddress

#### Defined in

[contracts/pack.ts:101](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L101)

___

### getAll

▸ **getAll**(): `Promise`<`PackMetadata`[]\>

Get Pack Data

**`remarks`** Get data associated with every pack in this contract.

**`example`**
```javascript
const packs = await contract.getAll();
console.log(packs);
```

#### Returns

`Promise`<`PackMetadata`[]\>

The NFT metadata for all NFTs in the contract.

#### Defined in

[contracts/pack.ts:146](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L146)

___

### getLinkBalance

▸ **getLinkBalance**(): `Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

#### Returns

`Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

#### Defined in

[contracts/pack.ts:227](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L227)

___

### getNFTs

▸ **getNFTs**(`packId`): `Promise`<`PackNFTMetadata`[]\>

Get Pack Reward Data

**`remarks`** Get data associated with the rewards inside a specified pack

**`example`**
```javascript
// The pack ID of the pack whos rewards you want to get
const packId = 0;

const nfts = await contract.getNFTs(packId);
console.log(nfts);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `packId` | `string` |

#### Returns

`Promise`<`PackNFTMetadata`[]\>

The NFT metadata for all NFTs in the contract.

#### Defined in

[contracts/pack.ts:171](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L171)

___

### getOwned

▸ **getOwned**(`_address?`): `Promise`<`PackMetadataWithBalance`[]\>

`getOwned` is a convenience method for getting all owned tokens
for a particular wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_address?` | `string` | The address to check for token ownership |

#### Returns

`Promise`<`PackMetadataWithBalance`[]\>

An array of PackMetadataWithBalance objects that are owned by the address

#### Defined in

[contracts/pack.ts:248](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L248)

___

### isApproved

▸ **isApproved**(`address`, `operator`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `operator` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[contracts/pack.ts:220](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L220)

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

[contracts/pack.ts:97](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L97)

___

### open

▸ **open**(`packId`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }\>[]\>

Open Pack

**`remarks`** Open a pack to burn it and obtain the reward asset inside.

**`example`**
```javascript
// The pack ID of the asset you want to buy
const packId = "0";
const tx = await contract.open(packId);
const receipt = tx.receipt; // the transaction receipt
const packId = tx.id; // the id of the pack that was opened
const rewards = tx.data(); // the contents of the opened pack
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `packId` | `string` |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }\>[]\>

#### Defined in

[contracts/pack.ts:293](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L293)

___

### setApproval

▸ **setApproval**(`operator`, `approved?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `operator` | `string` | `undefined` |
| `approved` | `boolean` | `true` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/pack.ts:491](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L491)

___

### transfer

▸ **transfer**(`to`, `tokenId`, `amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Transfer Pack

**`remarks`** Transfer a pack from the connected wallet to another wallet.

**`example`**
```javascript
// Address of the wallet you want to send the pack to
const toAddress = "0x...";

// The token ID of the pack you want to send
const tokenId = "0";

// The number of packs you want to send
const amount = 1;

await contract.transfer(toAddress, tokenId, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `tokenId` | `string` |
| `amount` | `BigNumber` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/pack.ts:442](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L442)

___

### transferBatchFrom

▸ **transferBatchFrom**(`from`, `to`, `args`, `data?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `args` | `IPackBatchArgs`[] |
| `data` | `BytesLike` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/pack.ts:475](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L475)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `args`, `data?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `args` | `IPackBatchArgs` |
| `data` | `BytesLike` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/pack.ts:458](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/pack.ts#L458)

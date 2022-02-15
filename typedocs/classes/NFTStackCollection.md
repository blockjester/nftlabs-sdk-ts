[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / NFTStackCollection

# Class: NFTStackCollection

Setup a collection of one-of-one NFTs that are minted as users claim them.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const nftStackCollection = sdk.getNFTStackCollection("{{contract_address}}");
```

## Hierarchy

- [`Erc1155`](Erc1155.md)<`TokenERC1155`\>

  ↳ **`NFTStackCollection`**

## Table of contents

### Constructors

- [constructor](NFTStackCollection.md#constructor)

### Properties

- [encoder](NFTStackCollection.md#encoder)
- [metadata](NFTStackCollection.md#metadata)
- [primarySale](NFTStackCollection.md#primarysale)
- [roles](NFTStackCollection.md#roles)
- [royalty](NFTStackCollection.md#royalty)
- [contractFactory](NFTStackCollection.md#contractfactory)
- [contractRoles](NFTStackCollection.md#contractroles)
- [contractType](NFTStackCollection.md#contracttype)

### Methods

- [balance](NFTStackCollection.md#balance)
- [balanceOf](NFTStackCollection.md#balanceof)
- [burn](NFTStackCollection.md#burn)
- [get](NFTStackCollection.md#get)
- [getAddress](NFTStackCollection.md#getaddress)
- [getAll](NFTStackCollection.md#getall)
- [getOwned](NFTStackCollection.md#getowned)
- [increaseSupply](NFTStackCollection.md#increasesupply)
- [isApproved](NFTStackCollection.md#isapproved)
- [isTransferRestricted](NFTStackCollection.md#istransferrestricted)
- [mint](NFTStackCollection.md#mint)
- [mintBatch](NFTStackCollection.md#mintbatch)
- [mintBatchTo](NFTStackCollection.md#mintbatchto)
- [mintTo](NFTStackCollection.md#mintto)
- [totalSupply](NFTStackCollection.md#totalsupply)
- [transfer](NFTStackCollection.md#transfer)

## Constructors

### constructor

• **new NFTStackCollection**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`TokenERC1155`\> |

#### Overrides

[Erc1155](Erc1155.md).[constructor](Erc1155.md#constructor)

#### Defined in

[contracts/nft-stack-collection.ts:61](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L61)

## Properties

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`TokenERC1155`\>

#### Defined in

[contracts/nft-stack-collection.ts:59](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L59)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`TokenERC1155`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `trusted_forwarder`: `undefined` \| `string`  }\> = TokenErc1155ContractDeploy; `input`: `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `number`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number`  }\> = TokenErc1155ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number`  }\> = TokenErc1155ContractOutput }\>

#### Defined in

[contracts/nft-stack-collection.ts:46](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L46)

___

### primarySale

• **primarySale**: [`ContractPrimarySale`](ContractPrimarySale.md)<`TokenERC1155`\>

#### Defined in

[contracts/nft-stack-collection.ts:58](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L58)

___

### roles

• **roles**: [`ContractRoles`](ContractRoles.md)<`TokenERC1155`, ``"transfer"`` \| ``"admin"`` \| ``"minter"``\>

#### Defined in

[contracts/nft-stack-collection.ts:50](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L50)

___

### royalty

• **royalty**: [`ContractRoyalty`](ContractRoyalty.md)<`TokenERC1155`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `trusted_forwarder`: `undefined` \| `string`  }\> = TokenErc1155ContractDeploy; `input`: `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `number`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number`  }\> = TokenErc1155ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number`  }\> = TokenErc1155ContractOutput }\>

#### Defined in

[contracts/nft-stack-collection.ts:54](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L54)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `TokenERC1155__factory` = `TokenERC1155__factory`

#### Defined in

[contracts/nft-stack-collection.ts:40](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L40)

___

### contractRoles

▪ `Static` **contractRoles**: readonly [``"admin"``, ``"minter"``, ``"transfer"``]

#### Defined in

[contracts/nft-stack-collection.ts:39](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L39)

___

### contractType

▪ `Static` **contractType**: ``"nft-stack-collection"``

#### Defined in

[contracts/nft-stack-collection.ts:38](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L38)

## Methods

### balance

▸ **balance**(`tokenId`): `Promise`<`BigNumber`\>

Get NFT Balance for the currently connected wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Erc1155](Erc1155.md).[balance](Erc1155.md#balance)

#### Defined in

[core/classes/erc-1155.ts:177](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L177)

___

### balanceOf

▸ **balanceOf**(`address`, `tokenId`): `Promise`<`BigNumber`\>

Get NFT Balance

**`remarks`** Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).

**`example`**
```javascript
// Address of the wallet to check NFT balance
const address = "{{wallet_address}}";

const balance = await contract.balanceOf(address);
console.log(balance);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Erc1155](Erc1155.md).[balanceOf](Erc1155.md#balanceof)

#### Defined in

[core/classes/erc-1155.ts:167](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L167)

___

### burn

▸ **burn**(`tokenId`, `amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Burn a single NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | the token Id to burn |
| `amount` | `BigNumberish` | - |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc1155](Erc1155.md).[burn](Erc1155.md#burn)

#### Defined in

[core/classes/erc-1155.ts:254](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L254)

___

### get

▸ **get**(`tokenId`): `Promise`<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>

Get a single NFT Metadata

**`example`**
```javascript
const nft = await contract.get("0");
console.log(nft);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | the tokenId of the NFT to retrieve |

#### Returns

`Promise`<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>

The NFT metadata

#### Inherited from

[Erc1155](Erc1155.md).[get](Erc1155.md#get)

#### Defined in

[core/classes/erc-1155.ts:72](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L72)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Inherited from

[Erc1155](Erc1155.md).[getAddress](Erc1155.md#getaddress)

#### Defined in

[core/classes/erc-1155.ts:53](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L53)

___

### getAll

▸ **getAll**(): `Promise`<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }[]\>

Get All NFTs

**`remarks`** Get all the data associated with every NFT in this contract.

**`example`**
```javascript
const nfts = await contract.getAll();
console.log(nfts);
```

#### Returns

`Promise`<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }[]\>

The NFT metadata for all NFTs queried.

#### Inherited from

[Erc1155](Erc1155.md).[getAll](Erc1155.md#getall)

#### Defined in

[core/classes/erc-1155.ts:97](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L97)

___

### getOwned

▸ **getOwned**(`_address?`): `Promise`<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }[]\>

Get Owned NFTs

**`remarks`** Get all the data associated with the NFTs owned by a specific wallet.

**`example`**
```javascript
// Address of the wallet to get the NFTs of
const address = "{{wallet_address}}";
const nfts = await contract.getOwned(address);
console.log(nfts);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `_address?` | `string` |

#### Returns

`Promise`<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }[]\>

The NFT metadata for all NFTs in the contract.

#### Inherited from

[Erc1155](Erc1155.md).[getOwned](Erc1155.md#getowned)

#### Defined in

[core/classes/erc-1155.ts:121](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L121)

___

### increaseSupply

▸ **increaseSupply**(`to`, `tokenId`, `additionalSupply`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>\>

Increase the supply of an existing NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `string` | the address to mint to |
| `tokenId` | `BigNumberish` | the token id of the NFT to increase supply of |
| `additionalSupply` | `BigNumberish` | the additional amount to mint |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>\>

#### Defined in

[contracts/nft-stack-collection.ts:173](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L173)

___

### isApproved

▸ **isApproved**(`address`, `operator`): `Promise`<`boolean`\>

Get whether this wallet has approved transfers from the given operator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the wallet address |
| `operator` | `string` | the operator address |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Erc1155](Erc1155.md).[isApproved](Erc1155.md#isapproved)

#### Defined in

[core/classes/erc-1155.ts:200](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L200)

___

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Get whether users can transfer NFTs from this contract

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Erc1155](Erc1155.md).[isTransferRestricted](Erc1155.md#istransferrestricted)

#### Defined in

[core/classes/erc-1155.ts:187](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L187)

___

### mint

▸ **mint**(`metadataWithSupply`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>\>

Mint NFT for the connected wallet

**`remarks`** See [NFTStackCollection.mintTo](NFTStackCollection.md#mintto)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadataWithSupply` | `Object` |
| `metadataWithSupply.metadata` | `Object` |
| `metadataWithSupply.metadata.animation_url` | `any` |
| `metadataWithSupply.metadata.background_color` | `undefined` \| `string` |
| `metadataWithSupply.metadata.description` | `undefined` \| `string` |
| `metadataWithSupply.metadata.external_url` | `any` |
| `metadataWithSupply.metadata.image` | `any` |
| `metadataWithSupply.metadata.name` | `string` |
| `metadataWithSupply.metadata.properties` | `undefined` \| `Record`<`string`, `any`\> \| { value?: any; key: string; }[] |
| `metadataWithSupply.supply` | `string` \| `number` \| `bigint` \| `BigNumber` |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>\>

#### Defined in

[contracts/nft-stack-collection.ts:101](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L101)

___

### mintBatch

▸ **mintBatch**(`metadatas`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>[]\>

Mint Many NFTs for the connected wallet

**`remarks`** See [NFTStackCollection.mintBatchTo](NFTStackCollection.md#mintbatchto)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadatas` | { `metadata`: { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { value?: any; key: string; }[]  } ; `supply`: `string` \| `number` \| `bigint` \| `BigNumber`  }[] |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>[]\>

#### Defined in

[contracts/nft-stack-collection.ts:197](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L197)

___

### mintBatchTo

▸ **mintBatchTo**(`to`, `metadataWithSupply`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>[]\>

Mint Many NFTs with limited supplies

**`remarks`** Mint many different NFTs with limited supplies to a specified wallet.

**`example`**
```javascript
// Address of the wallet you want to mint the NFT to
const toAddress = "{{wallet_address}}"

// Custom metadata and supplies of your NFTs
const metadataWithSupply = [{
  supply: 50, // The number of this NFT you want to mint
  metadata: {
    name: "Cool NFT #1",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
  },
}, {
  supply: 100,
  metadata: {
    name: "Cool NFT #2",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
  },
}];

const tx = await contract.mintBatchTo(toAddress, metadataWithSupply);
const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
const firstTokenId = tx[0].id; // token id of the first minted NFT
const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `metadataWithSupply` | { `metadata`: { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { value?: any; key: string; }[]  } ; `supply`: `string` \| `number` \| `bigint` \| `BigNumber`  }[] |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>[]\>

#### Defined in

[contracts/nft-stack-collection.ts:239](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L239)

___

### mintTo

▸ **mintTo**(`to`, `metadataWithSupply`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>\>

Mint an NFT with a limited supply

**`remarks`** Mint an NFT with a limited supply to a specified wallet.

**`example`**
```javascript
// Address of the wallet you want to mint the NFT to
const toAddress = "{{wallet_address}}"

// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
const metadata = {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}

const metadataWithSupply = {
  metadata,
  supply: 1000, // The number of this NFT you want to mint
}

const tx = await contract.mintTo(toAddress, metadataWithSupply);
const receipt = tx.receipt; // the transaction receipt
const tokenId = tx.id; // the id of the NFT minted
const nft = await tx.data(); // (optional) fetch details of minted NFT
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `metadataWithSupply` | `Object` |
| `metadataWithSupply.metadata` | `Object` |
| `metadataWithSupply.metadata.animation_url` | `any` |
| `metadataWithSupply.metadata.background_color` | `undefined` \| `string` |
| `metadataWithSupply.metadata.description` | `undefined` \| `string` |
| `metadataWithSupply.metadata.external_url` | `any` |
| `metadataWithSupply.metadata.image` | `any` |
| `metadataWithSupply.metadata.name` | `string` |
| `metadataWithSupply.metadata.properties` | `undefined` \| `Record`<`string`, `any`\> \| { value?: any; key: string; }[] |
| `metadataWithSupply.supply` | `string` \| `number` \| `bigint` \| `BigNumber` |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }\>\>

#### Defined in

[contracts/nft-stack-collection.ts:138](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-collection.ts#L138)

___

### totalSupply

▸ **totalSupply**(`tokenId`): `Promise`<`BigNumber`\>

Returns the total supply of a specific token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | The token ID to get the total supply of |

#### Returns

`Promise`<`BigNumber`\>

the total supply

#### Inherited from

[Erc1155](Erc1155.md).[totalSupply](Erc1155.md#totalsupply)

#### Defined in

[core/classes/erc-1155.ts:149](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L149)

___

### transfer

▸ **transfer**(`to`, `tokenId`, `amount`, `data?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Transfer a single NFT

**`remarks`** Transfer an NFT from the connected wallet to another wallet.

**`example`**
```javascript
// Address of the wallet you want to send the NFT to
const toAddress = "{{wallet_address}}";

// The token ID of the NFT you want to send
const tokenId = "0";

await contract.transfer(toAddress, tokenId);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc1155](Erc1155.md).[transfer](Erc1155.md#transfer)

#### Defined in

[core/classes/erc-1155.ts:227](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-1155.ts#L227)

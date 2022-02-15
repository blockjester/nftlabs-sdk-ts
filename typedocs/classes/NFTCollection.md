[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / NFTCollection

# Class: NFTCollection

Create a collection of one-of-one NFTs.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const nftCollection = sdk.getNFTCollection("{{contract_address}}");
```

## Hierarchy

- [`Erc721`](Erc721.md)<`TokenERC721`\>

  ↳ **`NFTCollection`**

## Table of contents

### Constructors

- [constructor](NFTCollection.md#constructor)

### Properties

- [encoder](NFTCollection.md#encoder)
- [metadata](NFTCollection.md#metadata)
- [primarySale](NFTCollection.md#primarysale)
- [roles](NFTCollection.md#roles)
- [royalty](NFTCollection.md#royalty)
- [contractFactory](NFTCollection.md#contractfactory)
- [contractRoles](NFTCollection.md#contractroles)
- [contractType](NFTCollection.md#contracttype)

### Methods

- [balance](NFTCollection.md#balance)
- [balanceOf](NFTCollection.md#balanceof)
- [burn](NFTCollection.md#burn)
- [generateSignature](NFTCollection.md#generatesignature)
- [generateSignatureBatch](NFTCollection.md#generatesignaturebatch)
- [get](NFTCollection.md#get)
- [getAddress](NFTCollection.md#getaddress)
- [getAll](NFTCollection.md#getall)
- [getOwned](NFTCollection.md#getowned)
- [isApproved](NFTCollection.md#isapproved)
- [isTransferRestricted](NFTCollection.md#istransferrestricted)
- [mint](NFTCollection.md#mint)
- [mintBatch](NFTCollection.md#mintbatch)
- [mintBatchTo](NFTCollection.md#mintbatchto)
- [mintTo](NFTCollection.md#mintto)
- [mintWithSignature](NFTCollection.md#mintwithsignature)
- [ownerOf](NFTCollection.md#ownerof)
- [totalSupply](NFTCollection.md#totalsupply)
- [transfer](NFTCollection.md#transfer)
- [verify](NFTCollection.md#verify)

## Constructors

### constructor

• **new NFTCollection**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`TokenERC721`\> |

#### Overrides

[Erc721](Erc721.md).[constructor](Erc721.md#constructor)

#### Defined in

[contracts/nft-collection.ts:78](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L78)

## Properties

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`TokenERC721`\>

#### Defined in

[contracts/nft-collection.ts:76](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L76)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`TokenERC721`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = TokenErc721ContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = TokenErc721ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = TokenErc721ContractOutput }\>

#### Defined in

[contracts/nft-collection.ts:69](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L69)

___

### primarySale

• **primarySale**: [`ContractPrimarySale`](ContractPrimarySale.md)<`TokenERC721`\>

#### Defined in

[contracts/nft-collection.ts:75](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L75)

___

### roles

• **roles**: [`ContractRoles`](ContractRoles.md)<`TokenERC721`, ``"transfer"`` \| ``"admin"`` \| ``"minter"``\>

#### Defined in

[contracts/nft-collection.ts:70](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L70)

___

### royalty

• **royalty**: [`ContractRoyalty`](ContractRoyalty.md)<`TokenERC721`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = TokenErc721ContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = TokenErc721ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = TokenErc721ContractOutput }\>

#### Defined in

[contracts/nft-collection.ts:74](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L74)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `TokenERC721__factory` = `TokenERC721__factory`

#### Defined in

[contracts/nft-collection.ts:63](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L63)

___

### contractRoles

▪ `Static` **contractRoles**: readonly [``"admin"``, ``"minter"``, ``"transfer"``]

#### Defined in

[contracts/nft-collection.ts:62](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L62)

___

### contractType

▪ `Static` **contractType**: ``"nft-collection"``

#### Defined in

[contracts/nft-collection.ts:61](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L61)

## Methods

### balance

▸ **balance**(): `Promise`<`BigNumber`\>

Get NFT Balance for the currently connected wallet

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Erc721](Erc721.md).[balance](Erc721.md#balance)

#### Defined in

[core/classes/erc-721.ts:182](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L182)

___

### balanceOf

▸ **balanceOf**(`address`): `Promise`<`BigNumber`\>

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

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Erc721](Erc721.md).[balanceOf](Erc721.md#balanceof)

#### Defined in

[core/classes/erc-721.ts:175](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L175)

___

### burn

▸ **burn**(`tokenId`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Burn a single NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | the token Id to burn |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc721](Erc721.md).[burn](Erc721.md#burn)

#### Defined in

[core/classes/erc-721.ts:251](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L251)

___

### generateSignature

▸ **generateSignature**(`mintRequest`): `Promise`<`SignedPayload`\>

Generate a signature that can be used to mint a dynamic NFT

**`remarks`** Takes in an NFT and some information about how it can be minted, uploads the metadata and signs it with your private key. The generated signature can then be used to mint an NFT using the exact payload and signature generated.

**`example`**
```javascript
const nftMetadata = {
  name: "Cool NFT #1",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
};

const now = Math.floor(Date.now() / 1000);
const payload = {
  metadta: nftMetadata, // The NFT to mint
  to: {{wallet_address}}, // Who will receive the NFT (or AddressZero for anyone)
  price: 0.5, // the price to pay for minting
  currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
  mintStartTimeEpochSeconds: now, // can mint anytime from now
  mintEndTimeEpochSeconds: now + 60 * 60 * 24 * 7, // to 24h from now
};

const { mintRequest, signature } = contract.generateSignature(payload);
// now anynone can use these to mint the NFT using `mintWithSignature()`
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mintRequest` | `Object` | the payload to sign |
| `mintRequest.currencyAddress` | `undefined` \| `string` | - |
| `mintRequest.metadata` | `Object` | - |
| `mintRequest.metadata.animation_url` | `any` | - |
| `mintRequest.metadata.background_color` | `undefined` \| `string` | - |
| `mintRequest.metadata.description` | `undefined` \| `string` | - |
| `mintRequest.metadata.external_url` | `any` | - |
| `mintRequest.metadata.image` | `any` | - |
| `mintRequest.metadata.name` | `string` | - |
| `mintRequest.metadata.properties` | `undefined` \| `Record`<`string`, `any`\> \| { value?: any; key: string; }[] | - |
| `mintRequest.mintEndTimeEpochSeconds` | `undefined` \| `Date` | - |
| `mintRequest.mintStartTimeEpochSeconds` | `undefined` \| `Date` | - |
| `mintRequest.price` | `string` \| `number` | - |
| `mintRequest.to` | `string` | - |
| `mintRequest.uid` | `undefined` \| `string` | - |

#### Returns

`Promise`<`SignedPayload`\>

the signed payload and the corresponding signature

#### Defined in

[contracts/nft-collection.ts:342](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L342)

___

### generateSignatureBatch

▸ **generateSignatureBatch**(`mintRequests`): `Promise`<`SignedPayload`[]\>

Genrate a batch of signatures that can be used to mint many dynamic NFTs.

**`remarks`** See [NFTCollection.generateSignature](NFTCollection.md#generatesignature)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintRequests` | { `currencyAddress`: `undefined` \| `string` ; `metadata`: { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { value?: any; key: string; }[]  } ; `mintEndTimeEpochSeconds`: `undefined` \| `Date` ; `mintStartTimeEpochSeconds`: `undefined` \| `Date` ; `price`: `string` \| `number` ; `to`: `string` ; `uid`: `undefined` \| `string`  }[] |

#### Returns

`Promise`<`SignedPayload`[]\>

an array of payloads and signatures

#### Defined in

[contracts/nft-collection.ts:356](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L356)

___

### get

▸ **get**(`tokenId`): `Promise`<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>

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

`Promise`<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>

The NFT metadata

#### Inherited from

[Erc721](Erc721.md).[get](Erc721.md#get)

#### Defined in

[core/classes/erc-721.ts:72](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L72)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Inherited from

[Erc721](Erc721.md).[getAddress](Erc721.md#getaddress)

#### Defined in

[core/classes/erc-721.ts:53](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L53)

___

### getAll

▸ **getAll**(`queryParams?`): `Promise`<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)[]\>

Get All NFTs

**`remarks`** Get all the data associated with every NFT in this contract.

**`example`**
```javascript
const nfts = await contract.getAll();
console.log(nfts);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryParams?` | `QueryAllParams` | optional filtering to only fetch a subset of results. |

#### Returns

`Promise`<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)[]\>

The NFT metadata for all NFTs queried.

#### Inherited from

[Erc721](Erc721.md).[getAll](Erc721.md#getall)

#### Defined in

[core/classes/erc-721.ts:93](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L93)

___

### getOwned

▸ **getOwned**(`_address?`): `Promise`<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)[]\>

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

`Promise`<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)[]\>

The NFT metadata for all NFTs in the contract.

#### Inherited from

[Erc721](Erc721.md).[getOwned](Erc721.md#getowned)

#### Defined in

[core/classes/erc-721.ts:126](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L126)

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

[Erc721](Erc721.md).[isApproved](Erc721.md#isapproved)

#### Defined in

[core/classes/erc-721.ts:202](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L202)

___

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Get whether users can transfer NFTs from this contract

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Erc721](Erc721.md).[isTransferRestricted](Erc721.md#istransferrestricted)

#### Defined in

[core/classes/erc-721.ts:189](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L189)

___

### mint

▸ **mint**(`metadata`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>\>

Mint an NFT to the connected wallet

**`remarks`** See [NFTCollection.mintTo](NFTCollection.md#mintto)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Object` |
| `metadata.animation_url` | `any` |
| `metadata.background_color` | `undefined` \| `string` |
| `metadata.description` | `undefined` \| `string` |
| `metadata.external_url` | `any` |
| `metadata.image` | `any` |
| `metadata.name` | `string` |
| `metadata.properties` | `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[] |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>\>

#### Defined in

[contracts/nft-collection.ts:115](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L115)

___

### mintBatch

▸ **mintBatch**(`metadatas`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>[]\>

Mint Many NFTs to the connected wallet

**`remarks`** See [NFTCollection.mintBatchTo](NFTCollection.md#mintbatchto)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadatas` | { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]  }[] |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>[]\>

#### Defined in

[contracts/nft-collection.ts:176](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L176)

___

### mintBatchTo

▸ **mintBatchTo**(`to`, `metadatas`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>[]\>

Mint Many unique NFTs

**`remarks`** Mint many unique NFTs at once to a specified wallet.

**`example`**
```javascript
// Address of the wallet you want to mint the NFT to
const toAddress = "{{wallet_address}}";

// Custom metadata of the NFTs you want to mint.
const metadatas = [{
  name: "Cool NFT #1",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}, {
  name: "Cool NFT #2",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/other/image.png"),
}];

const tx = await contract.mintBatchTo(toAddress, metadatas);
const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
const firstTokenId = tx[0].id; // token id of the first minted NFT
const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `metadatas` | { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]  }[] |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>[]\>

#### Defined in

[contracts/nft-collection.ts:212](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L212)

___

### mintTo

▸ **mintTo**(`to`, `metadata`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>\>

Mint a unique NFT

**`remarks`** Mint a unique NFT to a specified wallet.

**`example`**
```javascript
// Address of the wallet you want to mint the NFT to
const toAddress = "{{wallet_address}}";

// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
const metadata = {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
};

const tx = await contract.mintTo(toAddress, metadata);
const receipt = tx.receipt; // the transaction receipt
const tokenId = tx.id; // the id of the NFT minted
const nft = await tx.data(); // (optional) fetch details of minted NFT
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `metadata` | `Object` |
| `metadata.animation_url` | `any` |
| `metadata.background_color` | `undefined` \| `string` |
| `metadata.description` | `undefined` \| `string` |
| `metadata.external_url` | `any` |
| `metadata.image` | `any` |
| `metadata.name` | `string` |
| `metadata.properties` | `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[] |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>\>

#### Defined in

[contracts/nft-collection.ts:144](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L144)

___

### mintWithSignature

▸ **mintWithSignature**(`signedPayload`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>\>

Mint a dynamicly generated NFT

**`remarks`** Mint an dynamic NFT with a previously generated signature.

**`example`**
```javascript
// see how to craft a payload to sign in the `generateSignature()` documentation
const { mintRequest, signature } = contract.generateSignature(payload);

// now anyone can mint the NFT
const tx = contract.mintWithSignature(mintRequest, signature);
const receipt = tx.receipt; // the mint transaction receipt
const mintedId = tx.id; // the id of the NFT minted
const mintedNFT = await tx.data(); // (optional) fetch the details of the minted NFT
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signedPayload` | `SignedPayload` | the previously generated payload and signature with [NFTCollection.generateSignature](NFTCollection.md#generatesignature) |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>\>

#### Defined in

[contracts/nft-collection.ts:266](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L266)

___

### ownerOf

▸ **ownerOf**(`tokenId`): `Promise`<`string`\>

Get the current owner of a given NFT within this Contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | the tokenId of the NFT |

#### Returns

`Promise`<`string`\>

the address of the owner

#### Inherited from

[Erc721](Erc721.md).[ownerOf](Erc721.md#ownerof)

#### Defined in

[core/classes/erc-721.ts:148](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L148)

___

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

Get the total supply for this Contract.

#### Returns

`Promise`<`BigNumber`\>

the total supply

#### Inherited from

[Erc721](Erc721.md).[totalSupply](Erc721.md#totalsupply)

#### Defined in

[core/classes/erc-721.ts:157](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L157)

___

### transfer

▸ **transfer**(`to`, `tokenId`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

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

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc721](Erc721.md).[transfer](Erc721.md#transfer)

#### Defined in

[core/classes/erc-721.ts:229](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-721.ts#L229)

___

### verify

▸ **verify**(`signedPayload`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedPayload` | `SignedPayload` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[contracts/nft-collection.ts:302](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-collection.ts#L302)

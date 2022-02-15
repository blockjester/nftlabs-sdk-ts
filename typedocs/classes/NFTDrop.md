[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / NFTDrop

# Class: NFTDrop

Setup a collection of one-of-one NFTs that are minted as users claim them.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const nftDrop = sdk.getNFTDrop("{{contract_address}}");
```

## Hierarchy

- [`Erc721`](Erc721.md)<`DropERC721`\>

  ↳ **`NFTDrop`**

## Table of contents

### Constructors

- [constructor](NFTDrop.md#constructor)

### Properties

- [claimConditions](NFTDrop.md#claimconditions)
- [encoder](NFTDrop.md#encoder)
- [metadata](NFTDrop.md#metadata)
- [primarySale](NFTDrop.md#primarysale)
- [revealer](NFTDrop.md#revealer)
- [roles](NFTDrop.md#roles)
- [royalty](NFTDrop.md#royalty)
- [contractFactory](NFTDrop.md#contractfactory)
- [contractRoles](NFTDrop.md#contractroles)
- [contractType](NFTDrop.md#contracttype)

### Methods

- [balance](NFTDrop.md#balance)
- [balanceOf](NFTDrop.md#balanceof)
- [burn](NFTDrop.md#burn)
- [claim](NFTDrop.md#claim)
- [claimTo](NFTDrop.md#claimto)
- [createBatch](NFTDrop.md#createbatch)
- [get](NFTDrop.md#get)
- [getAddress](NFTDrop.md#getaddress)
- [getAll](NFTDrop.md#getall)
- [getAllClaimed](NFTDrop.md#getallclaimed)
- [getAllUnclaimed](NFTDrop.md#getallunclaimed)
- [getOwned](NFTDrop.md#getowned)
- [isApproved](NFTDrop.md#isapproved)
- [isTransferRestricted](NFTDrop.md#istransferrestricted)
- [ownerOf](NFTDrop.md#ownerof)
- [totalClaimedSupply](NFTDrop.md#totalclaimedsupply)
- [totalSupply](NFTDrop.md#totalsupply)
- [totalUnclaimedSupply](NFTDrop.md#totalunclaimedsupply)
- [transfer](NFTDrop.md#transfer)

## Constructors

### constructor

• **new NFTDrop**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`DropERC721`\> |

#### Overrides

[Erc721](Erc721.md).[constructor](Erc721.md#constructor)

#### Defined in

[contracts/nft-drop.ts:68](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L68)

## Properties

### claimConditions

• **claimConditions**: [`DropErc721ClaimConditions`](DropErc721ClaimConditions.md)

#### Defined in

[contracts/nft-drop.ts:64](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L64)

___

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`DropERC721`\>

#### Defined in

[contracts/nft-drop.ts:65](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L65)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`DropERC721`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = DropErc721ContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc721ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc721ContractOutput }\>

#### Defined in

[contracts/nft-drop.ts:60](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L60)

___

### primarySale

• **primarySale**: [`ContractPrimarySale`](ContractPrimarySale.md)<`DropERC721`\>

#### Defined in

[contracts/nft-drop.ts:63](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L63)

___

### revealer

• **revealer**: `DelayedReveal`<`DropERC721`\>

#### Defined in

[contracts/nft-drop.ts:66](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L66)

___

### roles

• **roles**: [`ContractRoles`](ContractRoles.md)<`DropERC721`, ``"transfer"`` \| ``"admin"`` \| ``"minter"``\>

#### Defined in

[contracts/nft-drop.ts:61](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L61)

___

### royalty

• **royalty**: [`ContractRoyalty`](ContractRoyalty.md)<`DropERC721`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = DropErc721ContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc721ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc721ContractOutput }\>

#### Defined in

[contracts/nft-drop.ts:62](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L62)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `DropERC721__factory` = `DropERC721__factory`

#### Defined in

[contracts/nft-drop.ts:54](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L54)

___

### contractRoles

▪ `Static` **contractRoles**: readonly [``"admin"``, ``"minter"``, ``"transfer"``]

#### Defined in

[contracts/nft-drop.ts:53](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L53)

___

### contractType

▪ `Static` **contractType**: ``"nft-drop"``

#### Defined in

[contracts/nft-drop.ts:52](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L52)

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

### claim

▸ **claim**(`quantity`, `proofs?`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>[]\>

Claim NFTs to the connected wallet.

**`remarks`** See [NFTDrop.claimTo](NFTDrop.md#claimto)

#### Parameters

| Name | Type |
| :------ | :------ |
| `quantity` | `BigNumberish` |
| `proofs` | `BytesLike`[] |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>[]\>

- an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata

#### Defined in

[contracts/nft-drop.ts:327](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L327)

___

### claimTo

▸ **claimTo**(`destinationAddress`, `quantity`, `proofs?`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>[]\>

Claim unique NFTs to a specific Wallet

**`remarks`** Let the specified wallet claim NFTs.

**`example`**
```javascript
const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
const quantity = 1; // how many unique NFTs you want to claim

const tx = await contract.claimTo(address, quantity);
const receipt = tx.receipt; // the transaction receipt
const claimedTokenId = tx.id; // the id of the NFT claimed
const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationAddress` | `string` | Address you want to send the token to |
| `quantity` | `BigNumberish` | Quantity of the tokens you want to claim |
| `proofs` | `BytesLike`[] | Array of proofs |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)\>[]\>

- an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata

#### Defined in

[contracts/nft-drop.ts:292](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L292)

___

### createBatch

▸ **createBatch**(`metadatas`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }\>[]\>

Create a batch of unique NFTs to be claimed in the future

**`remarks`** Create batch allows you to create a batch of many unique NFTs in one transaction.

**`example`**
```javascript
// Custom metadata of the NFTs to create
const metadatas = [{
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}, {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"),
}];

const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
const firstTokenId = results[0].id; // token id of the first created NFT
const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadatas` | { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]  }[] | The metadata to include in the batch. |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }\>[]\>

#### Defined in

[contracts/nft-drop.ts:236](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L236)

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

### getAllClaimed

▸ **getAllClaimed**(`queryParams?`): `Promise`<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)[]\>

Get All Claimed NFTs

**`remarks`** Fetch all the NFTs (and their owners) that have been claimed in this Drop.

* @example
```javascript
const claimedNFTs = await contract.getAllClaimed();
const firstOwner = claimedNFTs[0].owner;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryParams?` | `QueryAllParams` | optional filtering to only fetch a subset of results. |

#### Returns

`Promise`<[`NFTMetadataOwner`](../modules.md#nftmetadataowner)[]\>

The NFT metadata and their ownersfor all NFTs queried.

#### Defined in

[contracts/nft-drop.ts:119](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L119)

___

### getAllUnclaimed

▸ **getAllUnclaimed**(`queryParams?`): `Promise`<{ `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }[]\>

Get All Unclaimed NFTs

**`remarks`** Fetch all the NFTs that have been not been claimed yet in this Drop.

* @example
```javascript
const unclaimedNFTs = await contract.getAllUnclaimed();
const firstUnclaimedNFT = unclaimedNFTs[0].name;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryParams?` | `QueryAllParams` | optional filtering to only fetch a subset of results. |

#### Returns

`Promise`<{ `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }[]\>

The NFT metadata for all NFTs queried.

#### Defined in

[contracts/nft-drop.ts:149](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L149)

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

### totalClaimedSupply

▸ **totalClaimedSupply**(): `Promise`<`BigNumber`\>

Get the claimed supply

**`remarks`** Get the number of claimed NFTs in this Drop.

* @example
```javascript
const claimedNFTCount = await contract.totalClaimedSupply();
console.log(`NFTs claimed so far: ${claimedNFTCount}`);
```

#### Returns

`Promise`<`BigNumber`\>

the unclaimed supply

#### Defined in

[contracts/nft-drop.ts:185](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L185)

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

### totalUnclaimedSupply

▸ **totalUnclaimedSupply**(): `Promise`<`BigNumber`\>

Get the unclaimed supply

**`remarks`** Get the number of unclaimed NFTs in this Drop.

* @example
```javascript
const unclaimedNFTCount = await contract.totalUnclaimedSupply();
console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
```

#### Returns

`Promise`<`BigNumber`\>

the unclaimed supply

#### Defined in

[contracts/nft-drop.ts:201](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-drop.ts#L201)

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

[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / NFTStackDrop

# Class: NFTStackDrop

Setup a collection of NFTs with a customizable number of each NFT that are minted as users claim them.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const nftStackDrop = sdk.getNFTStackDrop("{{contract_address}}");
```

## Hierarchy

- [`Erc1155`](Erc1155.md)<`DropERC1155`\>

  ↳ **`NFTStackDrop`**

## Table of contents

### Constructors

- [constructor](NFTStackDrop.md#constructor)

### Properties

- [claimConditions](NFTStackDrop.md#claimconditions)
- [encoder](NFTStackDrop.md#encoder)
- [metadata](NFTStackDrop.md#metadata)
- [primarySale](NFTStackDrop.md#primarysale)
- [roles](NFTStackDrop.md#roles)
- [royalty](NFTStackDrop.md#royalty)
- [contractFactory](NFTStackDrop.md#contractfactory)
- [contractRoles](NFTStackDrop.md#contractroles)
- [contractType](NFTStackDrop.md#contracttype)

### Methods

- [balance](NFTStackDrop.md#balance)
- [balanceOf](NFTStackDrop.md#balanceof)
- [burn](NFTStackDrop.md#burn)
- [claim](NFTStackDrop.md#claim)
- [claimTo](NFTStackDrop.md#claimto)
- [createBatch](NFTStackDrop.md#createbatch)
- [get](NFTStackDrop.md#get)
- [getAddress](NFTStackDrop.md#getaddress)
- [getAll](NFTStackDrop.md#getall)
- [getOwned](NFTStackDrop.md#getowned)
- [isApproved](NFTStackDrop.md#isapproved)
- [isTransferRestricted](NFTStackDrop.md#istransferrestricted)
- [totalSupply](NFTStackDrop.md#totalsupply)
- [transfer](NFTStackDrop.md#transfer)

## Constructors

### constructor

• **new NFTStackDrop**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`DropERC1155`\> |

#### Overrides

[Erc1155](Erc1155.md).[constructor](Erc1155.md#constructor)

#### Defined in

[contracts/nft-stack-drop.ts:62](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L62)

## Properties

### claimConditions

• **claimConditions**: [`DropErc1155ClaimConditions`](DropErc1155ClaimConditions.md)

#### Defined in

[contracts/nft-stack-drop.ts:59](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L59)

___

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`DropERC1155`\>

#### Defined in

[contracts/nft-stack-drop.ts:60](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L60)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`DropERC1155`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = DropErc1155ContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc1155ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc1155ContractOutput }\>

#### Defined in

[contracts/nft-stack-drop.ts:52](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L52)

___

### primarySale

• **primarySale**: [`ContractPrimarySale`](ContractPrimarySale.md)<`DropERC1155`\>

#### Defined in

[contracts/nft-stack-drop.ts:58](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L58)

___

### roles

• **roles**: [`ContractRoles`](ContractRoles.md)<`DropERC1155`, ``"transfer"`` \| ``"admin"`` \| ``"minter"``\>

#### Defined in

[contracts/nft-stack-drop.ts:53](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L53)

___

### royalty

• **royalty**: [`ContractRoyalty`](ContractRoyalty.md)<`DropERC1155`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = DropErc1155ContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc1155ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc1155ContractOutput }\>

#### Defined in

[contracts/nft-stack-drop.ts:57](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L57)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `DropERC1155__factory` = `DropERC1155__factory`

#### Defined in

[contracts/nft-stack-drop.ts:46](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L46)

___

### contractRoles

▪ `Static` **contractRoles**: readonly [``"admin"``, ``"minter"``, ``"transfer"``]

#### Defined in

[contracts/nft-stack-drop.ts:45](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L45)

___

### contractType

▪ `Static` **contractType**: ``"nft-stack-drop"``

#### Defined in

[contracts/nft-stack-drop.ts:44](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L44)

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

### claim

▸ **claim**(`tokenId`, `quantity`, `proofs?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Claim a token to the connected wallet

**`remarks`** See [NFTStackDrop.claimTo](NFTStackDrop.md#claimto)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | Id of the token you want to claim |
| `quantity` | `BigNumberish` | Quantity of the tokens you want to claim |
| `proofs` | `BytesLike`[] | Array of proofs |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

- Receipt for the transaction

#### Defined in

[contracts/nft-stack-drop.ts:209](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L209)

___

### claimTo

▸ **claimTo**(`destinationAddress`, `tokenId`, `quantity`, `proofs?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Claim NFTs to a specific Wallet

**`remarks`** Let the specified wallet claim NFTs.

**`example`**
```javascript
const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
const tokenId = 0; // the id of the NFT you want to claim
const quantity = 1; // how many NFTs you want to claim

const tx = await contract.claimTo(address, quantity);
const receipt = tx.receipt; // the transaction receipt
const claimedTokenId = tx.id; // the id of the NFT claimed
const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationAddress` | `string` | Address you want to send the token to |
| `tokenId` | `BigNumberish` | Id of the token you want to claim |
| `quantity` | `BigNumberish` | Quantity of the tokens you want to claim |
| `proofs` | `BytesLike`[] | Array of proofs |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

- Receipt for the transaction

#### Defined in

[contracts/nft-stack-drop.ts:182](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L182)

___

### createBatch

▸ **createBatch**(`metadatas`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }\>[]\>

Create a batch of NFTs to be claimed in the future

**`remarks`** Create batch allows you to create a batch of many NFTs in one transaction.

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

| Name | Type |
| :------ | :------ |
| `metadatas` | { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]  }[] |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<{ `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }\>[]\>

#### Defined in

[contracts/nft-stack-drop.ts:127](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/nft-stack-drop.ts#L127)

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

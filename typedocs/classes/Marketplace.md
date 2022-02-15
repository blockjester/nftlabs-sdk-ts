[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / Marketplace

# Class: Marketplace

Create your own whitelabel marketplace that enables users to buy and sell any digital assets.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const marketplace = sdk.getMarketplace("{{contract_address}}");
```

## Implements

- `UpdateableNetwork`

## Table of contents

### Constructors

- [constructor](Marketplace.md#constructor)

### Properties

- [encoder](Marketplace.md#encoder)
- [metadata](Marketplace.md#metadata)
- [roles](Marketplace.md#roles)
- [contractFactory](Marketplace.md#contractfactory)
- [contractRoles](Marketplace.md#contractroles)
- [contractType](Marketplace.md#contracttype)

### Methods

- [acceptDirectListingOffer](Marketplace.md#acceptdirectlistingoffer)
- [buyoutAuctionListing](Marketplace.md#buyoutauctionlisting)
- [buyoutDirectListing](Marketplace.md#buyoutdirectlisting)
- [buyoutListing](Marketplace.md#buyoutlisting)
- [cancelAuctionListing](Marketplace.md#cancelauctionlisting)
- [cancelDirectListing](Marketplace.md#canceldirectlisting)
- [closeAuctionListing](Marketplace.md#closeauctionlisting)
- [createAuctionListing](Marketplace.md#createauctionlisting)
- [createDirectListing](Marketplace.md#createdirectlisting)
- [getActiveOffer](Marketplace.md#getactiveoffer)
- [getAddress](Marketplace.md#getaddress)
- [getAllListings](Marketplace.md#getalllistings)
- [getAuctionListing](Marketplace.md#getauctionlisting)
- [getAuctionWinner](Marketplace.md#getauctionwinner)
- [getBidBufferBps](Marketplace.md#getbidbufferbps)
- [getDirectListing](Marketplace.md#getdirectlisting)
- [getListing](Marketplace.md#getlisting)
- [getTimeBufferInSeconds](Marketplace.md#gettimebufferinseconds)
- [getWinningBid](Marketplace.md#getwinningbid)
- [isRestrictedListerRoleOnly](Marketplace.md#isrestrictedlisterroleonly)
- [makeAuctionListingBid](Marketplace.md#makeauctionlistingbid)
- [makeDirectListingOffer](Marketplace.md#makedirectlistingoffer)
- [onNetworkUpdated](Marketplace.md#onnetworkupdated)
- [setBidBufferBps](Marketplace.md#setbidbufferbps)
- [setRestrictedListerRoleOnly](Marketplace.md#setrestrictedlisterroleonly)
- [setTimeBufferInSeconds](Marketplace.md#settimebufferinseconds)
- [updateAuctionListing](Marketplace.md#updateauctionlisting)
- [updateDirectListing](Marketplace.md#updatedirectlisting)

## Constructors

### constructor

• **new Marketplace**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`Marketplace`\> |

#### Defined in

[contracts/marketplace.ts:98](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L98)

## Properties

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`Marketplace`\>

#### Defined in

[contracts/marketplace.ts:96](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L96)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`Marketplace`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `trusted_forwarder`: `undefined` \| `string`  }\> = MarketplaceContractDeploy; `input`: `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `number`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number`  }\> = MarketplaceContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number`  }\> = MarketplaceContractOutput }\>

#### Defined in

[contracts/marketplace.ts:88](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L88)

___

### roles

• **roles**: [`ContractRoles`](ContractRoles.md)<`Marketplace`, ``"admin"`` \| ``"lister"``\>

#### Defined in

[contracts/marketplace.ts:92](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L92)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `Marketplace__factory` = `Marketplace__factory`

#### Defined in

[contracts/marketplace.ts:79](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L79)

___

### contractRoles

▪ `Static` **contractRoles**: readonly [``"admin"``, ``"lister"``]

#### Defined in

[contracts/marketplace.ts:78](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L78)

___

### contractType

▪ `Static` **contractType**: ``"marketplace"``

#### Defined in

[contracts/marketplace.ts:77](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L77)

## Methods

### acceptDirectListingOffer

▸ **acceptDirectListingOffer**(`listingId`, `addressOfOfferor`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |
| `addressOfOfferor` | `string` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:578](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L578)

___

### buyoutAuctionListing

▸ **buyoutAuctionListing**(`listingId`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Buyout Auction

**`remarks`** Buy a specific direct listing from the marketplace.

**`example`**
```javascript
// The listing ID of the asset you want to buy
const listingId = 0;

await contract.buyoutAuctionListing(listingId);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:655](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L655)

___

### buyoutDirectListing

▸ **buyoutDirectListing**(`listingId`, `quantityDesired`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Buy Listing

**`remarks`** Buy a specific direct listing from the marketplace.

**`example`**
```javascript
// The listing ID of the asset you want to buy
const listingId = 0;
// Quantity of the asset you want to buy
const quantityDesired = 1;

await contract.buyoutDirectListing(listingId, quantityDesired);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |
| `quantityDesired` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:610](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L610)

___

### buyoutListing

▸ **buyoutListing**(`listingId`, `quantityDesired?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Convenience function to buy a Direct or Auction listing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listingId` | `BigNumberish` | the listing ID of the listing you want to buy |
| `quantityDesired?` | `BigNumberish` | the quantity that you want to buy (for ERC1155 tokens) |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:678](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L678)

___

### cancelAuctionListing

▸ **cancelAuctionListing**(`listingId`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Cancel Auction Listing

**`remarks`** Cancel an auction listing on the marketplace

**`example`**
```javascript
// The listing ID of the auction listing you want to cancel
const listingId = "0";

await contract.cancelAuctionListing(listingId);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:858](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L858)

___

### cancelDirectListing

▸ **cancelDirectListing**(`listingId`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Cancel Direct Listing

**`remarks`** Cancel a direct listing on the marketplace

**`example`**
```javascript
// The listing ID of the direct listing you want to cancel
const listingId = "0";

await contract.cancelDirectListing(listingId);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:834](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L834)

___

### closeAuctionListing

▸ **closeAuctionListing**(`listingId`, `closeFor?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Close the Auction

**`remarks`** Closes the Auction and executes the sale.

**`example`**
```javascript
// The listing ID of the auction listing you want to close
const listingId = "0";
await closeAuctionListing(listindId);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listingId` | `BigNumberish` | the auction  listing ud to close |
| `closeFor?` | `string` | optionally pass the address the auction creator address or winning bid offeror address to close the auction on their behalf |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:898](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L898)

___

### createAuctionListing

▸ **createAuctionListing**(`listing`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<`never`\>\>

Create Auction

**`remarks`** Create a new auction where people can bid on an asset.

**`example`**
```javascript
// Data of the auction you want to create
const auction = {
  // address of the contract the asset you want to list is on
  assetContractAddress: "0x...",
  // token ID of the asset you want to list
  tokenId: "0",
  // in how many seconds with the listing open up
  startTimeInSeconds: 0,
  // how long the listing will be open for
  listingDurationInSeconds: 86400,
  // how many of the asset you want to list
  quantity: 1,
  // address of the currency contract that will be used to pay for the listing
  currencyContractAddress: "0x0000000000000000000000000000000000000000",
  // how much people would have to bid to instantly buy the asset
  buyoutPricePerToken: "10",
  // the minimum bid that will be accepted for the token
  reservePricePerToken: "1.5",
}

const tx = await contract.createAuctionListing(auction);
const receipt = tx.receipt; // the transaction receipt
const id = tx.id; // the id of the newly created listing
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listing` | `NewAuctionListing` |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<`never`\>\>

#### Defined in

[contracts/marketplace.ts:480](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L480)

___

### createDirectListing

▸ **createDirectListing**(`listing`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<`never`\>\>

Create Direct Listing

**`remarks`** Create a new listing on the marketplace where people can buy an asset directly.

**`example`**
```javascript
// Data of the listing you want to create
const listing = {
  // address of the contract the asset you want to list is on
  assetContractAddress: "0x...",
  // token ID of the asset you want to list
  tokenId: "0",
  // in how many seconds with the listing open up
  startTimeInSeconds: 0,
  // how long the listing will be open for
  listingDurationInSeconds: 86400,
  // how many of the asset you want to list
  quantity: 1,
  // address of the currency contract that will be used to pay for the listing
  currencyContractAddress: "0x0000000000000000000000000000000000000000",
  // how much the asset will be sold for
  buyoutPricePerToken: "1.5",
}

const tx = await contract.createDirectListing(listing);
const receipt = tx.receipt; // the transaction receipt
const id = tx.id; // the id of the newly created listing
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listing` | `NewDirectListing` |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<`never`\>\>

#### Defined in

[contracts/marketplace.ts:404](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L404)

___

### getActiveOffer

▸ **getActiveOffer**(`listingId`, `address`): `Promise`<`undefined` \| `Offer`\>

Get the active offer on a listing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listingId` | `BigNumberish` | the listing id |
| `address` | `string` | the address that made the offer |

#### Returns

`Promise`<`undefined` \| `Offer`\>

#### Defined in

[contracts/marketplace.ts:194](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L194)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Implementation of

UpdateableNetwork.getAddress

#### Defined in

[contracts/marketplace.ts:128](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L128)

___

### getAllListings

▸ **getAllListings**(`filter?`): `Promise`<(`DirectListing` \| `AuctionListing`)[]\>

Get all the listings

**`remarks`** Fetch all the active listings from this marketplace contract.

```javascript
const listings = await contract.getAllListings();
const priceOfFirstListing = listings[0].price;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter?` | `MarketplaceFilter` | optional filters |

#### Returns

`Promise`<(`DirectListing` \| `AuctionListing`)[]\>

#### Defined in

[contracts/marketplace.ts:320](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L320)

___

### getAuctionListing

▸ **getAuctionListing**(`listingId`): `Promise`<`AuctionListing`\>

Get an Auction listing by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listingId` | `BigNumberish` | the listing Id |

#### Returns

`Promise`<`AuctionListing`\>

the Auction listing object

#### Defined in

[contracts/marketplace.ts:169](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L169)

___

### getAuctionWinner

▸ **getAuctionWinner**(`listingId`): `Promise`<`string`\>

Get Auction Winner

**`remarks`** Get the winner of the auction after an auction ends.

**`example`**
```javascript
// The listing ID of the auction that closed
const listingId = 0;

contract
  .getAuctionWinner(listingId)
  .then((auctionWinner) => console.log(auctionWinner))
  .catch((err) => console.error(err));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

#### Defined in

[contracts/marketplace.ts:263](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L263)

___

### getBidBufferBps

▸ **getBidBufferBps**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[contracts/marketplace.ts:239](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L239)

___

### getDirectListing

▸ **getDirectListing**(`listingId`): `Promise`<`DirectListing`\>

Get a direct listing by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listingId` | `BigNumberish` | the listind Id |

#### Returns

`Promise`<`DirectListing`\>

the Direct listing object

#### Defined in

[contracts/marketplace.ts:142](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L142)

___

### getListing

▸ **getListing**(`listingId`): `Promise`<`DirectListing` \| `AuctionListing`\>

Convenience function to get either a direct or auction listing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listingId` | `BigNumberish` | the listing id |

#### Returns

`Promise`<`DirectListing` \| `AuctionListing`\>

either a direct or auction listing

#### Defined in

[contracts/marketplace.ts:288](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L288)

___

### getTimeBufferInSeconds

▸ **getTimeBufferInSeconds**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[contracts/marketplace.ts:243](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L243)

___

### getWinningBid

▸ **getWinningBid**(`listingId`): `Promise`<`undefined` \| `Offer`\>

Get Highest Bid

**`remarks`** Get the current highest bid of an active auction.

**`example`**
```javascript
// The listing ID of the auction that closed
const listingId = 0;

contract
  .getWinningBid(listingId)
  .then((offer) => console.log(offer))
  .catch((err) => console.error(err));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |

#### Returns

`Promise`<`undefined` \| `Offer`\>

#### Defined in

[contracts/marketplace.ts:226](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L226)

___

### isRestrictedListerRoleOnly

▸ **isRestrictedListerRoleOnly**(): `Promise`<`boolean`\>

Get whether listing is restricted only to addresses with the Lister role

#### Returns

`Promise`<`boolean`\>

#### Defined in

[contracts/marketplace.ts:366](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L366)

___

### makeAuctionListingBid

▸ **makeAuctionListingBid**(`listingId`, `pricePerToken`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Bid On Auction

**`remarks`** Make a bid on an auction listings

**`example`**
```javascript
// The listing ID of the asset you want to bid on
const listingId = 0;
// The price you are willing to bid for a single token of the listing
const pricePerToken = 1;

await contract.makeAuctionListingBid(listingId, pricePerToken);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |
| `pricePerToken` | `string` \| `number` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:717](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L717)

___

### makeDirectListingOffer

▸ **makeDirectListingOffer**(`listingId`, `quantityDesired`, `currencyContractAddress`, `pricePerToken`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Make an offer for a Direct Listing

#### Parameters

| Name | Type |
| :------ | :------ |
| `listingId` | `BigNumberish` |
| `quantityDesired` | `BigNumberish` |
| `currencyContractAddress` | `string` |
| `pricePerToken` | `string` \| `number` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:534](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L534)

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

[contracts/marketplace.ts:124](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L124)

___

### setBidBufferBps

▸ **setBidBufferBps**(`bufferBps`): `Promise`<`void`\>

Set the Bid buffer: this is a percentage (e.g. 5%) in basis points (5% = 500, 100% = 10000). A new bid is considered to be a winning bid only if its bid amount is at least the bid buffer (e.g. 5%) greater than the previous winning bid. This prevents buyers from making very slightly higher bids to win the auctioned items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferBps` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[contracts/marketplace.ts:931](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L931)

___

### setRestrictedListerRoleOnly

▸ **setRestrictedListerRoleOnly**(`isRestricted`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Get whether listing is restricted only to addresses with the Lister role

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRestricted` | `boolean` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:967](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L967)

___

### setTimeBufferInSeconds

▸ **setTimeBufferInSeconds**(`bufferInSeconds`): `Promise`<`void`\>

Set the Time buffer: this is measured in seconds (e.g. 15 minutes or 900 seconds). If a winning bid is made within the buffer of the auction closing (e.g. 15 minutes within the auction closing), the auction's closing time is increased by the buffer to prevent buyers from making last minute winning bids, and to give time to other buyers to make a higher bid if they wish to.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferInSeconds` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

[contracts/marketplace.ts:948](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L948)

___

### updateAuctionListing

▸ **updateAuctionListing**(`listing`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Update an Auction listing with new metadata

#### Parameters

| Name | Type |
| :------ | :------ |
| `listing` | `AuctionListing` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:805](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L805)

___

### updateDirectListing

▸ **updateDirectListing**(`listing`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Update a Direct listing with new metadata.

Note: cannot update a listing with a new quantity of 0. Use `cancelDirectListing` to remove a listing instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listing` | `DirectListing` | the new listing information |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/marketplace.ts:785](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/marketplace.ts#L785)

[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / DropErc1155ClaimConditions

# Class: DropErc1155ClaimConditions

Manages claim conditions for Bundle Drop contracts

## Table of contents

### Constructors

- [constructor](DropErc1155ClaimConditions.md#constructor)

### Methods

- [canClaim](DropErc1155ClaimConditions.md#canclaim)
- [getActive](DropErc1155ClaimConditions.md#getactive)
- [getAll](DropErc1155ClaimConditions.md#getall)
- [getClaimIneligibilityReasons](DropErc1155ClaimConditions.md#getclaimineligibilityreasons)
- [set](DropErc1155ClaimConditions.md#set)
- [update](DropErc1155ClaimConditions.md#update)

## Constructors

### constructor

• **new DropErc1155ClaimConditions**(`contractWrapper`, `metadata`, `storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractWrapper` | `ContractWrapper`<`DropERC1155`\> |
| `metadata` | [`ContractMetadata`](ContractMetadata.md)<`DropERC1155`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = DropErc721ContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc721ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc721ContractOutput }\> |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |

#### Defined in

[core/classes/drop-erc1155-claim-conditions.ts:44](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc1155-claim-conditions.ts#L44)

## Methods

### canClaim

▸ **canClaim**(`tokenId`, `quantity`, `addressToCheck?`): `Promise`<`boolean`\>

Can Claim

**`remarks`** Check if a particular NFT can currently be claimed by a given user.

**`example`**
```javascript
// Quantity of tokens to check claimability of
const quantity = 1;
const canClaim = await contract.canClaim(quantity);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `quantity` | `BigNumberish` |
| `addressToCheck?` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/classes/drop-erc1155-claim-conditions.ts:110](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc1155-claim-conditions.ts#L110)

___

### getActive

▸ **getActive**(`tokenId`): `Promise`<{ `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }\>

Get the currently active claim condition

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<{ `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }\>

the claim condition metadata

#### Defined in

[core/classes/drop-erc1155-claim-conditions.ts:63](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc1155-claim-conditions.ts#L63)

___

### getAll

▸ **getAll**(`tokenId`): `Promise`<{ `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }[]\>

Get all the claim conditions

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<{ `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }[]\>

the claim conditions metadata

#### Defined in

[core/classes/drop-erc1155-claim-conditions.ts:80](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc1155-claim-conditions.ts#L80)

___

### getClaimIneligibilityReasons

▸ **getClaimIneligibilityReasons**(`tokenId`, `quantity`, `addressToCheck?`): `Promise`<`ClaimEligibility`[]\>

For any claim conditions that a particular wallet is violating,
this function returns human readable information about the
breaks in the condition that can be used to inform the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | - |
| `quantity` | `BigNumberish` | The desired quantity that would be claimed. |
| `addressToCheck?` | `string` | The wallet address, defaults to the connected wallet. |

#### Returns

`Promise`<`ClaimEligibility`[]\>

#### Defined in

[core/classes/drop-erc1155-claim-conditions.ts:138](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc1155-claim-conditions.ts#L138)

___

### set

▸ **set**(`tokenId`, `claimConditionInputs`, `resetClaimEligibilityForAll?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Set public mint conditions on a NFT

**`remarks`** Sets the public mint conditions that need to be fulfilled by users to claim a particular NFT in this bundle.

**`example`**
```javascript
const presaleStartTime = new Date();
const publicSaleStartTime = new Date(Date.now() + 24_HOURS);
const claimConditions = [
  {
    startTime: presaleStartTime, // start the presale now
    maxQuantity: 2, // limit how many mints for this presale
    price: 0.01, // presale price
    snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
  },
  {
    startTime: publicSaleStartTime, // 24h after presale, start public sale
    price: 0.08, // public sale price
  }
]);

const tokenId = 0; // the id of the NFT to set claim conditions on
await dropContract.claimConditions.set(tokenId, claimConditions);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | `undefined` | The id of the NFT to set the claim conditions on |
| `claimConditionInputs` | { `currencyAddress`: `undefined` \| `string` ; `maxQuantity`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` ; `merkleRootHash`: `undefined` \| `string` \| `number`[] ; `price`: `undefined` \| `string` \| `number` ; `quantityLimitPerTransaction`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` ; `snapshot`: `undefined` \| `string`[] ; `startTime`: `undefined` \| `Date` ; `waitInSeconds`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber`  }[] | `undefined` | The claim conditions |
| `resetClaimEligibilityForAll` | `boolean` | `false` | Whether to reset the state of who already claimed NFTs previously |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[core/classes/drop-erc1155-claim-conditions.ts:273](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc1155-claim-conditions.ts#L273)

___

### update

▸ **update**(`tokenId`, `index`, `claimConditionInput`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Update a single claim condition with new data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `BigNumberish` | - |
| `index` | `number` | the index of the claim condition to update, as given by the index from the result of `getAll()` |
| `claimConditionInput` | `Object` | the new data to update, previous data will be retained |
| `claimConditionInput.currencyAddress` | `undefined` \| `string` | - |
| `claimConditionInput.maxQuantity` | `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` | - |
| `claimConditionInput.merkleRootHash` | `undefined` \| `string` \| `number`[] | - |
| `claimConditionInput.price` | `undefined` \| `string` \| `number` | - |
| `claimConditionInput.quantityLimitPerTransaction` | `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` | - |
| `claimConditionInput.snapshot` | `undefined` \| `string`[] | - |
| `claimConditionInput.startTime` | `undefined` \| `Date` | - |
| `claimConditionInput.waitInSeconds` | `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` | - |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[core/classes/drop-erc1155-claim-conditions.ts:360](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc1155-claim-conditions.ts#L360)

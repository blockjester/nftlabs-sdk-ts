[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / DropErc721ClaimConditions

# Class: DropErc721ClaimConditions

Manages claim conditions for NFT Drop contracts

## Table of contents

### Constructors

- [constructor](DropErc721ClaimConditions.md#constructor)

### Methods

- [canClaim](DropErc721ClaimConditions.md#canclaim)
- [getActive](DropErc721ClaimConditions.md#getactive)
- [getAll](DropErc721ClaimConditions.md#getall)
- [getClaimIneligibilityReasons](DropErc721ClaimConditions.md#getclaimineligibilityreasons)
- [set](DropErc721ClaimConditions.md#set)
- [update](DropErc721ClaimConditions.md#update)

## Constructors

### constructor

• **new DropErc721ClaimConditions**(`contractWrapper`, `metadata`, `storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractWrapper` | `ContractWrapper`<`DropERC721`\> |
| `metadata` | [`ContractMetadata`](ContractMetadata.md)<`DropERC721`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, { `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string` ; `primary_sale_recipient`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = DropErc721ContractDeploy; `input`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `any` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `any` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc721ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }\>, { `merkle`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodString`\>\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `merkle`: `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `number` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `merkle`: `undefined` \| `Record`<`string`, `string`\> ; `name`: `string` ; `seller_fee_basis_points`: `undefined` \| `number` ; `symbol`: `undefined` \| `string`  }\> = DropErc721ContractOutput }\> |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |

#### Defined in

[core/classes/drop-erc721-claim-conditions.ts:44](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc721-claim-conditions.ts#L44)

## Methods

### canClaim

▸ **canClaim**(`quantity`, `addressToCheck?`): `Promise`<`boolean`\>

Can Claim

**`remarks`** Check if the drop can currently be claimed.

**`example`**
```javascript
// Quantity of tokens to check claimability of
const quantity = 1;
const canClaim = await contract.canClaim(quantity);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `quantity` | `BigNumberish` |
| `addressToCheck?` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/classes/drop-erc721-claim-conditions.ts:104](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc721-claim-conditions.ts#L104)

___

### getActive

▸ **getActive**(): `Promise`<{ `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }\>

Get the currently active claim condition

#### Returns

`Promise`<{ `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }\>

the claim condition metadata

#### Defined in

[core/classes/drop-erc721-claim-conditions.ts:63](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc721-claim-conditions.ts#L63)

___

### getAll

▸ **getAll**(): `Promise`<{ `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }[]\>

Get all the claim conditions

#### Returns

`Promise`<{ `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }[]\>

the claim conditions metadata

#### Defined in

[core/classes/drop-erc721-claim-conditions.ts:77](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc721-claim-conditions.ts#L77)

___

### getClaimIneligibilityReasons

▸ **getClaimIneligibilityReasons**(`quantity`, `addressToCheck?`): `Promise`<`ClaimEligibility`[]\>

For any claim conditions that a particular wallet is violating,
this function returns human readable information about the
breaks in the condition that can be used to inform the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quantity` | `BigNumberish` | The desired quantity that would be claimed. |
| `addressToCheck?` | `string` | The wallet address, defaults to the connected wallet. |

#### Returns

`Promise`<`ClaimEligibility`[]\>

#### Defined in

[core/classes/drop-erc721-claim-conditions.ts:126](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc721-claim-conditions.ts#L126)

___

### set

▸ **set**(`claimConditionInputs`, `resetClaimEligibilityForAll?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Set public mint conditions

**`remarks`** Sets the public mint conditions that need to be fullfiled by users to claim NFTs.

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

await dropContract.claimConditions.set(claimConditions);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `claimConditionInputs` | { `currencyAddress`: `undefined` \| `string` ; `maxQuantity`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` ; `merkleRootHash`: `undefined` \| `string` \| `number`[] ; `price`: `undefined` \| `string` \| `number` ; `quantityLimitPerTransaction`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` ; `snapshot`: `undefined` \| `string`[] ; `startTime`: `undefined` \| `Date` ; `waitInSeconds`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber`  }[] | `undefined` | The claim conditions |
| `resetClaimEligibilityForAll` | `boolean` | `false` | Whether to reset the state of who already claimed NFTs previously |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[core/classes/drop-erc721-claim-conditions.ts:260](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc721-claim-conditions.ts#L260)

___

### update

▸ **update**(`index`, `claimConditionInput`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Update a single claim condition with new data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
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

[core/classes/drop-erc721-claim-conditions.ts:344](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/drop-erc721-claim-conditions.ts#L344)

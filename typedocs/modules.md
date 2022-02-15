[@3rdweb/sdk - v2.0.0-32](README.md) / Exports

# @3rdweb/sdk - v2.0.0-32

## Table of contents

### Enumerations

- [ChainId](enums/ChainId.md)

### Classes

- [ContractEncoder](classes/ContractEncoder.md)
- [ContractMetadata](classes/ContractMetadata.md)
- [ContractPrimarySale](classes/ContractPrimarySale.md)
- [ContractRoles](classes/ContractRoles.md)
- [ContractRoyalty](classes/ContractRoyalty.md)
- [DropErc1155ClaimConditions](classes/DropErc1155ClaimConditions.md)
- [DropErc721ClaimConditions](classes/DropErc721ClaimConditions.md)
- [Erc1155](classes/Erc1155.md)
- [Erc20](classes/Erc20.md)
- [Erc721](classes/Erc721.md)
- [Marketplace](classes/Marketplace.md)
- [NFTCollection](classes/NFTCollection.md)
- [NFTDrop](classes/NFTDrop.md)
- [NFTStackCollection](classes/NFTStackCollection.md)
- [NFTStackDrop](classes/NFTStackDrop.md)
- [Pack](classes/Pack.md)
- [Split](classes/Split.md)
- [ThirdwebSDK](classes/ThirdwebSDK.md)
- [Token](classes/Token.md)
- [Vote](classes/Vote.md)

### Interfaces

- [GaslessTransaction](interfaces/GaslessTransaction.md)
- [IStorage](interfaces/IStorage.md)

### Type aliases

- [BufferOrStringWithName](modules.md#bufferorstringwithname)
- [BundleMetadata](modules.md#bundlemetadata)
- [BundleMetadataInput](modules.md#bundlemetadatainput)
- [ClaimCondition](modules.md#claimcondition)
- [ClaimConditionInput](modules.md#claimconditioninput)
- [ContractForContractType](modules.md#contractforcontracttype)
- [ContractType](modules.md#contracttype)
- [FileOrBuffer](modules.md#fileorbuffer)
- [ForwardRequestMessage](modules.md#forwardrequestmessage)
- [Json](modules.md#json)
- [JsonObject](modules.md#jsonobject)
- [NFTMetadata](modules.md#nftmetadata)
- [NFTMetadataInput](modules.md#nftmetadatainput)
- [NFTMetadataOwner](modules.md#nftmetadataowner)
- [NetworkOrSignerOrProvider](modules.md#networkorsignerorprovider)
- [PermitRequestMessage](modules.md#permitrequestmessage)
- [REMOTE\_CONTRACTS\_MAP](modules.md#remote_contracts_map)
- [Role](modules.md#role)
- [SUPPORTED\_CHAIN\_ID](modules.md#supported_chain_id)
- [SignerOrProvider](modules.md#signerorprovider)
- [TokenMintInput](modules.md#tokenmintinput)
- [TransactionResult](modules.md#transactionresult)
- [TransactionResultWithId](modules.md#transactionresultwithid)
- [ValidContractClass](modules.md#validcontractclass)
- [ValidContractInstance](modules.md#validcontractinstance)
- [ValueOf](modules.md#valueof)

### Variables

- [BundleMetadataInputSchema](modules.md#bundlemetadatainputschema)
- [BundleMetadataOutputSchema](modules.md#bundlemetadataoutputschema)
- [ClaimConditionInputSchema](modules.md#claimconditioninputschema)
- [ClaimConditionOutputSchema](modules.md#claimconditionoutputschema)
- [CommonContractOutputSchema](modules.md#commoncontractoutputschema)
- [CommonContractSchema](modules.md#commoncontractschema)
- [CommonPlatformFeeSchema](modules.md#commonplatformfeeschema)
- [CommonPrimarySaleSchema](modules.md#commonprimarysaleschema)
- [CommonRoyaltySchema](modules.md#commonroyaltyschema)
- [CommonSymbolSchema](modules.md#commonsymbolschema)
- [CommonTrustedForwarderSchema](modules.md#commontrustedforwarderschema)
- [OptionalPropertiesInput](modules.md#optionalpropertiesinput)
- [OptionalPropertiesOutput](modules.md#optionalpropertiesoutput)
- [PartialClaimConditionInputSchema](modules.md#partialclaimconditioninputschema)
- [SUPPORTED\_CHAIN\_IDS](modules.md#supported_chain_ids)
- [TokenMintInputSchema](modules.md#tokenmintinputschema)

### Functions

- [createSnapshot](modules.md#createsnapshot)

## Type aliases

### BufferOrStringWithName

Ƭ **BufferOrStringWithName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` \| `string` |
| `name?` | `string` |

#### Defined in

[core/types.ts:27](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L27)

___

### BundleMetadata

Ƭ **BundleMetadata**: `z.output`<typeof [`BundleMetadataOutputSchema`](modules.md#bundlemetadataoutputschema)\>

#### Defined in

[schema/tokens/bundle.ts:15](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/bundle.ts#L15)

___

### BundleMetadataInput

Ƭ **BundleMetadataInput**: `z.input`<typeof [`BundleMetadataInputSchema`](modules.md#bundlemetadatainputschema)\>

#### Defined in

[schema/tokens/bundle.ts:16](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/bundle.ts#L16)

___

### ClaimCondition

Ƭ **ClaimCondition**: `z.output`<typeof [`ClaimConditionOutputSchema`](modules.md#claimconditionoutputschema)\>

Represents a claim condition fetched from the SDK

#### Defined in

[types/claim-conditions/PublicClaimCondition.ts:16](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/types/claim-conditions/PublicClaimCondition.ts#L16)

___

### ClaimConditionInput

Ƭ **ClaimConditionInput**: `z.input`<typeof [`PartialClaimConditionInputSchema`](modules.md#partialclaimconditioninputschema)\>

Input model to create a claim condition with optional snapshot of wallets

#### Defined in

[types/claim-conditions/PublicClaimCondition.ts:31](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/types/claim-conditions/PublicClaimCondition.ts#L31)

___

### ContractForContractType

Ƭ **ContractForContractType**<`TContractType`\>: `C.Instance`<typeof `CONTRACTS_MAP`[`TContractType`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContractType` | extends [`ContractType`](modules.md#contracttype) |

#### Defined in

[core/types.ts:19](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L19)

___

### ContractType

Ƭ **ContractType**: keyof typeof `CONTRACTS_MAP`

#### Defined in

[core/types.ts:13](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L13)

___

### FileOrBuffer

Ƭ **FileOrBuffer**: `File` \| `Buffer` \| [`BufferOrStringWithName`](modules.md#bufferorstringwithname)

#### Defined in

[core/types.ts:37](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L37)

___

### ForwardRequestMessage

Ƭ **ForwardRequestMessage**: `Object`

Forward Request Message that's used for gasless transaction

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike` |
| `from` | `string` |
| `gas` | `string` |
| `nonce` | `string` |
| `to` | `string` |
| `value` | `string` |

#### Defined in

[core/types.ts:58](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L58)

___

### Json

Ƭ **Json**: `JsonLiteralOrFileOrBuffer` \| [`JsonObject`](modules.md#jsonobject) \| [`Json`](modules.md#json)[]

#### Defined in

[core/types.ts:34](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L34)

___

### JsonObject

Ƭ **JsonObject**: `Object`

#### Index signature

▪ [key: `string`]: [`Json`](modules.md#json)

#### Defined in

[core/types.ts:35](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L35)

___

### NFTMetadata

Ƭ **NFTMetadata**: `z.output`<typeof `CommonNFTOutput`\>

#### Defined in

[schema/tokens/common/index.ts:41](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/common/index.ts#L41)

___

### NFTMetadataInput

Ƭ **NFTMetadataInput**: `z.input`<typeof `CommonNFTInput`\>

#### Defined in

[schema/tokens/common/index.ts:40](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/common/index.ts#L40)

___

### NFTMetadataOwner

Ƭ **NFTMetadataOwner**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `metadata` | [`NFTMetadata`](modules.md#nftmetadata) |
| `owner` | `string` |

#### Defined in

[schema/tokens/common/index.ts:42](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/common/index.ts#L42)

___

### NetworkOrSignerOrProvider

Ƭ **NetworkOrSignerOrProvider**: `Networkish` \| `Signer` \| `Provider`

#### Defined in

[core/types.ts:22](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L22)

___

### PermitRequestMessage

Ƭ **PermitRequestMessage**: `Object`

EIP-2612 token permit message for gasless transaction

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deadline` | `number` \| `string` |
| `nonce` | `number` \| `string` |
| `owner` | `string` |
| `r` | `string` |
| `s` | `string` |
| `spender` | `string` |
| `to` | `string` |
| `v` | `number` |
| `value` | `number` \| `string` |

#### Defined in

[core/types.ts:71](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L71)

___

### REMOTE\_CONTRACTS\_MAP

Ƭ **REMOTE\_CONTRACTS\_MAP**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `marketplace` | `MarketplaceContract` |
| `nft-collection` | `TokenERC721` |
| `nft-drop` | `DropERC721` |
| `nft-stack-collection` | `TokenERC1155` |
| `nft-stack-drop` | `DropERC1155` |
| `pack` | `PackContract` |
| `split` | `SplitContract` |
| `token` | `TokenERC20` |
| `vote` | `VoteERC20` |

#### Defined in

[contracts/maps.ts:37](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/maps.ts#L37)

___

### Role

Ƭ **Role**: keyof typeof `roleMap`

#### Defined in

[common/role.ts:16](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/common/role.ts#L16)

___

### SUPPORTED\_CHAIN\_ID

Ƭ **SUPPORTED\_CHAIN\_ID**: [`Mainnet`](enums/ChainId.md#mainnet) \| [`Rinkeby`](enums/ChainId.md#rinkeby) \| [`Goerli`](enums/ChainId.md#goerli) \| [`Mumbai`](enums/ChainId.md#mumbai) \| [`Polygon`](enums/ChainId.md#polygon) \| [`Fantom`](enums/ChainId.md#fantom) \| [`FantomTestnet`](enums/ChainId.md#fantomtestnet) \| [`Avalanche`](enums/ChainId.md#avalanche) \| [`AvalancheFujiTestnet`](enums/ChainId.md#avalanchefujitestnet)

#### Defined in

[constants/chains.ts:21](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/constants/chains.ts#L21)

___

### SignerOrProvider

Ƭ **SignerOrProvider**: `Signer` \| `Provider`

#### Defined in

[core/types.ts:25](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L25)

___

### TokenMintInput

Ƭ **TokenMintInput**: `z.input`<typeof [`TokenMintInputSchema`](modules.md#tokenmintinputschema)\>

#### Defined in

[schema/tokens/token.ts:9](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/token.ts#L9)

___

### TransactionResult

Ƭ **TransactionResult**<`T`\>: `If`<`A.Is`<`T`, `never`, ``"equals"``\>, `Omit`<`TransactionResultWithMetadata`, ``"data"``\>, `TransactionResultWithMetadata`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Defined in

[core/types.ts:48](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L48)

___

### TransactionResultWithId

Ƭ **TransactionResultWithId**<`T`\>: [`TransactionResult`](modules.md#transactionresult)<`T`\> & { `id`: `BigNumber`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Defined in

[core/types.ts:44](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L44)

___

### ValidContractClass

Ƭ **ValidContractClass**: [`ValueOf`](modules.md#valueof)<typeof `CONTRACTS_MAP`\>

#### Defined in

[core/types.ts:15](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L15)

___

### ValidContractInstance

Ƭ **ValidContractInstance**: `C.Instance`<[`ValidContractClass`](modules.md#validcontractclass)\>

#### Defined in

[core/types.ts:17](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L17)

___

### ValueOf

Ƭ **ValueOf**<`T`\>: `T`[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[core/types.ts:23](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/types.ts#L23)

## Variables

### BundleMetadataInputSchema

• **BundleMetadataInputSchema**: `ZodObject`<{ `metadata`: `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_url`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `animation_url`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `background_color`: `ZodOptional`<`ZodUnion`<[`ZodEffects`<`ZodString`, `string`, `string`\>, `ZodString`]\>\> ; `properties`: `ZodEffects`<`ZodEffects`<`ZodOptional`<`ZodUnion`<[`ZodEffects`<`ZodArray`<`ZodObject`<{ `key`: `ZodString` ; `value`: `ZodUnion`<[`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBoolean`, `ZodNull`]\>, `ZodUnion`<[`ZodTypeAny`, `ZodString`]\>]\> = ValidPropertyValue }, ``"strip"``, `ZodTypeAny`, { `key`: `string` ; `value`: `any`  }, { `key`: `string` ; `value`: `any`  }\>, ``"many"``\>, { `key`: `string` ; `value`: `any`  }[], { `key`: `string` ; `value`: `any`  }[]\>, `ZodRecord`<`ZodString`, `ZodUnion`<[`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBoolean`, `ZodNull`]\>, `ZodUnion`<[`ZodTypeAny`, `ZodString`]\>]\>\>]\>\>, `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[], `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]\>, `undefined` \| `Record`<`string`, `any`\>, `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]\> = OptionalPropertiesInput }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](modules.md#json), `ZodTypeDef`, [`Json`](modules.md#json)\>\>, { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\>  }, { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]  }\> = CommonNFTInput; `supply`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema }, ``"strip"``, `ZodTypeAny`, { `metadata`: { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\>  } ; `supply`: `string`  }, { `metadata`: { `animation_url`: `any` ; `background_color`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `any` ; `image`: `any` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, `any`\> \| { value?: any; key: string; }[]  } ; `supply`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>

#### Defined in

[schema/tokens/bundle.ts:10](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/bundle.ts#L10)

___

### BundleMetadataOutputSchema

• **BundleMetadataOutputSchema**: `ZodObject`<{ `metadata`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_url`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `external_url`: `ZodOptional`<`ZodString`\> ; `id`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema; `image`: `ZodOptional`<`ZodString`\> ; `uri`: `ZodString`  }\>, { `animation_url`: `ZodOptional`<`ZodString`\> ; `properties`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBoolean`, `ZodNull`]\>\>\> = OptionalPropertiesOutput }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](modules.md#json), `ZodTypeDef`, [`Json`](modules.md#json)\>\>, { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }, { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `string` \| `number` \| `bigint` \| `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  }\> = CommonNFTOutput; `supply`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema }, ``"strip"``, `ZodTypeAny`, { `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `BigNumber`  }, { `metadata`: { `animation_url`: `undefined` \| `string` ; `description`: `undefined` \| `string` ; `external_url`: `undefined` \| `string` ; `id`: `string` \| `number` \| `bigint` \| `BigNumber` ; `image`: `undefined` \| `string` ; `name`: `string` ; `properties`: `undefined` \| `Record`<`string`, ``null`` \| `string` \| `number` \| `boolean`\> ; `uri`: `string`  } ; `supply`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>

#### Defined in

[schema/tokens/bundle.ts:5](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/bundle.ts#L5)

___

### ClaimConditionInputSchema

• **ClaimConditionInputSchema**: `ZodObject`<{ `currencyAddress`: `ZodDefault`<`ZodString`\> ; `maxQuantity`: `ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\> ; `merkleRootHash`: `ZodDefault`<`ZodUnion`<[`ZodArray`<`ZodNumber`, ``"many"``\>, `ZodString`]\>\> ; `price`: `ZodDefault`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`]\>, `string`, `string` \| `number`\>\> ; `quantityLimitPerTransaction`: `ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\> ; `snapshot`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `startTime`: `ZodEffects`<`ZodDefault`<`ZodDate`\>, `BigNumber`, `undefined` \| `Date`\> = DateSchema; `waitInSeconds`: `ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\>  }, ``"strip"``, `ZodTypeAny`, { `currencyAddress`: `string` ; `maxQuantity`: `string` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `string` ; `quantityLimitPerTransaction`: `string` ; `snapshot`: `undefined` \| `string`[] ; `startTime`: `BigNumber` ; `waitInSeconds`: `string`  }, { `currencyAddress`: `undefined` \| `string` ; `maxQuantity`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` ; `merkleRootHash`: `undefined` \| `string` \| `number`[] ; `price`: `undefined` \| `string` \| `number` ; `quantityLimitPerTransaction`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` ; `snapshot`: `undefined` \| `string`[] ; `startTime`: `undefined` \| `Date` ; `waitInSeconds`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber`  }\>

#### Defined in

[schema/contracts/common/claim-conditions.ts:14](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/claim-conditions.ts#L14)

___

### ClaimConditionOutputSchema

• **ClaimConditionOutputSchema**: `ZodObject`<`extendShape`<{ `currencyAddress`: `ZodDefault`<`ZodString`\> ; `maxQuantity`: `ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\> ; `merkleRootHash`: `ZodDefault`<`ZodUnion`<[`ZodArray`<`ZodNumber`, ``"many"``\>, `ZodString`]\>\> ; `price`: `ZodDefault`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`]\>, `string`, `string` \| `number`\>\> ; `quantityLimitPerTransaction`: `ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\> ; `startTime`: `ZodEffects`<`ZodDefault`<`ZodDate`\>, `BigNumber`, `undefined` \| `Date`\> ; `waitInSeconds`: `ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\>  }, { `availableSupply`: `ZodDefault`<`ZodString`\> ; `currencyMetadata`: `ZodDefault`<`ZodObject`<`extendShape`<{ `decimals`: `ZodNumber` ; `name`: `ZodString` ; `symbol`: `ZodString`  }, { `displayValue`: `ZodString` ; `value`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema }\>, ``"strip"``, `ZodTypeAny`, { `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }, { `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>\> ; `maxQuantity`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema; `price`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema; `quantityLimitPerTransaction`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema; `startTime`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `Date`, `string` \| `number` \| `bigint` \| `BigNumber`\> ; `waitInSeconds`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema }\>, ``"strip"``, `ZodTypeAny`, { `availableSupply`: `string` ; `currencyAddress`: `string` ; `currencyMetadata`: { symbol: string; name: string; value: BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `BigNumber` ; `merkleRootHash`: `string` \| `number`[] ; `price`: `BigNumber` ; `quantityLimitPerTransaction`: `BigNumber` ; `startTime`: `Date` ; `waitInSeconds`: `BigNumber`  }, { `availableSupply`: `undefined` \| `string` ; `currencyAddress`: `undefined` \| `string` ; `currencyMetadata`: `undefined` \| { symbol: string; name: string; value: string \| number \| bigint \| BigNumber; decimals: number; displayValue: string; } ; `maxQuantity`: `string` \| `number` \| `bigint` \| `BigNumber` ; `merkleRootHash`: `undefined` \| `string` \| `number`[] ; `price`: `string` \| `number` \| `bigint` \| `BigNumber` ; `quantityLimitPerTransaction`: `string` \| `number` \| `bigint` \| `BigNumber` ; `startTime`: `string` \| `number` \| `bigint` \| `BigNumber` ; `waitInSeconds`: `string` \| `number` \| `bigint` \| `BigNumber`  }\>

#### Defined in

[schema/contracts/common/claim-conditions.ts:30](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/claim-conditions.ts#L30)

___

### CommonContractOutputSchema

• **CommonContractOutputSchema**: `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](modules.md#json), `ZodTypeDef`, [`Json`](modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string`  }\>

#### Defined in

[schema/contracts/common/index.ts:18](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/index.ts#L18)

___

### CommonContractSchema

• **CommonContractSchema**: `ZodObject`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string`  }\>

#### Defined in

[schema/contracts/common/index.ts:11](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/index.ts#L11)

___

### CommonPlatformFeeSchema

• **CommonPlatformFeeSchema**: `ZodObject`<{ `platform_fee_basis_points`: `ZodDefault`<`ZodNumber`\> ; `platform_fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }, ``"strip"``, `ZodTypeAny`, { `platform_fee_basis_points`: `number` ; `platform_fee_recipient`: `string`  }, { `platform_fee_basis_points`: `undefined` \| `number` ; `platform_fee_recipient`: `undefined` \| `string`  }\>

#### Defined in

[schema/contracts/common/index.ts:50](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/index.ts#L50)

___

### CommonPrimarySaleSchema

• **CommonPrimarySaleSchema**: `ZodObject`<{ `primary_sale_recipient`: `ZodEffects`<`ZodString`, `string`, `string`\> = AdressSchema }, ``"strip"``, `ZodTypeAny`, { `primary_sale_recipient`: `string`  }, { `primary_sale_recipient`: `string`  }\>

#### Defined in

[schema/contracts/common/index.ts:43](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/index.ts#L43)

___

### CommonRoyaltySchema

• **CommonRoyaltySchema**: `ZodObject`<{ `fee_recipient`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\> ; `seller_fee_basis_points`: `ZodDefault`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `fee_recipient`: `string` ; `seller_fee_basis_points`: `number`  }, { `fee_recipient`: `undefined` \| `string` ; `seller_fee_basis_points`: `undefined` \| `number`  }\>

#### Defined in

[schema/contracts/common/index.ts:22](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/index.ts#L22)

___

### CommonSymbolSchema

• **CommonSymbolSchema**: `ZodObject`<{ `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }, ``"strip"``, `ZodTypeAny`, { `symbol`: `string`  }, { `symbol`: `undefined` \| `string`  }\>

#### Defined in

[schema/contracts/common/index.ts:65](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/index.ts#L65)

___

### CommonTrustedForwarderSchema

• **CommonTrustedForwarderSchema**: `ZodObject`<{ `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }, ``"strip"``, `ZodTypeAny`, { `trusted_forwarder`: `string`  }, { `trusted_forwarder`: `undefined` \| `string`  }\>

#### Defined in

[schema/contracts/common/index.ts:61](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/index.ts#L61)

___

### OptionalPropertiesInput

• **OptionalPropertiesInput**: `ZodEffects`<`ZodEffects`<`ZodOptional`<`ZodUnion`<[`ZodEffects`<`ZodArray`<`ZodObject`<{ `key`: `ZodString` ; `value`: `ZodUnion`<[`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBoolean`, `ZodNull`]\>, `ZodUnion`<[`ZodTypeAny`, `ZodString`]\>]\> = ValidPropertyValue }, ``"strip"``, `ZodTypeAny`, { `key`: `string` ; `value`: `any`  }, { `key`: `string` ; `value`: `any`  }\>, ``"many"``\>, { `key`: `string` ; `value`: `any`  }[], { `key`: `string` ; `value`: `any`  }[]\>, `ZodRecord`<`ZodString`, `ZodUnion`<[`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBoolean`, `ZodNull`]\>, `ZodUnion`<[`ZodTypeAny`, `ZodString`]\>]\>\>]\>\>, `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[], `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]\>, `undefined` \| `Record`<`string`, `any`\>, `undefined` \| `Record`<`string`, `any`\> \| { `key`: `string` ; `value`: `any`  }[]\>

#### Defined in

[schema/tokens/common/properties.ts:40](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/common/properties.ts#L40)

___

### OptionalPropertiesOutput

• **OptionalPropertiesOutput**: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBoolean`, `ZodNull`]\>\>\>

#### Defined in

[schema/tokens/common/properties.ts:59](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/common/properties.ts#L59)

___

### PartialClaimConditionInputSchema

• **PartialClaimConditionInputSchema**: `ZodObject`<{ `currencyAddress`: `ZodOptional`<`ZodDefault`<`ZodString`\>\> ; `maxQuantity`: `ZodOptional`<`ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\>\> ; `merkleRootHash`: `ZodOptional`<`ZodDefault`<`ZodUnion`<[`ZodArray`<`ZodNumber`, ``"many"``\>, `ZodString`]\>\>\> ; `price`: `ZodOptional`<`ZodDefault`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`]\>, `string`, `string` \| `number`\>\>\> ; `quantityLimitPerTransaction`: `ZodOptional`<`ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\>\> ; `snapshot`: `ZodOptional`<`ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\>\> ; `startTime`: `ZodOptional`<`ZodEffects`<`ZodDefault`<`ZodDate`\>, `BigNumber`, `undefined` \| `Date`\>\> = DateSchema; `waitInSeconds`: `ZodOptional`<`ZodDefault`<`ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\>\>\>  }, ``"strip"``, `ZodTypeAny`, { `currencyAddress`: `undefined` \| `string` ; `maxQuantity`: `undefined` \| `string` ; `merkleRootHash`: `undefined` \| `string` \| `number`[] ; `price`: `undefined` \| `string` ; `quantityLimitPerTransaction`: `undefined` \| `string` ; `snapshot`: `undefined` \| `string`[] ; `startTime`: `undefined` \| `BigNumber` ; `waitInSeconds`: `undefined` \| `string`  }, { `currencyAddress`: `undefined` \| `string` ; `maxQuantity`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` ; `merkleRootHash`: `undefined` \| `string` \| `number`[] ; `price`: `undefined` \| `string` \| `number` ; `quantityLimitPerTransaction`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber` ; `snapshot`: `undefined` \| `string`[] ; `startTime`: `undefined` \| `Date` ; `waitInSeconds`: `undefined` \| `string` \| `number` \| `bigint` \| `BigNumber`  }\>

#### Defined in

[schema/contracts/common/claim-conditions.ts:27](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/contracts/common/claim-conditions.ts#L27)

___

### SUPPORTED\_CHAIN\_IDS

• **SUPPORTED\_CHAIN\_IDS**: [`SUPPORTED_CHAIN_ID`](modules.md#supported_chain_id)[]

#### Defined in

[constants/chains.ts:32](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/constants/chains.ts#L32)

___

### TokenMintInputSchema

• **TokenMintInputSchema**: `ZodObject`<{ `amount`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema; `toAddress`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `toAddress`: `string`  }, { `amount`: `string` \| `number` \| `bigint` \| `BigNumber` ; `toAddress`: `string`  }\>

#### Defined in

[schema/tokens/token.ts:4](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/schema/tokens/token.ts#L4)

## Functions

### createSnapshot

▸ **createSnapshot**(`leafs`, `storage`): `Promise`<`SnapshotInfo`\>

Create a snapshot (merkle tree) from a list of addresses and uploads it to IPFS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `leafs` | `string`[] | the list of addresses to hash |
| `storage` | [`IStorage`](interfaces/IStorage.md) | - |

#### Returns

`Promise`<`SnapshotInfo`\>

the generated snapshot and URI

#### Defined in

[common/snapshots.ts:13](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/common/snapshots.ts#L13)

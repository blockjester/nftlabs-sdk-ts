[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / ThirdwebSDK

# Class: ThirdwebSDK

The main entry point for the thirdweb SDK

## Hierarchy

- `RPCConnectionHandler`

  ↳ **`ThirdwebSDK`**

## Table of contents

### Constructors

- [constructor](ThirdwebSDK.md#constructor)

### Methods

- [deployContract](ThirdwebSDK.md#deploycontract)
- [getContractList](ThirdwebSDK.md#getcontractlist)
- [getMarketplace](ThirdwebSDK.md#getmarketplace)
- [getNFTCollection](ThirdwebSDK.md#getnftcollection)
- [getNFTDrop](ThirdwebSDK.md#getnftdrop)
- [getNFTStackCollection](ThirdwebSDK.md#getnftstackcollection)
- [getNFTStackDrop](ThirdwebSDK.md#getnftstackdrop)
- [getPack](ThirdwebSDK.md#getpack)
- [getProvider](ThirdwebSDK.md#getprovider)
- [getSigner](ThirdwebSDK.md#getsigner)
- [getSignerOrProvider](ThirdwebSDK.md#getsignerorprovider)
- [getSplit](ThirdwebSDK.md#getsplit)
- [getToken](ThirdwebSDK.md#gettoken)
- [getVote](ThirdwebSDK.md#getvote)
- [isReadOnly](ThirdwebSDK.md#isreadonly)
- [updateSignerOrProvider](ThirdwebSDK.md#updatesignerorprovider)

## Constructors

### constructor

• **new ThirdwebSDK**(`network`, `options`, `storage?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |

#### Overrides

RPCConnectionHandler.constructor

#### Defined in

[core/sdk.ts:53](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L53)

## Methods

### deployContract

▸ **deployContract**<`TContract`\>(`contractType`, `contractMetadata`): `Promise`<`string`\>

Deploys a new contract

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends [`ValidContractClass`](../modules.md#validcontractclass) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractType` | `TContract`[``"contractType"``] | the type of contract to deploy |
| `contractMetadata` | `input`<`TContract`[``"schema"``][``"deploy"``]\> | the metadata to deploy the contract with |

#### Returns

`Promise`<`string`\>

a promise of the address of the newly deployed contract

#### Defined in

[core/sdk.ts:102](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L102)

___

### getContractList

▸ **getContractList**(`walletAddress`): `Promise`<{ `address`: `string` ; `contractType`: ``"split"`` \| ``"nft-drop"`` \| ``"nft-collection"`` \| ``"nft-stack-drop"`` \| ``"nft-stack-collection"`` \| ``"token"`` \| ``"vote"`` \| ``"marketplace"`` \| ``"pack"`` ; `metadata`: () => `Promise`<{ `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number`  }\> \| `Promise`<{ `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `recipients`: { shares: BigNumber; address: string; }[]  }\> \| `Promise`<{ `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `proposal_start_time_in_seconds`: `number` ; `proposal_token_threshold`: `BigNumber` ; `proposal_voting_time_in_seconds`: `number` ; `voting_delay_in_blocks`: `number` ; `voting_period_in_blocks`: `number` ; `voting_quorum_fraction`: `number` ; `voting_token_address`: `string`  }\> \| `Promise`<{ `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `symbol`: `string`  }\>  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`<{ `address`: `string` ; `contractType`: ``"split"`` \| ``"nft-drop"`` \| ``"nft-collection"`` \| ``"nft-stack-drop"`` \| ``"nft-stack-collection"`` \| ``"token"`` \| ``"vote"`` \| ``"marketplace"`` \| ``"pack"`` ; `metadata`: () => `Promise`<{ `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `fee_recipient`: `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `seller_fee_basis_points`: `number`  }\> \| `Promise`<{ `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `recipients`: { shares: BigNumber; address: string; }[]  }\> \| `Promise`<{ `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `proposal_start_time_in_seconds`: `number` ; `proposal_token_threshold`: `BigNumber` ; `proposal_voting_time_in_seconds`: `number` ; `voting_delay_in_blocks`: `number` ; `voting_period_in_blocks`: `number` ; `voting_quorum_fraction`: `number` ; `voting_token_address`: `string`  }\> \| `Promise`<{ `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `symbol`: `string`  }\>  }[]\>

#### Defined in

[core/sdk.ts:131](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L131)

___

### getMarketplace

▸ **getMarketplace**(`address`): [`Marketplace`](Marketplace.md)

Get an instance of a Marketplace contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address of the deployed contract |

#### Returns

[`Marketplace`](Marketplace.md)

the contract

#### Defined in

[core/sdk.ts:261](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L261)

___

### getNFTCollection

▸ **getNFTCollection**(`address`): [`NFTCollection`](NFTCollection.md)

Get an instance of a NFT Collection contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address of the deployed contract |

#### Returns

[`NFTCollection`](NFTCollection.md)

the contract

#### Defined in

[core/sdk.ts:201](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L201)

___

### getNFTDrop

▸ **getNFTDrop**(`contractAddress`): [`NFTDrop`](NFTDrop.md)

Get an instance of a Drop contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractAddress` | `string` | the address of the deployed contract |

#### Returns

[`NFTDrop`](NFTDrop.md)

the contract

#### Defined in

[core/sdk.ts:192](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L192)

___

### getNFTStackCollection

▸ **getNFTStackCollection**(`address`): [`NFTStackCollection`](NFTStackCollection.md)

Get an instance of a Bundle contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address of the deployed contract |

#### Returns

[`NFTStackCollection`](NFTStackCollection.md)

the contract

#### Defined in

[core/sdk.ts:222](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L222)

___

### getNFTStackDrop

▸ **getNFTStackDrop**(`address`): [`NFTStackDrop`](NFTStackDrop.md)

Get an instance of a Bundle Drop contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address of the deployed contract |

#### Returns

[`NFTStackDrop`](NFTStackDrop.md)

the contract

#### Defined in

[core/sdk.ts:213](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L213)

___

### getPack

▸ **getPack**(`address`): [`Pack`](Pack.md)

Get an instance of a Pack contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address of the deployed contract |

#### Returns

[`Pack`](Pack.md)

the contract

#### Defined in

[core/sdk.ts:270](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L270)

___

### getProvider

▸ **getProvider**(): `Provider`

Explicitly get the active signer.

#### Returns

`Provider`

the active provider

#### Inherited from

RPCConnectionHandler.getProvider

#### Defined in

[core/classes/rpc-connection-handler.ts:69](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/rpc-connection-handler.ts#L69)

___

### getSigner

▸ **getSigner**(): `undefined` \| `Signer`

Explicitly get the active signer.

#### Returns

`undefined` \| `Signer`

the active signer, if there is one

#### Inherited from

RPCConnectionHandler.getSigner

#### Defined in

[core/classes/rpc-connection-handler.ts:61](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/rpc-connection-handler.ts#L61)

___

### getSignerOrProvider

▸ **getSignerOrProvider**(): `Signer` \| `Provider`

#### Returns

`Signer` \| `Provider`

the current signer if there is one, otherwise the active provider

#### Inherited from

RPCConnectionHandler.getSignerOrProvider

#### Defined in

[core/classes/rpc-connection-handler.ts:77](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/rpc-connection-handler.ts#L77)

___

### getSplit

▸ **getSplit**(`address`): [`Split`](Split.md)

Get an instance of a Splits contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address of the deployed contract |

#### Returns

[`Split`](Split.md)

the contract

#### Defined in

[core/sdk.ts:252](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L252)

___

### getToken

▸ **getToken**(`address`): [`Token`](Token.md)

Get an instance of a Token contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address of the deployed contract |

#### Returns

[`Token`](Token.md)

the contract

#### Defined in

[core/sdk.ts:234](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L234)

___

### getVote

▸ **getVote**(`address`): [`Vote`](Vote.md)

Get an instance of a Vote contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address of the deployed contract |

#### Returns

[`Vote`](Vote.md)

the contract

#### Defined in

[core/sdk.ts:243](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L243)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

#### Returns

`boolean`

whether or not a signer is set, `true` if there is no signer so the class is in "read only" mode

#### Inherited from

RPCConnectionHandler.isReadOnly

#### Defined in

[core/classes/rpc-connection-handler.ts:53](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/rpc-connection-handler.ts#L53)

___

### updateSignerOrProvider

▸ **updateSignerOrProvider**(`network`): `void`

Update the active signer or provider for all contracts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) | the new signer or provider |

#### Returns

`void`

#### Overrides

RPCConnectionHandler.updateSignerOrProvider

#### Defined in

[core/sdk.ts:278](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/sdk.ts#L278)

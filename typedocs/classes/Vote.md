[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / Vote

# Class: Vote

Create a decentralized organization for token holders to vote on proposals.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const vote = sdk.getVote("{{contract_address}}");
```

## Implements

- `UpdateableNetwork`

## Table of contents

### Constructors

- [constructor](Vote.md#constructor)

### Properties

- [encoder](Vote.md#encoder)
- [metadata](Vote.md#metadata)
- [contractFactory](Vote.md#contractfactory)
- [contractType](Vote.md#contracttype)

### Methods

- [balance](Vote.md#balance)
- [balanceOfToken](Vote.md#balanceoftoken)
- [canExecute](Vote.md#canexecute)
- [execute](Vote.md#execute)
- [get](Vote.md#get)
- [getAddress](Vote.md#getaddress)
- [getAll](Vote.md#getall)
- [getProposalVotes](Vote.md#getproposalvotes)
- [hasVoted](Vote.md#hasvoted)
- [onNetworkUpdated](Vote.md#onnetworkupdated)
- [propose](Vote.md#propose)
- [settings](Vote.md#settings)
- [vote](Vote.md#vote)

## Constructors

### constructor

• **new Vote**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`VoteERC20`\> |

#### Defined in

[contracts/vote.ts:60](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L60)

## Properties

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`VoteERC20`\>

#### Defined in

[contracts/vote.ts:58](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L58)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`VoteERC20`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `proposal_start_time_in_seconds`: `ZodDefault`<`ZodNumber`\> ; `proposal_token_threshold`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema; `proposal_voting_time_in_seconds`: `ZodDefault`<`ZodNumber`\> ; `voting_delay_in_blocks`: `ZodDefault`<`ZodNumber`\> ; `voting_period_in_blocks`: `ZodDefault`<`ZodNumber`\> ; `voting_quorum_fraction`: `ZodDefault`<`ZodNumber`\> ; `voting_token_address`: `ZodDefault`<`ZodString`\>  }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `proposal_start_time_in_seconds`: `number` ; `proposal_token_threshold`: `string` ; `proposal_voting_time_in_seconds`: `number` ; `trusted_forwarder`: `string` ; `voting_delay_in_blocks`: `number` ; `voting_period_in_blocks`: `number` ; `voting_quorum_fraction`: `number` ; `voting_token_address`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `proposal_start_time_in_seconds`: `undefined` \| `number` ; `proposal_token_threshold`: `string` \| `number` \| `bigint` \| `BigNumber` ; `proposal_voting_time_in_seconds`: `undefined` \| `number` ; `trusted_forwarder`: `undefined` \| `string` ; `voting_delay_in_blocks`: `undefined` \| `number` ; `voting_period_in_blocks`: `undefined` \| `number` ; `voting_quorum_fraction`: `undefined` \| `number` ; `voting_token_address`: `undefined` \| `string`  }\> = VoteContractDeploy; `input`: `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `proposal_start_time_in_seconds`: `ZodDefault`<`ZodNumber`\> ; `proposal_token_threshold`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema; `proposal_voting_time_in_seconds`: `ZodDefault`<`ZodNumber`\> ; `voting_delay_in_blocks`: `ZodDefault`<`ZodNumber`\> ; `voting_period_in_blocks`: `ZodDefault`<`ZodNumber`\> ; `voting_quorum_fraction`: `ZodDefault`<`ZodNumber`\> ; `voting_token_address`: `ZodDefault`<`ZodString`\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `proposal_start_time_in_seconds`: `number` ; `proposal_token_threshold`: `string` ; `proposal_voting_time_in_seconds`: `number` ; `voting_delay_in_blocks`: `number` ; `voting_period_in_blocks`: `number` ; `voting_quorum_fraction`: `number` ; `voting_token_address`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `proposal_start_time_in_seconds`: `undefined` \| `number` ; `proposal_token_threshold`: `string` \| `number` \| `bigint` \| `BigNumber` ; `proposal_voting_time_in_seconds`: `undefined` \| `number` ; `voting_delay_in_blocks`: `undefined` \| `number` ; `voting_period_in_blocks`: `undefined` \| `number` ; `voting_quorum_fraction`: `undefined` \| `number` ; `voting_token_address`: `undefined` \| `string`  }\> = VoteContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, `extendShape`<{ `proposal_start_time_in_seconds`: `ZodDefault`<`ZodNumber`\> ; `proposal_token_threshold`: `ZodEffects`<`ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\>, `string`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberishSchema; `proposal_voting_time_in_seconds`: `ZodDefault`<`ZodNumber`\> ; `voting_delay_in_blocks`: `ZodDefault`<`ZodNumber`\> ; `voting_period_in_blocks`: `ZodDefault`<`ZodNumber`\> ; `voting_quorum_fraction`: `ZodDefault`<`ZodNumber`\> ; `voting_token_address`: `ZodDefault`<`ZodString`\>  }, { `proposal_token_threshold`: `ZodEffects`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodBigInt`, `ZodType`<`BigNumber`, `ZodTypeDef`, `BigNumber`\>]\>, `BigNumber`, `string` \| `number` \| `bigint` \| `BigNumber`\> = BigNumberSchema }\>\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `proposal_start_time_in_seconds`: `number` ; `proposal_token_threshold`: `BigNumber` ; `proposal_voting_time_in_seconds`: `number` ; `voting_delay_in_blocks`: `number` ; `voting_period_in_blocks`: `number` ; `voting_quorum_fraction`: `number` ; `voting_token_address`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `proposal_start_time_in_seconds`: `undefined` \| `number` ; `proposal_token_threshold`: `string` \| `number` \| `bigint` \| `BigNumber` ; `proposal_voting_time_in_seconds`: `undefined` \| `number` ; `voting_delay_in_blocks`: `undefined` \| `number` ; `voting_period_in_blocks`: `undefined` \| `number` ; `voting_quorum_fraction`: `undefined` \| `number` ; `voting_token_address`: `undefined` \| `string`  }\> = VoteContractOutput }\>

#### Defined in

[contracts/vote.ts:57](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L57)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `VoteERC20__factory` = `VoteERC20__factory`

#### Defined in

[contracts/vote.ts:48](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L48)

___

### contractType

▪ `Static` **contractType**: ``"vote"``

#### Defined in

[contracts/vote.ts:47](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L47)

## Methods

### balance

▸ **balance**(): `Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

Check the balance of the project wallet in the native token of the chain

#### Returns

`Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

- The balance of the project in the native token of the chain

#### Defined in

[contracts/vote.ts:242](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L242)

___

### balanceOfToken

▸ **balanceOfToken**(`tokenAddress`): `Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

Check the balance of the project wallet in a particular
ERC20 token contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

- The balance of the project in the native token of the chain

#### Defined in

[contracts/vote.ts:261](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L261)

___

### canExecute

▸ **canExecute**(`proposalId`): `Promise`<`boolean`\>

Can Execute

**`remarks`** Check if a proposal can be executed (if the proposal has succeeded).

**`example`**
```javascript
// The proposal ID of the proposal you want to check
const proposalId = "0";
const canExecute = await contract.canExecute(proposalId);
console.log(canExecute);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | The proposal ID to check. |

#### Returns

`Promise`<`boolean`\>

- True if the proposal can be executed, false otherwise.

#### Defined in

[contracts/vote.ts:219](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L219)

___

### execute

▸ **execute**(`proposalId`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Execute Proposal

**`remarks`** Execute the related transactions for a proposal if the proposal succeeded.

**`example`**
```javascript
// The proposal ID ofthe proposal you want to execute
const proposalId = "0"
await contract.execute(proposalId);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | The proposal id to execute. |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/vote.ts:436](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L436)

___

### get

▸ **get**(`proposalId`): `Promise`<`Proposal`\>

Get a proposal by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `BigNumberish` | The proposal id to get. |

#### Returns

`Promise`<`Proposal`\>

- The proposal.

#### Defined in

[contracts/vote.ts:100](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L100)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Implementation of

UpdateableNetwork.getAddress

#### Defined in

[contracts/vote.ts:86](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L86)

___

### getAll

▸ **getAll**(): `Promise`<`Proposal`[]\>

Get All Proposals

**`remarks`** Get all the proposals in this contract.

**`example`**
```javascript
const proposals = await contract.getAll();
console.log(proposals);
```

#### Returns

`Promise`<`Proposal`[]\>

- All the proposals in the contract.

#### Defined in

[contracts/vote.ts:124](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L124)

___

### getProposalVotes

▸ **getProposalVotes**(`proposalId`): `Promise`<`ProposalVote`[]\>

Get the votes for a specific proposal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `BigNumber` | the proposalId |

#### Returns

`Promise`<`ProposalVote`[]\>

#### Defined in

[contracts/vote.ts:149](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L149)

___

### hasVoted

▸ **hasVoted**(`proposalId`, `account?`): `Promise`<`boolean`\>

Check If Wallet Voted

**`remarks`** Check if a specified wallet has voted a specific proposal

**`example`**
```javascript
// The proposal ID of the proposal you want to check
const proposalId = "0";
// The address of the wallet you want to check to see if they voted
const address = "{{wallet_address}}";

await contract.hasVoted(proposalId, address);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | The unique identifier of a proposal . |
| `account?` | `string` | (optional) wallet account address. Defaults to connected signer. |

#### Returns

`Promise`<`boolean`\>

- True if the account has already voted on the proposal.

#### Defined in

[contracts/vote.ts:193](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L193)

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

[contracts/vote.ts:82](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L82)

___

### propose

▸ **propose**(`description`, `executions?`): `Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<`never`\>\>

Create Proposal

**`remarks`** Create a new proposal for token holders to vote on.

**`example`**
```javascript
// The description of the proposal you want to pass
const description = "This is a great proposal - vote for it!"
// You can (optionally) pass in contract calls that will get executed when the proposal is executed.
const executions = [
  {
    // The contract you want to make a call to
    toAddress: "0x...",
    // The amount of the native currency to send in this transaction
    nativeTokenValue: 0,
    // Transaction data that will be executed when the proposal is executed
    // This is an example transfer transaction with a token contract (which you would need to setup in code)
    transactionData: tokenContract.encoder.encode(
      "transfer", [
        fromAddress,
        amount,
      ]
    ),
  }
]

const proposal = await contract.propose(description, executions);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The description of the proposal. |
| `executions?` | `ProposalExecutable`[] | A set of executable transactions that will be run if the proposal is passed and executed. |

#### Returns

`Promise`<[`TransactionResultWithId`](../modules.md#transactionresultwithid)<`never`\>\>

- The id of the created proposal and the transaction receipt.

#### Defined in

[contracts/vote.ts:356](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L356)

___

### settings

▸ **settings**(): `Promise`<`VoteSettings`\>

Get the Vote contract configuration

#### Returns

`Promise`<`VoteSettings`\>

#### Defined in

[contracts/vote.ts:290](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L290)

___

### vote

▸ **vote**(`proposalId`, `voteType`, `reason?`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Vote

**`remarks`** Vote on an active proposal

**`example`**
```javascript
// The proposal ID of the proposal you want to vote on
const proposalId = "0";
// The vote type you want to cast, can be VoteType.Against, VoteType.For, or VoteType.Abstain
const voteType = VoteType.For;
// The (optional) reason for the vote
const reason = "I like this proposal!";

await contract.vote(proposalId, voteType, reason);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `proposalId` | `string` | `undefined` | The proposal to cast a vote on. |
| `voteType` | `VoteType` | `undefined` | The position the voter is taking on their vote. |
| `reason` | `string` | `""` | (optional) The reason for the vote. |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/vote.ts:408](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/vote.ts#L408)

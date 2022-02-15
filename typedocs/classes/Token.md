[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / Token

# Class: Token

Create a standard crypto token or crypto currency.

**`example`**

```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const token = sdk.getToken("{{contract_address}}");
```

## Hierarchy

- [`Erc20`](Erc20.md)<`TokenERC20`\>

  ↳ **`Token`**

## Table of contents

### Constructors

- [constructor](Token.md#constructor)

### Properties

- [encoder](Token.md#encoder)
- [metadata](Token.md#metadata)
- [roles](Token.md#roles)
- [contractFactory](Token.md#contractfactory)
- [contractRoles](Token.md#contractroles)
- [contractType](Token.md#contracttype)

### Methods

- [allowance](Token.md#allowance)
- [allowanceOf](Token.md#allowanceof)
- [balance](Token.md#balance)
- [balanceOf](Token.md#balanceof)
- [burn](Token.md#burn)
- [burnFrom](Token.md#burnfrom)
- [delegateTo](Token.md#delegateto)
- [get](Token.md#get)
- [getAddress](Token.md#getaddress)
- [getDelegation](Token.md#getdelegation)
- [getDelegationOf](Token.md#getdelegationof)
- [getVoteBalance](Token.md#getvotebalance)
- [getVoteBalanceOf](Token.md#getvotebalanceof)
- [isTransferRestricted](Token.md#istransferrestricted)
- [mint](Token.md#mint)
- [mintBatchTo](Token.md#mintbatchto)
- [mintTo](Token.md#mintto)
- [setAllowance](Token.md#setallowance)
- [totalSupply](Token.md#totalsupply)
- [transfer](Token.md#transfer)
- [transferBatch](Token.md#transferbatch)
- [transferFrom](Token.md#transferfrom)

## Constructors

### constructor

• **new Token**(`network`, `address`, `storage`, `options?`, `contractWrapper?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkOrSignerOrProvider`](../modules.md#networkorsignerorprovider) |
| `address` | `string` |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |
| `contractWrapper` | `ContractWrapper`<`TokenERC20`\> |

#### Overrides

[Erc20](Erc20.md).[constructor](Erc20.md#constructor)

#### Defined in

[contracts/token.ts:46](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L46)

## Properties

### encoder

• **encoder**: [`ContractEncoder`](ContractEncoder.md)<`TokenERC20`\>

#### Defined in

[contracts/token.ts:44](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L44)

___

### metadata

• **metadata**: [`ContractMetadata`](ContractMetadata.md)<`TokenERC20`, { `deploy`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, { `trusted_forwarder`: `ZodDefault`<`ZodEffects`<`ZodString`, `string`, `string`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `symbol`: `string` ; `trusted_forwarder`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `symbol`: `undefined` \| `string` ; `trusted_forwarder`: `undefined` \| `string`  }\> = TokenErc20ContractDeploy; `input`: `ZodObject`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodTypeAny`, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `any` ; `name`: `string` ; `symbol`: `undefined` \| `string`  }\> = TokenErc20ContractInput; `output`: `ZodObject`<`extendShape`<`extendShape`<{ `description`: `ZodOptional`<`ZodString`\> ; `external_link`: `ZodOptional`<`ZodString`\> ; `image`: `ZodOptional`<`ZodUnion`<[`ZodTypeAny`, `ZodString`]\>\> ; `name`: `ZodString`  }, { `image`: `ZodOptional`<`ZodString`\>  }\>, { `symbol`: `ZodDefault`<`ZodOptional`<`ZodString`\>\>  }\>, ``"strip"``, `ZodLazy`<`ZodType`<[`Json`](../modules.md#json), `ZodTypeDef`, [`Json`](../modules.md#json)\>\>, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `symbol`: `string`  }, { `description`: `undefined` \| `string` ; `external_link`: `undefined` \| `string` ; `image`: `undefined` \| `string` ; `name`: `string` ; `symbol`: `undefined` \| `string`  }\> = TokenErc20ContractOutput }\>

#### Defined in

[contracts/token.ts:42](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L42)

___

### roles

• **roles**: [`ContractRoles`](ContractRoles.md)<`TokenERC20`, ``"transfer"`` \| ``"admin"`` \| ``"minter"``\>

#### Defined in

[contracts/token.ts:43](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L43)

___

### contractFactory

▪ `Static` **contractFactory**: typeof `TokenERC20__factory` = `TokenERC20__factory`

#### Defined in

[contracts/token.ts:36](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L36)

___

### contractRoles

▪ `Static` **contractRoles**: readonly [``"admin"``, ``"minter"``, ``"transfer"``]

#### Defined in

[contracts/token.ts:35](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L35)

___

### contractType

▪ `Static` **contractType**: ``"token"``

#### Defined in

[contracts/token.ts:34](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L34)

## Methods

### allowance

▸ **allowance**(`spender`): `Promise`<`BigNumber`\>

Get Token Allowance

**`remarks`** Get the allowance of a 'spender' wallet over the connected wallet's funds - the allowance of a different address for a token is the amount of tokens that the `spender` wallet is allowed to spend on behalf of the connected wallet.

**`example`**
```javascript
// Address of the wallet to check token allowance
const spenderAddress = "0x...";

const allowance = await contract.allowanceOf(otherAddress);
console.log(allowance);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |

#### Returns

`Promise`<`BigNumber`\>

The allowance of one wallet over anothers funds.

#### Inherited from

[Erc20](Erc20.md).[allowance](Erc20.md#allowance)

#### Defined in

[core/classes/erc-20.ts:138](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L138)

___

### allowanceOf

▸ **allowanceOf**(`owner`, `spender`): `Promise`<`BigNumber`\>

Get Token Allowance

**`remarks`** Get the allowance of one wallet over another wallet's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the specified wallet.

**`example`**
```javascript
// Address of the wallet who owns the funds
const address = "{{wallet_address}}";

// Address of the wallet to check token allowance
const spenderAddress = "0x...";

const allowance = await contract.allowanceOf(address, spenderAddress);
console.log(allowance);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |

#### Returns

`Promise`<`BigNumber`\>

The allowance of one wallet over anothers funds.

#### Inherited from

[Erc20](Erc20.md).[allowanceOf](Erc20.md#allowanceof)

#### Defined in

[core/classes/erc-20.ts:164](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L164)

___

### balance

▸ **balance**(): `Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

Get Token Balance for the currently connected wallet

**`remarks`** Get a wallets token balance.

**`example`**
```javascript
const balance = await contract.balance();
console.log(balance);
```

#### Returns

`Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

The balance of a specific wallet.

#### Inherited from

[Erc20](Erc20.md).[balance](Erc20.md#balance)

#### Defined in

[core/classes/erc-20.ts:89](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L89)

___

### balanceOf

▸ **balanceOf**(`address`): `Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

Get Token Balance

**`remarks`** Get a wallets token balance.

**`example`**
```javascript
// Address of the wallet to check token balance
const address = "{{wallet_address}}";

const balance = await contract.balanceOf(address);
console.log(balance);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<{ `decimals`: `number` ; `displayValue`: `string` ; `name`: `string` ; `symbol`: `string` ; `value`: `BigNumber`  }\>

The balance of a specific wallet.

#### Inherited from

[Erc20](Erc20.md).[balanceOf](Erc20.md#balanceof)

#### Defined in

[core/classes/erc-20.ts:109](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L109)

___

### burn

▸ **burn**(`amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Burn Tokens

**`remarks`** Burn tokens held by the connected wallet

**`example`**
```javascript
// The amount of this token you want to burn
const amount = 100;

await contract.burn(amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc20](Erc20.md).[burn](Erc20.md#burn)

#### Defined in

[core/classes/erc-20.ts:319](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L319)

___

### burnFrom

▸ **burnFrom**(`holder`, `amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Burn Tokens

**`remarks`** Burn tokens held by the specified wallet

**`example`**
```javascript
// Address of the wallet sending the tokens
const holderAddress = "{{wallet_address}}";

// The amount of this token you want to burn
const amount = 100;

await contract.burnFrom(holderAddress, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc20](Erc20.md).[burnFrom](Erc20.md#burnfrom)

#### Defined in

[core/classes/erc-20.ts:341](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L341)

___

### delegateTo

▸ **delegateTo**(`delegateeAddress`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Lets you delegate your voting power to the delegateeAddress

**`alpha`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delegateeAddress` | `string` | delegatee wallet address |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/token.ts:194](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L194)

___

### get

▸ **get**(): `Promise`<{ `decimals`: `number` ; `name`: `string` ; `symbol`: `string`  }\>

Get the token Metadata (name, symbol, etc...)

**`example`**
```javascript
const token = await contract.get();
console.log(token);
```

#### Returns

`Promise`<{ `decimals`: `number` ; `name`: `string` ; `symbol`: `string`  }\>

The token metadata

#### Inherited from

[Erc20](Erc20.md).[get](Erc20.md#get)

#### Defined in

[core/classes/erc-20.ts:69](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L69)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Inherited from

[Erc20](Erc20.md).[getAddress](Erc20.md#getaddress)

#### Defined in

[core/classes/erc-20.ts:51](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L51)

___

### getDelegation

▸ **getDelegation**(): `Promise`<`string`\>

Get your voting delegatee address

#### Returns

`Promise`<`string`\>

the address of your vote delegatee

#### Defined in

[contracts/token.ts:92](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L92)

___

### getDelegationOf

▸ **getDelegationOf**(`account`): `Promise`<`string`\>

Get a specific address voting delegatee address

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`string`\>

the address of your vote delegatee

#### Defined in

[contracts/token.ts:103](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L103)

___

### getVoteBalance

▸ **getVoteBalance**(): `Promise`<`BigNumber`\>

Get your wallet voting power for the current checkpoints

#### Returns

`Promise`<`BigNumber`\>

the amount of voting power in tokens

#### Defined in

[contracts/token.ts:77](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L77)

___

### getVoteBalanceOf

▸ **getVoteBalanceOf**(`account`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[contracts/token.ts:83](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L83)

___

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Get whether users can transfer tokens from this contract

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Erc20](Erc20.md).[isTransferRestricted](Erc20.md#istransferrestricted)

#### Defined in

[core/classes/erc-20.ts:171](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L171)

___

### mint

▸ **mint**(`amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Mint Tokens for the connected wallet

**`remarks`** See [Token.mintTo](Token.md#mintto)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/token.ts:116](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L116)

___

### mintBatchTo

▸ **mintBatchTo**(`args`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Mint Tokens To Many Wallets

**`remarks`** Mint tokens to many wallets in one transaction.

**`example`**
```javascript
// Data of the tokens you want to mint
const data = [
  {
    toAddress: "{{wallet_address}}", // Address to mint tokens to
    amount: 100, // How many tokens to mint to specified address
  },
 {
   toAddress: "0x...",
   amount: 100,
 }
]

await contract.mintBatchTo(data);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | { `amount`: `string` \| `number` \| `bigint` \| `BigNumber` ; `toAddress`: `string`  }[] |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/token.ts:171](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L171)

___

### mintTo

▸ **mintTo**(`to`, `amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Mint Tokens

**`remarks`** Mint tokens to a specified address.

**`example`**
```javascript
const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
const amount = "1.5"; // The amount of this token you want to mint

await contract.mintTo(toAddress, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[contracts/token.ts:133](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/contracts/token.ts#L133)

___

### setAllowance

▸ **setAllowance**(`spender`, `amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Allows the specified `spender` wallet to transfer the given `amount` of tokens to another wallet

**`example`**
```javascript
// Address of the wallet to allow transfers from
const spenderAddress = "0x...";

// The number of tokens to give as allowance
const amount = 100

await contract.setAllowance(spenderAddress, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumber` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc20](Erc20.md).[setAllowance](Erc20.md#setallowance)

#### Defined in

[core/classes/erc-20.ts:262](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L262)

___

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

The total supply for this Token

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Erc20](Erc20.md).[totalSupply](Erc20.md#totalsupply)

#### Defined in

[core/classes/erc-20.ts:118](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L118)

___

### transfer

▸ **transfer**(`to`, `amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Transfer Tokens

**`remarks`** Transfer tokens from the connected wallet to another wallet.

**`example`**
```javascript
// Address of the wallet you want to send the tokens to
const toAddress = "0x...";

// The amount of tokens you want to send
const amount = 0;

await contract.transfer(toAddress, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc20](Erc20.md).[transfer](Erc20.md#transfer)

#### Defined in

[core/classes/erc-20.ts:199](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L199)

___

### transferBatch

▸ **transferBatch**(`args`): `Promise`<`void`\>

Transfer Tokens To Many Wallets

**`remarks`** Mint tokens from the connected wallet to many wallets

**`example`**
```javascript
// Data of the tokens you want to mint
const data = [
  {
    toAddress: "{{wallet_address}}", // Address to mint tokens to
    amount: 100, // How many tokens to mint to specified address
  },
 {
   toAddress: "0x...",
   amount: 100,
 }
]

await contract.transferBatch(data);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | { `amount`: `string` \| `number` \| `bigint` \| `BigNumber` ; `toAddress`: `string`  }[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Erc20](Erc20.md).[transferBatch](Erc20.md#transferbatch)

#### Defined in

[core/classes/erc-20.ts:296](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L296)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `amount`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Transfer Tokens From Address

**`remarks`** Transfer tokens from one wallet to another

**`example`**
```javascript
// Address of the wallet sending the tokens
const fromAddress = "{{wallet_address}}";

// Address of the wallet you want to send the tokens to
const toAddress = "0x...";

// The number of tokens you want to send
const amount = 100

// Note that the connected wallet must have approval to transfer the tokens of the fromAddress
await contract.transferFrom(fromAddress, toAddress, amount);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Inherited from

[Erc20](Erc20.md).[transferFrom](Erc20.md#transferfrom)

#### Defined in

[core/classes/erc-20.ts:234](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L234)

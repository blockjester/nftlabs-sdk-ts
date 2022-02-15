[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / Erc20

# Class: Erc20<T\>

Standard ERC20 functions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TokenERC20` |

## Hierarchy

- **`Erc20`**

  ↳ [`Token`](Token.md)

## Implements

- `UpdateableNetwork`

## Table of contents

### Constructors

- [constructor](Erc20.md#constructor)

### Methods

- [allowance](Erc20.md#allowance)
- [allowanceOf](Erc20.md#allowanceof)
- [balance](Erc20.md#balance)
- [balanceOf](Erc20.md#balanceof)
- [burn](Erc20.md#burn)
- [burnFrom](Erc20.md#burnfrom)
- [get](Erc20.md#get)
- [getAddress](Erc20.md#getaddress)
- [isTransferRestricted](Erc20.md#istransferrestricted)
- [setAllowance](Erc20.md#setallowance)
- [totalSupply](Erc20.md#totalsupply)
- [transfer](Erc20.md#transfer)
- [transferBatch](Erc20.md#transferbatch)
- [transferFrom](Erc20.md#transferfrom)

## Constructors

### constructor

• **new Erc20**<`T`\>(`contractWrapper`, `storage`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TokenERC20`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractWrapper` | `ContractWrapper`<`T`\> |
| `storage` | [`IStorage`](../interfaces/IStorage.md) |
| `options` | `undefined` \| { `gasSettings`: `undefined` \| { maxPriceInGwei?: number \| undefined; speed?: "safeLow" \| "standard" \| "fast" \| "fastest" \| undefined; } ; `gasless`: `undefined` \| { openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; }; } \| { biconomy: { deadlineSeconds?: number \| undefined; apiId: string; apiKey: string; }; } ; `readonlySettings`: `undefined` \| { chainId?: number \| undefined; rpcUrl: string; }  } |

#### Defined in

[core/classes/erc-20.ts:26](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L26)

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

#### Defined in

[core/classes/erc-20.ts:341](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L341)

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

#### Defined in

[core/classes/erc-20.ts:69](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L69)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Implementation of

UpdateableNetwork.getAddress

#### Defined in

[core/classes/erc-20.ts:51](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L51)

___

### isTransferRestricted

▸ **isTransferRestricted**(): `Promise`<`boolean`\>

Get whether users can transfer tokens from this contract

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/classes/erc-20.ts:171](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L171)

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

#### Defined in

[core/classes/erc-20.ts:262](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L262)

___

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

The total supply for this Token

#### Returns

`Promise`<`BigNumber`\>

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

#### Defined in

[core/classes/erc-20.ts:234](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/erc-20.ts#L234)

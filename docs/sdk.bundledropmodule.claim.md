<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [BundleDropModule](./sdk.bundledropmodule.md) &gt; [claim](./sdk.bundledropmodule.claim.md)

## BundleDropModule.claim() method

Claim a token to yourself

<b>Signature:</b>

```typescript
claim(tokenId: BigNumberish, quantity: BigNumberish, proofs?: BytesLike[]): Promise<TransactionReceipt>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tokenId | BigNumberish | Id of the token you want to claim |
|  quantity | BigNumberish | Quantity of the tokens you want to claim |
|  proofs | BytesLike\[\] | Array of proofs |

<b>Returns:</b>

Promise&lt;TransactionReceipt&gt;

- Receipt for the transaction


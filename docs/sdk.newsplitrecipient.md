<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [NewSplitRecipient](./sdk.newsplitrecipient.md)

## NewSplitRecipient interface

The NewSplitRecipient interface describes the structure of a new split recipient. The `shares` property is important for the calculation of the the total split.

If there are two recipients each with 10 shares, they each will receive 50% of the total royalties.

If there are two recipients each with 1 share, they each will receive 50% of the total royalties.

I.e. the total number of shares is used to calculate the percentage of the total royalties that is allocated to each recipient.

<b>Signature:</b>

```typescript
export interface NewSplitRecipient 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [address](./sdk.newsplitrecipient.address.md) | string | The address of the recipient |
|  [shares](./sdk.newsplitrecipient.shares.md) | BigNumberish | The number of shares for the recipient |


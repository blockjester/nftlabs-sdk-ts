<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [BundleDropModule](./sdk.bundledropmodule.md) &gt; [getClaimIneligibilityReasons](./sdk.bundledropmodule.getclaimineligibilityreasons.md)

## BundleDropModule.getClaimIneligibilityReasons() method

For any claim conditions that a particular wallet is violating, this function returns human readable information about the breaks in the condition that can be used to inform the user.

<b>Signature:</b>

```typescript
getClaimIneligibilityReasons(tokenId: BigNumberish, quantity: BigNumberish, addressToCheck?: string): Promise<ClaimEligibility[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tokenId | BigNumberish | The token id that would be claimed. |
|  quantity | BigNumberish | The desired quantity that would be claimed. |
|  addressToCheck | string | The address that would be claiming the token. |

<b>Returns:</b>

Promise&lt;[ClaimEligibility](./sdk.claimeligibility.md)<!-- -->\[\]&gt;


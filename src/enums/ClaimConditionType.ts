enum ClaimConditionType {
  StartTime,
  LimitPerWallet,
  MerkleRoot,
  WaitTimeBetweenClaims,
}

/**
 * Questions:
 *
 * 1. Can there only be a single `startTimestamp` condition? What is a `startTimestamp` condition?
 *
 * 2. What is `maxMintSupply`?
 *
 * 3. What is `currentMintSupply`?
 *
 * 4. What is `quantityLimitPerTransaction`?
 *
 * 5. What is `waitTimeSecondsLimitPerTransaction`?
 *
 * 6. Can there only be one `pricePerToken`?
 *
 * 7. Can there only be one `pricePerToken`?
 *
 */

export default ClaimConditionType;

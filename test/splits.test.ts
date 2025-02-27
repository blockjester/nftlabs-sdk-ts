import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert } from "chai";
import { SplitsModule } from "../src/modules/royalty";
import { appModule, sdk, signers } from "./before.test";

global.fetch = require("node-fetch");

const testTokenAddress = "0xf18feb8b2f58691d67c98db98b360840df340e74";
const thirdwebRoyaltyAddress = "0xE00994EBDB59f70350E2cdeb897796F732331562";

describe("Splits Module", async () => {
  let splitsModule: SplitsModule;

  let adminWallet: SignerWithAddress,
    samWallet: SignerWithAddress,
    bobWallet: SignerWithAddress;

  before(() => {
    [adminWallet, samWallet, bobWallet] = signers;
  });

  beforeEach(async () => {
    sdk.setProviderOrSigner(adminWallet);
    splitsModule = await appModule.deploySplitsModule({
      name: "Splits Module",
      recipientSplits: [
        {
          address: bobWallet.address,
          shares: 1,
        },
      ],
    });
  });

  // TODO: Fix bug in the `getAllRecipients` function
  it.skip("should return all recipients of splits", async () => {
    const recipients = await splitsModule.getAllRecipients();
    assert.lengthOf(
      recipients,
      2,
      "There should be 3 split recipients on this contract",
    );
  });

  it("should return the correct slip percentage for an address", async () => {
    assert.equal(
      (await splitsModule.getRecipientSplitPercentage(adminWallet.address))
        .splitPercentage,
      0.3,
      "The Thirdweb wallet should have 0.3% share of all royalties",
    );
  });

  it("should return all the recipients along with their balances", async () => {
    const balances = await splitsModule.balanceOfAllRecipients();
    assert.equal(
      Object.keys(balances).length,
      2,
      "There should be 3 recipients",
    );
  });
  it("should return all the recipients along with their token balances", async () => {
    const balances = await splitsModule.balanceOfTokenAllRecipients(
      await appModule
        .deployTokenModule({
          name: "Test Token",
          symbol: "TST",
        })
        .then((tokenModule) => tokenModule.address),
    );
    assert.equal(
      Object.keys(balances).length,
      2,
      "There should be 3 recipients",
    );
  });
});

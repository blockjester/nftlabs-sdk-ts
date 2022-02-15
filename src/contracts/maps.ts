import { NFTCollection } from "./nft-collection";
import { NFTStackDrop } from "./nft-stack-drop";
import { NFTStackCollection } from "./nft-stack-collection";
import { Token } from "./token";
import { Vote } from "./vote";
import { Split } from "./split";
import { Marketplace } from "./marketplace";
import { Pack } from "./pack";
import { NFTDrop } from "./nft-drop";
import {
  DropERC1155,
  DropERC721,
  TokenERC1155,
  TokenERC20,
  TokenERC721,
  VoteERC20,
  Split as SplitContract,
  Marketplace as MarketplaceContract,
  Pack as PackContract,
} from "@3rdweb/contracts";

/**
 * @internal
 */
export const CONTRACTS_MAP = {
  [NFTDrop.contractType]: NFTDrop,
  [NFTCollection.contractType]: NFTCollection,
  [NFTStackDrop.contractType]: NFTStackDrop,
  [NFTStackCollection.contractType]: NFTStackCollection,
  [Token.contractType]: Token,
  [Vote.contractType]: Vote,
  [Split.contractType]: Split,
  [Marketplace.contractType]: Marketplace,
  [Pack.contractType]: Pack,
} as const;

export type REMOTE_CONTRACTS_MAP = {
  [NFTDrop.contractType]: DropERC721;
  [NFTCollection.contractType]: TokenERC721;
  [NFTStackDrop.contractType]: DropERC1155;
  [NFTStackCollection.contractType]: TokenERC1155;
  [Token.contractType]: TokenERC20;
  [Vote.contractType]: VoteERC20;
  [Split.contractType]: SplitContract;
  [Marketplace.contractType]: MarketplaceContract;
  [Pack.contractType]: PackContract;
};

/**
 * @internal
 */
export const REMOTE_CONTRACT_TYPE = {
  [NFTDrop.contractType]: "DropERC721",
  [NFTCollection.contractType]: "TokenERC721",
  [NFTStackDrop.contractType]: "DropERC1155",
  [NFTStackCollection.contractType]: "TokenERC1155",
  [Token.contractType]: "TokenERC20",
  [Vote.contractType]: "VoteERC20",
  [Split.contractType]: "Split",
  [Marketplace.contractType]: "Marketplace",
  [Pack.contractType]: "Pack",
} as const;

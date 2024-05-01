import { Address } from "viem";
import { Token } from "./types/Token";
import { bscTestnet } from "viem/chains";

const config = {
  chains: [bscTestnet],
  walletConnectProjectId: "adf871b8f2ca358128c57af727e82cae", // REPLACE WITH YOUR WALLET CONNECT PROJECT ID

  rewardToken: {
    [bscTestnet.id]: {
      symbol: "VRTX",
      address: "0x0cDc6291F0164bf0eC8bad401FBc3F06fC9E5feb", // YOUR REWARD TOKEN SMART CONTRACT
      decimals: 18,
    },
  } as Record<number, Token>,

  votingContract: {
    [bscTestnet.id]: "0x3dc258400b93beecab179fb8b9aa0c2e7f36c453", // YOUR VOTING SMART CONTRACT
  } as Record<number, Address>,
};

export default config;

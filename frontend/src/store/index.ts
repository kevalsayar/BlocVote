/**
 * DECENTVOTE | Voting dApp made by ZiLab Technologies
 *
 * www.zilab.co
 * Telegram: @zilab_technologies
 */
import { Poll } from "@/types/Poll";
import { create } from "zustand";

interface StoreState {
  createPollFee: bigint;
  voteFee: bigint;
  rewardAmount: bigint;
  myPolls: Poll[];
  availablePolls: Poll[];
  totalEarned: bigint;
  togglePoll: (id: bigint) => void;
}

const useStore = create<StoreState>()((set) => ({
  myPolls: [],
  availablePolls: [],
  createPollFee: 0n,
  voteFee: 0n,
  rewardAmount: 0n,
  totalEarned: 0n,
  togglePoll: (id: bigint) =>
    set((state) => {
      const poll = state.myPolls.find((poll) => poll.id === id);
      if (!poll) return state;
      poll.isValid = !poll.isValid;
      return { myPolls: [...state.myPolls] };
    }),
}));

export default useStore;

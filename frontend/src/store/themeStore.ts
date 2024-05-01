/**
 * DECENTVOTE | Voting dApp made by ZiLab Technologies
 *
 * www.zilab.co
 * Telegram: @zilab_technologies
 */
import { create } from "zustand";

interface ThemeStoreState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const useThemeStore = create<ThemeStoreState>()((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useThemeStore;

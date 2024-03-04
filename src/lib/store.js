import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
}));

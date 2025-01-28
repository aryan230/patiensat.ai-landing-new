// store/usePriceStore.ts
import { create } from "zustand";

interface PriceState {
  price: number;
  plan: string;
  setPrice: (price: number) => void;
  setPlan: (currency: string) => void;
}

export const usePriceStore = create<PriceState>()((set) => ({
  price: 0,
  plan: "pioneer",
  setPrice: (price) => set({ price }),
  setPlan: (plan) => set({ plan }),
}));

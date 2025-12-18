import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCardTypeStore = create(
    persist(
        (set) => ({
            cardType: "memory",
            setCardType: (type) => set({ cardType: type }),
            resetCardType: () => set({ cardType: "eCard" }),
        }),
        {
            name: "card-type-store",
        }
    )
);

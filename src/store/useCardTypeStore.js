import { create } from "zustand";

export const useCardTypeStore = create(
    (set) => ({
        cardType: 'eCard',
        setCardType: (type) => set({ cardType: type }),
        resetCardType: () => set({ cardType: 'eCard' }),
    })
);

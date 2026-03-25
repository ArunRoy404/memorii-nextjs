import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useECardStore = create(
    persist(
        (set, get) => ({
            guest_token: "",
            setGuestToken: (token) => set({ guest_token: token }),
            getGuestToken: () => get().guest_token,
            clearGuestToken: () => set({ guest_token: "" }),
        }),
        {
            name: 'e-card-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useECardStore = create(
    persist(
        (set, get) => ({
            // State: { "8": { token: "uuid...", createdAt: 17123456789 } }
            guestTokens: {},

            // Action to add/update a token with current timestamp
            addGuestToken: (id, token) =>
                set((state) => ({
                    guestTokens: {
                        ...state.guestTokens,
                        [id]: {
                            token,
                            createdAt: Date.now(),
                        },
                    },
                })),

            // Function to clean up expired tokens (> 24h)
            clearExpiredTokens: () => {
                const now = Date.now();
                const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
                const currentTokens = get().guestTokens;

                const freshTokens = Object.keys(currentTokens).reduce((acc, id) => {
                    const item = currentTokens[id];
                    if (now - item.createdAt < TWENTY_FOUR_HOURS) {
                        acc[id] = item;
                    }
                    return acc;
                }, {});

                // Only update state if something was actually deleted to avoid re-renders
                if (Object.keys(currentTokens).length !== Object.keys(freshTokens).length) {
                    set({ guestTokens: freshTokens });
                }
            },
        }),
        {
            name: 'e-card-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
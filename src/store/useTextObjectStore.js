import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useTextObjectStore = create(
    persist(
        (set) => ({
            currentFontFamily: "Arial",

            setCurrentFontFamily: (fontFamily) => set({ currentFontFamily: fontFamily }),
            resetCurrentFontFamily: () => set({ currentFontFamily: "Arial" }),
        }),
        {
            name: 'text-object',
        }
    )
);
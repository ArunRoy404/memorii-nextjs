import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNewEditorStore = create(
    persist(
        (set, get) => ({
            canvases: {}, // store canvas objects per page
            currentPage: "page1",

            setCanvas: (page, canvas) =>
                set(state => ({
                    canvases: { ...state.canvases, [page]: canvas }
                })),

            setCurrentPage: (page) => set({ currentPage: page }),

            getCurrentCanvas: () => get().canvases[get().currentPage],

            resetCanvas: (page) =>
                set(state => {
                    const newCanvases = { ...state.canvases };
                    delete newCanvases[page];
                    return { canvases: newCanvases };
                }),
        }),
        {
            name: "editor-storage",
        }
    )
);

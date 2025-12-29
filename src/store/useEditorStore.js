import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useEditorStore = create(
    persist(
        (set, get) => ({
            editorRef: null,
            pages: [null],
            currentPage: 0,
            chosenBookPage: null,

            setEditorRef: (editorRef) => set({ editorRef }),
            setChosenBookPage: (page) => set({ chosenBookPage: page }),

            addPage: () => {
                const { chosenBookPage } = get()
                if (chosenBookPage) {
                    const { pages } = get();
                    set({ pages: [...pages, chosenBookPage] });
                } else {
                    const { pages } = get();
                    set({ pages: [...pages, null] });
                }
            },

            setCurrentPage: (index) => {
                set({ currentPage: index });
            },

            saveCurrentPage: () => {
                const { editorRef, pages, currentPage } = get();
                if (!editorRef) return;

                const json = editorRef.toJSON();
                const newPages = [...pages];
                newPages[currentPage] = json;
                set({ pages: newPages });
            },

            resetEditorStore: () => {
                set({ editorRef: null, pages: [null], currentPage: 0, chosenBookPage: null });
            },
            removeChosenBookPage: () => {
                set({ chosenBookPage: null });
            }
        }),
        { name: "editor-storage" }
    )
);

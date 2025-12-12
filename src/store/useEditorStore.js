import { create } from "zustand";
import { persist } from "zustand/middleware";



export const useEditorStore = create(
    persist(
        (set, get) => ({
            editorRef: null,
            pages: [],
            currentPage: 0,

            setEditorRef: (editorRef) => set({ editorRef }),

            addPage: (pageData) => {
                const { pages } = get();
                set({ pages: [...pages, pageData] });
            },

            setCurrentPage: (index) => {
                set({ currentPage: index });
            },

            saveCurrentPage: () => {
                const { editorRef, pages, currentPage } = get();
                if (!editorRef) return;

                // const json = editorRef.toJSON();
                const newPages = [...pages];
                newPages[currentPage] = {
                    ...newPages[currentPage],
                    // objects: json.objects,
                    // backgroundColor: editorRef.backgroundColor,
                    // layout: editorRef.layout,
                };
                set({ pages: newPages });
            },
        }),
        { name: "editor-storage" }
    )
);

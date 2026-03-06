import { create } from "zustand";

export const useEditorStore = create(
    (set, get) => ({
        editorRef: null,
        isTemplateLoading: true,

        frontPage: null,
        pages: [null],
        currentPage: 0,
        chosenBookPage: null,

        setIsTemplateLoading: (isTemplateLoading) => set({ isTemplateLoading }),
        setEditorRef: (editorRef) => set({ editorRef }),
        setChosenBookPage: (page) => set({ chosenBookPage: page }),

        setFrontPage: (frontPage) => set({ frontPage }),
        setPages: (pages) => set({ pages }),

        addPage: () => {
            const { chosenBookPage } = get()
            if (chosenBookPage) {
                const { pages } = get();
                set({ pages: [...pages, chosenBookPage] });
            } else {
                const { pages } = get();
                set({ pages: [...pages, { page_data: null }] });
            }
        },

        setCurrentPage: (index) => {
            set({ currentPage: index });
        },

        saveCurrentPage: () => {
            const { editorRef, pages, currentPage } = get();
            if (!editorRef) return;


            const json = editorRef.toJSON(['lockInteraction', 'preAddedText'])
            json.layout = editorRef.getLayout();
            const newPages = [...pages];
            newPages[currentPage].page_data = json;
            set({ pages: newPages });
        },



        resetEditorStore: () => {
            set({ editorRef: null, pages: [null], currentPage: 0, chosenBookPage: null });
        },
        removeChosenBookPage: () => {
            set({ chosenBookPage: null });
        }
    }),
);

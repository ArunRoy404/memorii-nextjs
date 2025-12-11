import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useEditorStore = create(
    persist(
        (set) => ({
            editorRef: null,

            setEditorRef: (editorRef) => set({ editorRef }),
            resetEditorRef: () => set({ editorRef: null }),
        }),
        {
            name: 'editor-storage',
        }
    )
);
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useEditorStore = create(
    persist(
        (set) => ({
            selectedTemplate: null,

            setSelectedTemplate: (selectedTemplate) => set({ selectedTemplate }),

            resetTemplateStore: () => set({ selectedTemplate: null }),
        }),
        {
            name: 'editor-storage', // key in localStorage
            // optionally, you can serialize/deserialize if needed
            // getStorage: () => localStorage, // default is localStorage
        }
    )
);

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useEditorTemplateStore = create(
    persist(
        (set) => ({
            selectedTemplate: null,

            setSelectedTemplate: (selectedTemplate) => set({ selectedTemplate }),

            resetTemplateStore: () => set({ selectedTemplate: null }),
        }),
        {
            name: 'editor-template-storage',
        }
    )
);

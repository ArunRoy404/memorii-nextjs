import { create } from 'zustand'

export const useTemplateStore = create((set) => ({
    selectedTemplate: null,

    setSelectedTemplate: (selectedTemplate) => set({ selectedTemplate }),

    resetTemplateStore: () => set({ selectedTemplate: null }),
}))
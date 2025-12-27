import { create } from "zustand";

export const usePagesImagesStore = create((set, get) => ({
    images: {},

    insertImageAt: (index, image) =>
        set((state) => ({
            images: {
                ...state.images,
                [index]: image,
            },
        })),


    reset: () => set({ images: {} }),


    getImagesArray: () => {
        const imagesObj = get().images;
        return Object.keys(imagesObj)
            .sort((a, b) => a - b)
            .map((key) => imagesObj[key]);
    },
}));

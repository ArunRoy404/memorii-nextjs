import { create } from "zustand";

export const useRedoUndoStateStore = create((set, get) => ({
    allHistory: {},
    allRedoStack: {},
    isLockedRef: null,


    setIsLockedRef: (isLockedRef) => set({ isLockedRef }),

    setHistoryAt: (pageIndex, history) => {
        set((state) => ({
            allHistory: { ...state.allHistory, [pageIndex]: history },
        }));
    },

    setRedoStackAt: (pageIndex, redoStack) => {
        set((state) => ({
            allRedoStack: { ...state.allRedoStack, [pageIndex]: redoStack },
        }));
    },


    getPageState: (pageIndex) => {
        const history = get().allHistory[pageIndex] || [];
        const redoStack = get().allRedoStack[pageIndex] || [];
        return { history, redoStack };
    },

    resetRedoUndoStateStore: () => set({ allHistory: {}, allRedoStack: {} }),
}));


import { create } from 'zustand';

export const useBroserHistoryStore = create((set) => ({
    previousPage: null,
    setPreviousPage: (input: string) => set({previousPage: input}),
}))
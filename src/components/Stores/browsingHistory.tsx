import { create } from 'zustand';

interface BrowserHistoryState {
    previousPage: string | null,
    setPreviousPage: (input: string) => void
}

export const useBrowserHistoryStore = create<BrowserHistoryState>()((set) => ({
    previousPage: null,
    setPreviousPage: (input: string) => set({previousPage: input}),
}))
import { create } from 'zustand'

export const useApiCheckerStore = create((set) => ({
    apiKey: localStorage.getItem("storedApiKey"),
    updateApiKey: (newKey: string) => set({apiKey: newKey}),
}))
import { create } from 'zustand'

export const useApiCheckerStore = create((set) => ({
    apiKey: localStorage.getItem("storedApiKey"),
    apiProdKey: localStorage.getItem("storedProdApiKey"),
    updateApiKey: (newKey: string) => set({apiKey: newKey}),
    updateProdApiKey: (newKey: string) => set({apiProdKey: newKey}),
}))
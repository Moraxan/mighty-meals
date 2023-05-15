import { create } from 'zustand'

interface ApiCheckerState {
    apiKey: string | null,
    apiProdKey: string | null,
    updateApiKey: (newKey: string | null) => void,
    updateProdApiKey: (newKey: string | null) => void
}

export const useApiCheckerStore = create<ApiCheckerState>()((set) => ({
    apiKey: localStorage.getItem("storedApiKey"),
    apiProdKey: localStorage.getItem("storedProdApiKey"),
    updateApiKey: (newKey: string | null) => set({apiKey: newKey}),
    updateProdApiKey: (newKey: string | null) => set({apiProdKey: newKey}),
}))
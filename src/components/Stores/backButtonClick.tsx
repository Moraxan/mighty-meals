import { create } from 'zustand'

export const useBackButtonStore = create((set) => ({
    clicked: false,
    clickBackButton: () => set({clicked: true}),
}))
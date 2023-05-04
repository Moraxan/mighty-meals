import { create } from 'zustand'

export const useDeveloperModeStore = create((set) => ({
    devMode: false,
    setDevMode: (input: boolean) => set({devMode: input}),
}))
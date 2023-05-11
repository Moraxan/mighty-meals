import { create } from 'zustand'

export const useHeroInfoStore = create((set) => ({
    heroObject: {},
    setHeroObject: (input: object) => set({heroObject: input}),

    isHeroSelected: false,
    setIsHeroSelected: (input: boolean) => set({isHeroSelected: input}),
}))
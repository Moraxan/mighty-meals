import { create } from 'zustand';
import { Hero } from "../../components/Interface/Interface";
import { captainAmerica } from "../../pages/HeroSelectionPage/HeroObjects";

interface DeveloperModeState {
    heroObject: Hero,
    setHeroObject: (input: Hero) => void

    isHeroSelected: boolean,
    setIsHeroSelected: (input: boolean) => void
}

export const useHeroInfoStore = create<DeveloperModeState>()((set) => ({
    heroObject: captainAmerica,
    setHeroObject: (input: Hero) => set({heroObject: input}),

    isHeroSelected: false,
    setIsHeroSelected: (input: boolean) => set({isHeroSelected: input}),
}))
import { create } from 'zustand';

interface BackButtonState {
    clicked: boolean,
    clickBackButton: (bool: boolean) => void
}

export const useBackButtonStore = create<BackButtonState>()((set) => ({
    clicked: false,
    clickBackButton: (bool: boolean) => set({clicked: bool}),
}))
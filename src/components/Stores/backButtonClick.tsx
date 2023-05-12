import { create } from 'zustand';

export const useBackButtonStore = create((set) => ({
    clicked: false,
    clickBackButton: (bool: boolean) => set({clicked: bool}),
}))
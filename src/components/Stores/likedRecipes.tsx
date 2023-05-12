import create, { SetState } from 'zustand'

interface RecipeStoreState {
  recipeIds: string[]
  addRecipeId: (id: string) => void
  removeRecipeId: (id: string) => void
  clearRecipeIds: () => void
}

export const recipeStore = create<RecipeStoreState>((set: SetState<RecipeStoreState>) => ({
  recipeIds: [],
  addRecipeId: (id: string) =>
    set((state) => ({ recipeIds: [...state.recipeIds, id] })),
  removeRecipeId: (id: string) =>
    set((state) => ({ recipeIds: state.recipeIds.filter((recipeId) => recipeId !== id) })),
  clearRecipeIds: () => set({ recipeIds: [] }),
}))


import create, { SetState } from 'zustand'

const likedRecipesStorageKey = 'likedRecipes'

interface RecipeStoreState {
  recipeIds: string[]
  addRecipeId: (id: string) => void
  removeRecipeId: (id: string) => void
  clearRecipeIds: () => void
}

export const likedRecipeStore = create<RecipeStoreState>((set: SetState<RecipeStoreState>) => {
  const savedRecipeIds = JSON.parse(localStorage.getItem(likedRecipesStorageKey) || '[]')

  return {
    recipeIds: savedRecipeIds,
    addRecipeId: (id: string) =>
      set((state) => {
        const updatedIds = [...state.recipeIds, id]
        localStorage.setItem(likedRecipesStorageKey, JSON.stringify(updatedIds))
        return { recipeIds: updatedIds }
      }),
    removeRecipeId: (id: string) =>
      set((state) => {
        const updatedIds = state.recipeIds.filter((recipeId) => recipeId !== id)
        localStorage.setItem(likedRecipesStorageKey, JSON.stringify(updatedIds))
        return { recipeIds: updatedIds }
      }),
    clearRecipeIds: () => {
      localStorage.removeItem(likedRecipesStorageKey)
      set({ recipeIds: [] })
    },
  }
})

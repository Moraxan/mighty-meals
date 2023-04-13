
export interface RecipeFrontST  {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
  }

  interface RecipeDetails {
    id: number;
  
    title: string;
    summary: string;
    image: string;
  
    readyInMinutes: number;
    servings: number;
  
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
  
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
  
    analyzedInstructions: string[];
  }
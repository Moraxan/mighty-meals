
export interface RecipeFrontST  {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
}

export interface RecipeDetails {
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

export interface RecipeMTVMH {
    id: number;

    title: string;
    image: string;

    missedIngredientCount: number;
    // missedIngredients: string[];

    usedIngredientCount: number;
    // usedIngredients: string[];

    // unusedIngredients: string[];
}



export interface Hero {
    id: string,
    name: string,
    powerstats: powerstats,
    biography: biography,
    appearance: appearance,
    work: work,
    connections: connections,
    image: image,
}

interface powerstats {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat: string,
}

interface biography {
    fullName: string,
    alterEgos: string,
    aliases: string[],
    placeOfBirth: string,
    firstAppearance: string,
    publisher: string,
    alignment: string,
}

interface appearance {
    gender: string,
    race: string,
    height: string[],
    weight: string[],
    eyeColor: string,
    hairColor: string,
}

interface work {
    occupation: string,
    base: string,
}

interface connections {
    groupAffiliation: string,
    relatives: string,
}

interface image {
    url: string,
}
import { useState } from 'react';
import { SearchIngredients } from '../searchingredientsbar/SearchIngredients';
import { FetchButton } from '../fetchbutton/FetchButton';

export function IngredientSearch2() {
  const [ingredientChoices, setIngredientChoices] = useState<string[]>([]);

  return (
    <div>
      <SearchIngredients
        ingredientChoices={ingredientChoices}
        setIngredientChoices={setIngredientChoices}
      />
      <FetchButton ingredientChoices={ingredientChoices} />
    </div>
  );
}

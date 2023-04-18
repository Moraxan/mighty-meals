import { useEffect, useState } from 'react';
import { BackButton } from './BackButton';
import { DishSummary } from './DishSummary';
import { Ingredients } from './Ingredients';
import { Directions } from './Directions';
import { DishImage } from './DishImage';
import './RecipePage.css';

export const RecipePage = () => {
  const [recipeId, setRecipeId] = useState(637776);
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(`recipeFetch_${recipeId}`));
    if (storedData) {
      setRecipeData(storedData);
    } else {
      const apiKey = 'ee013e8020684691b2832a5da2f51b00';
      const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error fetching recipe');
          }
        })
        .then((recipeData) => {
          localStorage.setItem(`recipeFetch_${recipeId}`, JSON.stringify(recipeData));
          setRecipeData(recipeData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [recipeId]);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="RecipePage">
      <div className="RecipePage-left-column">
        <BackButton className="RecipePage-back-button" />
      </div>
      <div className="RecipePage-right-column">
        <div className="RecipePage-top-row">
          <DishImage imageUrl={recipeData?.image} altText={recipeData?.title} />
          <DishSummary recipeData={recipeData} />
        
        </div>
        <div className="RecipePage-bottom-row">
          <Ingredients ingredients={recipeData?.extendedIngredients} />
          <Directions directions={recipeData.analyzedInstructions} />
        </div>
      </div>
    </div>
  );
};

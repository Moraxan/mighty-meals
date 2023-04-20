import { useEffect, useState } from 'react';
import { BackButton } from './BackButton';
import { DishSummary } from './DishSummary';
import { Ingredients } from './Ingredients';
import { Directions } from './Directions';
import { DishImage } from './DishImage';
import './RecipePage.css';

//This function fetches the recipe data from the API and stores it in local storage
//so that it can be used later without making another API call
//The recipeId is hard-coded here, but it could be passed in as a prop
//to make this component more reusable
//If you want to try another recipe, just put in another ID from the API
//A suggestion is to use one of these IDs: 637776 or 634091 only because it's them that are used on the StartPage
export const RecipePage = () => {
  const [recipeId, setRecipeId] = useState(660697);
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(`recipeFetch_${recipeId}`));
    if (storedData) {
      setRecipeData(storedData);
    } else {
//Remember to put in your own API key here the first time you run this code
//If you see the middle component of the page saying Loading... then you've probably forgotten to put in your API key
      const apiKey = 'your api key here';
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
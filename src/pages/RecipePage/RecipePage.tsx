import { useEffect, useState } from 'react';
import { BackButton } from './BackButton';
import { DishSummary } from './DishSummary';
import { Ingredients } from './Ingredients';
import { Directions } from './Directions';
import { DishImage } from './DishImage';
import {useLoaderData} from "react-router-dom";
import {useBackButtonStore} from "../../components/Stores/backButtonClick";
import './RecipePage.css';

//This function fetches the recipe data from the API and stores it in local storage
//so that it can be used later without making another API call
//The recipeId is hard-coded here, but it could be passed in as a prop
//to make this component more reusable
//If you want to try another recipe, just put in another ID from the API
//A suggestion is to use one of these IDs: 637776 or 634091 only because it's them that are used on the StartPage

//@ts-ignore
export const RecipePage = () => {
//  ***************   |This loads the id to the router via useLoaderData and the loader in the route |***************
  const recipeId = useLoaderData();
  const [recipeData, setRecipeData] = useState(null);

  //@ts-ignore //global zustand variable/state to monitor back button click and persist state.
  const handleBackClick = useBackButtonStore((state) => state.clickBackButton);

  useEffect(() => {
    const persistedSettings = JSON.parse(localStorage.getItem("mightySettings")!);
    const storedData = JSON.parse(localStorage.getItem(`recipeFetch_${recipeId}`)!);
    if (storedData) {
      setRecipeData(storedData);
    } else {
//Remember to put in your own API key here the first time you run this code
//If you see the middle component of the page saying Loading... then you've probably forgotten to put in your API key
      const apiKey: string | null = localStorage.getItem("storedApiKey");
      const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=${persistedSettings.storeAddRecipeNutrition}`;

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
    return <div>Fetch unsuccesful, check your API key</div>;
  }

  return (
    <div className="RecipePage">
      <div className="BackButton">
        <BackButton handleBackClick={handleBackClick} />
      </div>
      <div className="DishImage">
          {/*//@ts-ignore*/}
          <DishImage imageUrl={recipeData?.image} altText={recipeData?.title} />
      </div>
      <div className="Ingredients">
          {/*//@ts-ignore*/}
          <Ingredients ingredients={recipeData?.extendedIngredients} noOfServings={recipeData?.servings} />
      </div>
      <div className="DishSummary">
          <DishSummary recipeData={recipeData} />
      </div>
      <div className="Directions">
          {/*//@ts-ignore*/}
          <Directions directions={recipeData.analyzedInstructions} />
        </div>
      </div>
  );
  
};
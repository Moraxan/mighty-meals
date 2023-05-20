import { render } from "react-dom";
import { useState } from "react";
import Card from "../../components/RecipeCard/Card";
import Footer from "../../components/Footer/Footer";
import "./FavoriteRecipeDisplay.css";

export function FavoriteRecipeDisplay({favoriteRecipes}){

    const [recipes, setRecipes] = useState(favoriteRecipes);
    const [isFavorite, setIsFavorite] = useState(false);

    function checkIfFavoriteRecipe(favoriteRecipes, recipeId:number) {
        const favoriteStorageArray = JSON.parse(localStorage.getItem('favoriteRecipes'));
        const found = favoriteStorageArray.find(recipe => recipe.id === recipeId)
        return found? true: false; 
      }

//@ts-ignore
      const renderCards = (recipes) => {
        return (
          <div>
            {recipes.map(recipe => (
              <Card
              key={recipe.id}
              recId={recipe.id}
              imgSrc={recipe.image}
              recipeTitle={recipe.title}
              readyInMin={recipe.timeToMake}
              markAsFavorite={checkIfFavoriteRecipe(recipes,recipe.id)}
              favoritedRecipes={favoriteRecipes}
              
              />
            ))}
          </div>
        );
      };

    return (
        <>
        <div className="favorite-title">
          Favorite recipes
        </div>
        <div className="favorite-outer-container">
          <div className="favorite-outer-container">
              <div className="cards-container">
                <div className="cards-wrapper">
                    {renderCards(recipes)};
                </div>
              </div>
          </div>
        </div>
        </>
    );
}
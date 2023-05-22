import { useState } from "react";
import { FavoriteButton } from "../../components/FavoriteButton/FavoriteButton";
import alt_image from "../../images/alt_image.png";
import "./DishImage.css"


//@ts-ignore
export const DishImage = ({ imageUrl, altText, recipeObject,}) => {

  const [favoriteRecipes, setFavoriteRecipes] = useState(JSON.parse(localStorage.getItem('favoriteRecipes')!) || []);
  const [isFavorite, setIsFavorite] = useState<boolean>(checkIfFavoriteRecipe(recipeObject.id));    
  
  
  function checkIfFavoriteRecipe(recipeId:number) {
    const favoriteStorageArray = JSON.parse(localStorage.getItem('favoriteRecipes')!);
    //@ts-ignore
    const found = favoriteStorageArray.find(recipe => recipe.id === recipeId)
    return found? true: false; 
  }


  return (
    <div className="dish-image-container">
      {/*//@ts-ignore*/}
      <img src={imageUrl === undefined ? "undefined" : imageUrl} alt={altText} className="dish-image" onError={(e) => {e.target.src = alt_image}} />
      <div>
        <FavoriteButton recId={recipeObject.id} imgSrc={recipeObject.image} readyInMin={recipeObject.readyInMinutes} recipeTitle={recipeObject.title} setFavoriteRecipes={setFavoriteRecipes} isFavorite={isFavorite} setIsFavorite={setIsFavorite}/>
      </div>
    </div>

  );
};
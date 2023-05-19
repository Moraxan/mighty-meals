
import { useState } from "react";
import Card from '../../components/RecipeCard/Card';
import { RecipeFrontST } from '../../components/Interface/Interface';
import { BackButton } from '../RecipePage/BackButton';
import './ProfilePage.css';
import { FavoriteRecipeDisplay } from "../../components/FavoriteRecipeDisplay/FavoriteRecipeDisplay";
import { FavoriteButton } from "../../components/FavoriteButton/FavoriteButton";

export const ProfilePage = () => {

  const [storageLikedRecipes, setStorageLikedRecipes] = useState(JSON.parse(localStorage.getItem("cookedAndLiked")!) !== null ? JSON.parse(localStorage.getItem("cookedAndLiked")!) : []);
  const [favoriteRecipes, setFavoriteRecipes] = useState(JSON.parse(localStorage.getItem("favoriteRecipes")!) !== null ? JSON.parse(localStorage.getItem("favoriteRecipes")!) : []);
  const [isFavorite, setIsFavorite] = useState(true);
  const RenderSTCard = (recipe: RecipeFrontST) => (
    <Card
      key={recipe.id}
      recId={recipe.id}
      imgSrc={recipe.image}
      recipeTitle={recipe.title}
      readyInMin={recipe.readyInMinutes}
    />
  );

  const HandleLikedClick = (recipeId: number) => {
    const currentRecipeId = (input: RecipeFrontST) => input.id === recipeId;
    let currentArray = storageLikedRecipes.splice(0);
  
    const indexInStorage: number = currentArray.findIndex(currentRecipeId);
    currentArray.splice(indexInStorage, 1);
  
    localStorage.setItem("cookedAndLiked", JSON.stringify(currentArray));
    setStorageLikedRecipes(currentArray);
  }

  // const HandleFavoriteClick = (recipeId, imgSrc, readyInMin, recipeTitle) => {

  //       try{
            
  //           if (isRecipeInList(favoriteRecipes, recipeId)) {
  //               favoriteRecipes.splice(getRecipeIndexFromArray(favoriteRecipes,recipeId), 1);
  //               localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  //               setIsFavorite(!isFavorite);
  //           } 
  //           else {
  //               var recipeToAdd = { id: recipeId, image: imgSrc, timeToMake: readyInMin, title: recipeTitle };  
  //               // Add the object to the array
  //               favoriteRecipes.push(recipeToAdd);      
  //               // Save the updated array in local storage
  //               localStorage.favoriteRecipes = JSON.stringify(favoriteRecipes);
  //               setIsFavorite(!isFavorite);
  //           }

  //       } catch (error) {

  //       }
  //   }

  // function isRecipeInList(recipes, recipeIdToFind){
  //   var index = recipes.findIndex(recipe => recipe.id === recipeIdToFind);
  //   return index!== -1;
  // }
  // function getRecipeIndexFromArray(recipes, recipeIdToFind){
  //     var index = recipes.findIndex(recipe => recipe.id === recipeIdToFind);
  //     return index;
  // }

  return (
    <div className="profilepage-container">
      <div className="back-btn">
        <BackButton />
      </div>
      <div className="profile-header">
        Profile
      </div>
      <div className="grid-container">
        <div className="likedrecipes">
          <div className="profile-header">
            Liked recipes!
          </div>
          {storageLikedRecipes.length > 0 && storageLikedRecipes.map((recipe: RecipeFrontST) => 
            <div className="liked-recipe-item" key={recipe.id + "-liked"}>
              <div className="liked-recipe-button" onClick={() => HandleLikedClick(recipe.id)}></div>
              {RenderSTCard(recipe)}
            </div>
          )}
        </div>
      </div>
      <div className="profile-header">
        Favorite recipes!
      </div>
      <FavoriteRecipeDisplay favoriteRecipes={favoriteRecipes}></FavoriteRecipeDisplay>
    </div> 
  );

}

// {favoriteRecipes.length>0 && favoriteRecipes.map((recipe) =>
//   <div className="favorite-recipe-item" key={recipe.id}>
//     <FavoriteButton onClick={() => HandleFavoriteClick(recipe.id, recipe.imgSrc, recipe.readyInMin, recipe.recipeTitle)} markAsFavorite={isFavorite}></FavoriteButton>
//     {RenderSTCard(recipe)}
//   </div>
// )}
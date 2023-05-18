
import { useState } from "react";
import Card from '../../components/RecipeCard/Card';
import { RecipeFrontST } from '../../components/Interface/Interface';
import { BackButton } from '../RecipePage/BackButton';
import './ProfilePage.css';

export const ProfilePage = () => {

  const [storageLikedRecipes, setStorageLikedRecipes] = useState(JSON.parse(localStorage.getItem("cookedAndLiked")!) !== null ? JSON.parse(localStorage.getItem("cookedAndLiked")!) : []);

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

    console.log(storageLikedRecipes);
    console.log(currentArray);
  }

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
    </div> 
  );

}


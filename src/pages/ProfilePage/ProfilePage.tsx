import './ProfilePage.css';
import { useState, useEffect, useMemo } from "react";
import Card from '../../components/RecipeCard/Card';
import { RecipeFrontST } from '../../components/Interface/Interface';
import { BackButton } from '../RecipePage/BackButton';
import CommentForm from '../../components/Comment/CommentForm';
import { recipeStore } from '../../components/Stores/likedRecipes';
import { useStore } from 'zustand';

export const ProfilePage = () => {

  // These are used for testing purposes and as a dummy placeholder for now.
  const defaultRecipes: RecipeFrontST[] = useMemo(() => [
    {
      id: 637776,
      title: "Cherry Pancakes for One",
      image: "https://spoonacular.com/recipeImages/637776-556x370.jpg",
      readyInMinutes: 45,
    },
    {
      id: 660697,
      title: "Southern Fried Catfish",
      image: "https://spoonacular.com/recipeImages/660697-556x370.jpg",
      readyInMinutes: 45,
    },
    {
      id: 634091,
      title: "Banana Foster Bread Pudding",
      image: "https://spoonacular.com/recipeImages/634091-556x370.jpg",
      readyInMinutes: 45,
    },
  ], []);

  const [recipes, setRecipes] = useState<RecipeFrontST[]>([]);
  const recipeIds = useStore(recipeStore).recipeIds;

// // The useEffect function will be called every time the component mounts or recipeIds changes
// useEffect(() => {
//   // Map the recipeIds to an array of RecipeFrontST objects
//   const storedRecipes = recipeIds.map((id) => JSON.parse(localStorage.getItem(id) || "{}") as RecipeFrontST);
  
//   if (storedRecipes.length > 0) {
//     setRecipes(storedRecipes);
//   } else {
//     setRecipes(defaultRecipes);
//   }
// }, [recipeIds]);

  // This maps over the liked recipes and displays the cards for them.
  const LikedRecipes = () => {
    return (
      <div >
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            recId={recipe.id}
            recipeTitle={recipe.title}
            imgSrc={recipe.image}
            readyInMin={recipe.readyInMinutes}
          />
        ))}
      </div>
    );
  };

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
            These are your liked recipes!
          </div>
          <div>
            <LikedRecipes />
          </div>
        </div>
        <div className="comments-box">
          <CommentForm/>
        </div>
      </div>
    </div>
  

  );
}

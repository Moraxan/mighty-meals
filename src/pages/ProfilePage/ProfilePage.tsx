import './ProfilePage.css';
import { useState, useEffect, useMemo } from "react";
import Card from '../../components/RecipeCard/Card';
import { RecipeFrontST } from '../../components/Interface/Interface';
import { BackButton } from '../RecipePage/BackButton';

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

  // useEffect checks if there are any recipes in the database. If there are no recipes in the database, the dummy array is used.
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]") as RecipeFrontST[];
    if (storedRecipes.length > 0) {
      setRecipes(storedRecipes);
    } else {
      setRecipes(defaultRecipes);
    }
  }, [defaultRecipes]);

  // This maps over the liked recipes and displays the cards for them.
  const LikedRecipes = () => {
    return (
      <div>
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
         <BackButton/>
        Profile
       

      <div className="likedrecipes">
        <div className="profile-header">
          These are your liked recipes!
        </div>
        <LikedRecipes />
      </div>
    </div>
  );
}

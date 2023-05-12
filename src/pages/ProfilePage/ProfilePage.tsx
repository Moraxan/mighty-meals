import './ProfilePage.css';
import { useState, useEffect, useMemo } from "react";
import Card from '../../components/RecipeCard/Card';
import { RecipeFrontST } from '../../components/Interface/Interface';
import { BackButton } from '../RecipePage/BackButton';
import CommentForm from '../../components/Comment/CommentForm';
import { likedRecipeStore } from '../../components/Stores/likedRecipes';
import { useStore } from 'zustand';

const apiKey = localStorage.getItem("storedApiKey");

export const ProfilePage = () => {

  const [recipes, setRecipes] = useState<RecipeFrontST[]>([]);
  const { recipeIds } = likedRecipeStore();

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await Promise.all(recipeIds.map((id) => 
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
          .then((response) => response.json())
      ));
      const fetchedRecipes = response.map((data: any) => ({
        id: data.id,
        title: data.title,
        image: data.image,
        readyInMinutes: data.readyInMinutes,
      }));
      setRecipes(fetchedRecipes);
    };

    if (recipeIds.length > 0) {
      fetchRecipes();
    }
  }, [recipeIds]);

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
  )
  }


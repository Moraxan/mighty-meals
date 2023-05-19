import heart_yellow from "../../images/heart_yellow.png";
import heart_red from "../../images/heart_red.png";
import { useState} from 'react';
import '../FavoriteButton/FavoriteButton.css';

export function FavoriteButton({favoritedRecipes, recId, imgSrc, readyInMin, recipeTitle, markAsFavorite}){

    const [isFavorite, setIsFavorite] = useState<boolean>(markAsFavorite);
    const [favoriteRecipes, setFavoriteRecipes] = useState(favoritedRecipes);

    function isRecipeInList(recipes, recipeIdToFind){
        var index = recipes.findIndex(recipe => recipe.id === recipeIdToFind);
        return index!== -1;
    }
    function getRecipeIndexFromArray(recipes, recipeIdToFind){
        var index = recipes.findIndex(recipe => recipe.id === recipeIdToFind);
        return index;
    }

    

    const HandleButtonClick = (event) => {
        try{
            const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

            if (isRecipeInList(favoriteRecipes, recId)) {
                favoriteRecipes.splice(getRecipeIndexFromArray(favoriteRecipes,recId), 1);
                localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
                // setFavoriteRecipes(favoriteRecipes);
                setIsFavorite(!isFavorite);
            } 
            else {
                var recipeToAdd = { id: recId, image: imgSrc, timeToMake: readyInMin, title: recipeTitle };  
                // Add the object to the array
                favoriteRecipes.push(recipeToAdd);      
                // Save the updated array in local storage
                localStorage.favoriteRecipes = JSON.stringify(favoriteRecipes);
                setIsFavorite(!isFavorite);
            }

        } catch (error) {

        }
    }

    return (
        <>
            <button className="favorite-button">
                <img src={isFavorite? heart_red : heart_yellow} alt="<3" onClick={HandleButtonClick} className="favorite-image"/>
            </button>

        </>
    );

}
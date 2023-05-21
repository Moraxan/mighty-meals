import heart_yellow from "../../images/heart_yellow.png";
import heart_red from "../../images/heart_red.png";
import '../FavoriteButton/FavoriteButton.css';
import { RecipeFrontST } from "../Interface/Interface";

//@ts-ignore
export function FavoriteButton({recId, imgSrc, readyInMin, recipeTitle, setFavoriteRecipes, isFavorite, setIsFavorite}){

    function isRecipeInList(recipes: RecipeFrontST[], recipeIdToFind: number){
        var index = recipes.findIndex(recipe => recipe.id === recipeIdToFind);
        return index!== -1;
    }
    function getRecipeIndexFromArray(recipes: RecipeFrontST[], recipeIdToFind: number){
        var index = recipes.findIndex(recipe => recipe.id === recipeIdToFind);
        return index;
    }
    

    const HandleButtonClick = () => {
        try{
            const tempFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')!) || [];

            if (isRecipeInList(tempFavoriteRecipes, recId)) {
                 //remove object from array. Calls a function that returns the index of the object to remove.
                 tempFavoriteRecipes.splice(getRecipeIndexFromArray(tempFavoriteRecipes,recId), 1);
                localStorage.setItem('favoriteRecipes', JSON.stringify(tempFavoriteRecipes));

                // setFavoriteRecipes(tempFavoriteRecipes);
                setIsFavorite(!isFavorite);
                setFavoriteRecipes(tempFavoriteRecipes);
            } 
            else {
                var recipeToAdd = { id: recId, image: imgSrc, timeToMake: readyInMin, title: recipeTitle };  
                // Add the object to the array
                tempFavoriteRecipes.push(recipeToAdd);      
                // Save the updated array in local storage
                localStorage.favoriteRecipes = JSON.stringify(tempFavoriteRecipes);
                
                // setFavoriteRecipes(tempFavoriteRecipes);
                setIsFavorite(!isFavorite);
                setFavoriteRecipes(tempFavoriteRecipes);
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
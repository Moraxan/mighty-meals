import emptyheart from "../../images/emptyheart.png";
import heart from "../../images/heart.png";
import React, { useState } from 'react';

export  function FavoriteButton(props){
    
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const handleButtonClick (event) => {
    
        try {

            const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

            var index = favoriteRecipes.findIndex(recipe => recipe.id === props.recId);
            if (index !== -1) {
                favoriteRecipes.splice(index, 1);
                localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
                setIsFavorite(!isFavorite);
            } 
            else {
                var recipeToAdd = { id: props.recId, image: props.imgSrc, timeToMake: props.readyInMin, title: "titel" };  
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
                <img src={isFavorite? heart : emptyheart} alt="<3" onClick={handleButtonClick}/>
            </button>

        </>
    );

}
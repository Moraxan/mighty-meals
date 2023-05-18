import checkedImg from "../../images/checked.png";
import uncheckedImg from "../../images/unchecked.png";
import dislikeButton from "../../images/dislike_btn.png";
import dislikeButtonSelected from "../../images/dislike_btn_selected.png";
import likeButton from "../../images/like_btn.png";
import likeButtonSelected from "../../images/like_btn_selected.png";
import "./Directions.css";
import { useState } from "react";
import tastyTriumph from "../../sounds/tasty_triumph.mp3";
import tastelessTerror from "../../sounds/tasteless_terror.mp3";
import { RecipeFrontST } from "../../components/Interface/Interface";

//@ts-ignore
export const Directions = ({ recipeObject }) => {
  const [directionsState, setDirectionsState] = useState(recipeObject.analyzedInstructions);

  //Takes in likes recipes from local storage, if empty / null state is set to [].
  //Takes in disliked recipes from local storage, if empty / null state is set to [].
  const [storageLikedRecipes, setStorageLikedRecipes] = useState(JSON.parse(localStorage.getItem("cookedAndLiked")!) !== null ? JSON.parse(localStorage.getItem("cookedAndLiked")!) : []);
  const [storageDisikedRecipes, setStorageDislikedRecipes] = useState(JSON.parse(localStorage.getItem("cookedAndDisliked")!) !== null ? JSON.parse(localStorage.getItem("cookedAndDisliked")!) : []);

  //Checkes if current recipe is found in storage, if found below boolean is set to true so we know it is already liked when rendering.
  let recipeFound: boolean = false;
  if(storageLikedRecipes.length > 0){
    if(storageLikedRecipes.some((recipe: RecipeFrontST) => recipe.id === recipeObject.id)){
      recipeFound = true;
    } else{
      recipeFound = false;
    }
  }
  const [recipeLiked, setRecipeLiked] = useState(recipeFound);


  let dislikedRecipeFound: boolean = false;
  if(storageDisikedRecipes.length > 0){
    if(storageDisikedRecipes.some((recipeId: number) => recipeId === recipeObject.id)){
      dislikedRecipeFound = true;
    } else{
      dislikedRecipeFound = false;
    }
  }
  const [recipeDisliked, setRecipeDisliked] = useState(dislikedRecipeFound);

//Checks if there are no directions available. Displays message to the user.
  if (!directionsState || directionsState.length === 0) {
    return (
      <div className="directions-container">
        <div className="directions-box">
          <p>DIRECTIONS</p>
        </div>
        <p>No directions available</p>
      </div>
    );
  }

//This function handles the click on the image. If the image is checked, it will uncheck it. If it is unchecked, it will check it.

  //@ts-ignore
  const handleImageClick = (step) => {
    //@ts-ignore
    const newSteps = directionsState[0].steps.map((s) =>
      s.number === step.number
        ? {
            ...s,
            checked: !s.checked,
//This is the code sets a truncated flag to the s.checked
            truncated: s.checked ? false : true,
          }
        : s
    );
    setDirectionsState([{ ...directionsState[0], steps: newSteps }]);
  };

//This function handles the click on the like button. It adds the recipe to the Zustand Store for access in the profile page mainly
//Also dims the button on a click to signal to the user that the button has been clicked
//@ts-ignore

const handleButtonClick = (event: MouseEvent, buttonId: string): void => {
  const audio = new Audio(); // Create an Audio object

  try {
    if (buttonId === "like") {
        audio.src = tastyTriumph; // Set the source of the audio file

      if(!recipeLiked){
        if(recipeDisliked){
          RemoveDislikedRecipeFromStorage();
          AddLikedRecipeToStorage();
        } else{
          AddLikedRecipeToStorage();
        }
      } else{
        RemoveLikedRecipeFromStorage();
      }

    } else if (buttonId === "dislike") {
      audio.src = tastelessTerror; // Set the source of the audio file

      if(recipeLiked){
        RemoveLikedRecipeFromStorage();
        AddDislikedRecipeToStorage();
      } else{
        if(recipeDisliked){
          RemoveDislikedRecipeFromStorage();
        } else{
          AddDislikedRecipeToStorage();
        }
      }

    } else {
      throw new Error("Unknown button ID");
    }
  } catch (error) {
    //@ts-ignore
    alert(error.message);
  }

  audio.play(); // Play the audio file
};

const AddLikedRecipeToStorage = () => {
  const newRecipe: RecipeFrontST = {
    id: recipeObject.id,
    title: recipeObject.title,
    image: recipeObject.image,
    readyInMinutes: recipeObject.readyInMinutes,
  }

  let currentArray = storageLikedRecipes;
  currentArray.push(newRecipe);

  localStorage.setItem("cookedAndLiked", JSON.stringify(currentArray));

  setStorageLikedRecipes(currentArray);
  setRecipeLiked(true);
}

const AddDislikedRecipeToStorage = () => {
  let currentArray = storageDisikedRecipes;
  currentArray.push(recipeObject.id);

  localStorage.setItem("cookedAndDisliked", JSON.stringify(currentArray));

  setStorageDislikedRecipes(currentArray);
  setRecipeDisliked(true);
}

const RemoveLikedRecipeFromStorage = () => {
  const currentRecipeId = (input: RecipeFrontST) => input.id === recipeObject.id;
  let currentArray = storageLikedRecipes;

  const indexInStorage: number = currentArray.findIndex(currentRecipeId);

  currentArray.splice(indexInStorage, 1);

  localStorage.setItem("cookedAndLiked", JSON.stringify(currentArray));

  setStorageLikedRecipes(currentArray);
  setRecipeLiked(false);
}

const RemoveDislikedRecipeFromStorage = () => {
  const currentRecipeId = (input: RecipeFrontST) => input.id === recipeObject.id;
  let currentArray = storageDisikedRecipes;

  const indexInStorage: number = currentArray.findIndex(currentRecipeId);

  currentArray.splice(indexInStorage, 1);

  localStorage.setItem("cookedAndDisliked", JSON.stringify(currentArray));

  setStorageDislikedRecipes(currentArray);
  setRecipeDisliked(false);
}

  return (
    <div className="directions-container">
      <div className="title-buttons-container">
        <div className="directions-box">directions</div>
        <div className="directions-buttons">
          {/*//@ts-ignore*/}
          <button id="like-button" onClick={(event) => handleButtonClick(event, "like")}>
            <img src={recipeLiked ? likeButtonSelected : likeButton} alt="like"/>
          </button>
          {/*//@ts-ignore*/}
          <button id="dislike-button" onClick={(event) => handleButtonClick(event, "dislike")}>
            <img src={recipeDisliked ? dislikeButtonSelected: dislikeButton} alt="dislike"/>
          </button>
        </div>
      </div>
      

      <br />
      <ul className="directions-list">
        {/*//@ts-ignore*/}
        {directionsState[0].steps.map((step) => (
          <li key={step.number}>
            <button className="image-button">
              <img
                src={step.checked ? checkedImg : uncheckedImg}
                alt={step.checked ? "Checked" : "Unchecked"}
                onClick={() => handleImageClick(step)}
                className="directions-image"
              />

              <span className={`step-text ${step.checked ? 'checked' : ''}`}>
                {/* Here the text is truncated to 20 chars if the truncated flag is true */}
                {step.truncated ? `${step.step.slice(0, 20)}...` : step.step}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

};

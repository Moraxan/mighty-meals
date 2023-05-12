import checkedImg from "../../images/checked.png";
import uncheckedImg from "../../images/unchecked.png";
import dislikeButton from "../../images/dislike_btn.png";
import likeButton from "../../images/like_btn.png";
import {likedRecipeStore} from "../../components/Stores/likedRecipes";
import "./Directions.css";
import { useState } from "react";

//@ts-ignore
export const Directions = ({ directions, recipeId }) => {
  const [directionsState, setDirectionsState] = useState(directions);

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
  const handleButtonClick = (recipeId: string) => {
    likedRecipeStore.getState().addRecipeId(recipeId);
  }

  return (
    <div className="directions-container">
        <div className="title-buttons-container">
          <h2 className="directions-box">directions</h2>
          <div className="directions-buttons">
          <img src={likeButton} onClick={() => handleButtonClick(recipeId)} alt="like"/>
          <img src={dislikeButton} alt="dislike"/>
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

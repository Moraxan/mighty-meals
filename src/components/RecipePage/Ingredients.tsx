import "./Ingredients.css";
import { useState } from "react";
import decreaseBtn from "../../images/decreaseBtn.png";
import increaseBtn from "../../images/increaseBtn.png";

//@ts-ignore
export const Ingredients = ({ ingredients, noOfServings }) => {
  const [servings, setServings] = useState(noOfServings);

  //@ts-ignore
  const boldNumbers = (str) => {
    //regex filtering out all integers and fractions to make them bold/strong
    const pattern = /(\d+|\d+\s*(?:\/\s*\d+)?)/g;

    //@ts-ignore
    // Replaces matches with bold/strong HTML tags
    return str.replace(pattern, (match) => `<strong>${match}</strong>`);
  };

  //logic for decreasing portion size
  const handleDecreaseButtonClick = () => {
    // for testing purposes
    setServings(() => servings - 1)
    console.log("handled decrease!");
  };

  //logic for increasing portion size
  const handleIncreaseButtonClick = () => {
    // for testing purposes
    setServings(() => servings + 1)
    console.log("handled increase!");
  };

  return (
    <div className="ingredients-container">
      <div className="ingredients-box">
        <p>ingredients</p>
      </div>
      <br />
      <ul>
        {ingredients.map((ingredient: string, index: number) => {
          // @ts-ignore
          const [amount, ...rest] = ingredient.original.split(" ");
          const formattedIngredient = boldNumbers(
            `${amount} ${rest.join(" ")}`
          );
          return (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: formattedIngredient }}
            />
          );
        })}
      </ul>
      <div className="servings-container">
        <button className="decrease-btn">
          <img
            src={decreaseBtn}
            alt="Decrease button"
            onClick={() => handleDecreaseButtonClick()}
          />
        </button>
        <p>{servings} servings</p>
        <button className="increase-btn">
          <img
            src={increaseBtn}
            alt="Increase button"
            onClick={() => handleIncreaseButtonClick()}
          />
        </button>
      </div>
    </div>
  );
};

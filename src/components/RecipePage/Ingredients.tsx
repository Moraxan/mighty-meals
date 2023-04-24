import "./Ingredients.css";
import { useState } from 'react';
import decreaseBtn from '../../images/decreaseBtn.png';
import increaseBtn from '../../images/increaseBtn.png';


//regex filtering out all integers and fractions to make them bold/strong
const boldNumbers = (str) => {
   const pattern = /(\d+|\d+\s*(?:\/\s*\d+)?)/g;

  // Replaces matches with bold/strong HTML tags
  return str.replace(pattern, (match) => `<strong>${match}</strong>`);
};

const handleDecreaseButtonClick = () => {
  //logic for decreasing portion size here
}

const handleIncreseButtonClick = () => {
  //logic for increasing portion size here
}



export const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients-container">
      <div className="ingredients-box">
        <p>ingredients</p>
      </div>
      <br />
      <ul>
        {ingredients.map((ingredient: string, index: number) => {
          const [amount, ...rest] = ingredient.original.split(" ");
          const formattedIngredient = boldNumbers(
            `${amount} ${rest.join(" ")}`
          );
          return <li key={index} dangerouslySetInnerHTML={{ __html: formattedIngredient }}/>;
        })}
      </ul>
      <div className="servings-container">
        <button className="decrease-btn">
          <img src={decreaseBtn} alt="Decrease button" />
        </button>
        <p>4 servings</p>
        <button className="increase-btn">
          <img src={increaseBtn} alt="Increase button" />
        </button>
      </div>

    </div>
  );
};
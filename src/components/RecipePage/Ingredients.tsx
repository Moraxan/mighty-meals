import "./Ingredients.css";
import { useState, useEffect } from "react";
import decreaseBtn from "../../images/decreaseBtn.png";
import increaseBtn from "../../images/increaseBtn.png";

//@ts-ignore
export const Ingredients = ({ ingredients, noOfServings }) => {

  const [servings, setServings] = useState(noOfServings);
  const [ingredientAmounts, setIngredientAmounts] = useState([]);
  const [ingredientUnits, setIngredientUnits] = useState([]);
  const ingredientNames = ingredients.map((ingredient: any) => ingredient.originalName);

  useEffect(() => {
    const amounts = ingredients.map((ingredient: any) => {
      return ingredient.measures.metric.amount;
    });
    setIngredientAmounts(amounts);

    const units = ingredients.map((ingredient: any) => {
      return ingredient.measures.metric.unitShort;
    });
    setIngredientUnits(units);
  }, [ingredients]);

  //logic for decreasing portion size
  const handleDecreaseButtonClick = () => {
    if (servings === 1) return;
    //@ts-ignore
    setServings((prevServings) => prevServings - 1);
  };

  //logic for increasing portion size
  const handleIncreaseButtonClick = () => {
    //@ts-ignore
    setServings((prevServings) => prevServings + 1);
  };

  return (
    <div className="ingredients-container">
      <div className="ingredients-box">ingredients</div>
      <div className="ingredients-list">
        <ul>
          {ingredients.map((ingredient: any, index: number) => {
            return (
              <li key={index}>
                <strong>
                  {/* if amount contains decimal value then display decimal, otherwise display without decimal*/}
                {ingredientAmounts[index] % 1 !== 0
                  ? ((ingredientAmounts[index] * servings) / noOfServings).toFixed(1)
                  : (ingredientAmounts[index] * servings) / noOfServings}
                </strong>
                {" "}
                {ingredientUnits[index]}
                {" "}
                {ingredientNames[index]}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="servings-container">
        <button className="decrease-btn">
          <img
            src={decreaseBtn}
            alt="Decrease button"
            onClick={() => handleDecreaseButtonClick()}
          />
        </button>
        {servings == 1 ? <p>{servings} serving</p> : <p>{servings} servings</p>}
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

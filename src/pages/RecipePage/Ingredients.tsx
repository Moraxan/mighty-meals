import "./Ingredients.css";
import { useState, useEffect } from "react";
import decreaseBtn from "../../images/decreaseBtn.png";
import increaseBtn from "../../images/increaseBtn.png";

function AdjustMeasurment(amount: number, unit: string) {

  if (unit === "ml") {
    if (amount >= 1000) {
      unit = "L";
      amount /= 1000;
    } else if (amount >= 100 && amount < 1000) {
      unit = "dl";
      amount /= 100;
    }
  }
  if (unit === 'g'){
    if (amount >= 1000) {
      unit = 'kg',
      amount /= 1000;
    } else if(amount >= 100 && amount < 1000){
      unit = 'hg',
      amount /= 100;
    }
  }
  
  amount = amount < 0.1 ? 0.1 : amount;

  return { adjustedAmount: amount, adjustedUnit: unit };
}

//@ts-ignore
export const Ingredients = ({ ingredients, noOfServings }) => {
  const [servings, setServings] = useState(noOfServings);
  const [ingredientAmounts, setIngredientAmounts] = useState([]);
  const [ingredientUnits, setIngredientUnits] = useState([]);
  const ingredientNames = ingredients.map(
    (ingredient: any) => ingredient.originalName
  );

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
          {ingredientAmounts.map((amount: number, index: number) => {
            const calculatedAmount = (amount * servings) / noOfServings;

            const { adjustedAmount, adjustedUnit } = AdjustMeasurment(calculatedAmount,ingredientUnits[index]);

            return (
              <li key={index}>
                <strong>
                  {adjustedAmount % 1 !== 0 ? adjustedAmount.toFixed(1) : adjustedAmount}
                </strong>
                  {" "}
                  {adjustedUnit}
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
        {servings === 1 ? (
          <p>{servings} serving</p>
        ) : (
          <p>{servings} servings</p>
        )}
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

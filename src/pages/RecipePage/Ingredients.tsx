import "./Ingredients.css";
import { useState, useEffect } from "react";
import decreaseBtn from "../../images/decreaseBtn.png";
import increaseBtn from "../../images/increaseBtn.png";

function AdjustMeasurment(amount: any, unit: string) {

  if (unit === "ml") {
    amount = amount >= 1000 ? (unit = "l", amount / 1000) : (amount >= 100 && amount < 1000) ? (unit = "dl", amount / 100) : amount;
  }
  
  if (unit === "g") {
    amount = amount >= 1000 ? (unit = "kg", amount / 1000) : (amount >= 100 && amount < 1000) ? (unit = "hg", amount / 100) : amount;
  }
  amount = amount < 0.1 ? 0.1 : amount;

  //if first decimal of amount = 0, round down to integer (quick fix to solve bug) else shorten to display 1 decimal point
  amount = Number(amount.toFixed(1).split(".")[1][0]) === 0 ? Math.round(amount) : amount.toFixed(1);

  return { adjustedAmount: amount, adjustedUnit: unit };
}

//@ts-ignore
export const Ingredients = ({ ingredients, noOfServings }) => {
  const [servings, setServings] = useState(noOfServings);
  const [ingredientAmounts, setIngredientAmounts] = useState([]);
  const [ingredientUnits, setIngredientUnits] = useState([]);
  const ingredientNames = ingredients.map((ingredient: any) => ingredient.originalName);

  useEffect(() => {

    
    const amounts = ingredients.map((ingredient: any) => {
      const amount = ingredient.measures.metric.amount;
      return amount;
    });
    setIngredientAmounts(amounts);

    const units = ingredients.map((ingredient: any) => {
      const unit = ingredient.measures.metric.unitShort;
      return unit;
    });
    setIngredientUnits(units);
  }, [ingredients]);

  const handleDecreaseButtonClick = () => {
    if (servings === 1) return;
    //@ts-ignore
    setServings((prevServings) => prevServings - 1);
  };

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
                  {adjustedAmount}
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

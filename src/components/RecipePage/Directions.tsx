import checkedImg from "../../images/checked.png";
import uncheckedImg from "../../images/unchecked.png";
import "./Directions.css";
import { useState } from "react";

export const Directions = ({ directions }) => {
  const [directionsState, setDirectionsState] = useState(directions);

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

  const handleImageClick = (step) => {
    const newSteps = directionsState[0].steps.map((s) =>
      s.number === step.number ? { ...s, checked: !s.checked } : s
    );
    setDirectionsState([{ ...directionsState[0], steps: newSteps }]);
  };

  return (
    <div className="directions-container">
      <div className="directions-box">
        <p>DIRECTIONS</p>
      </div>
      <br />
      <ul className="directions-list">
        {directionsState[0].steps.map((step) => (
          <li key={step.number}>
            <button className="image-button">
              <img
                src={step.checked ? checkedImg : uncheckedImg}
                alt={step.checked ? "Checked" : "Unchecked"}
                onClick={() => handleImageClick(step)}
                className="directions-image"
              />
              <span>{step.step}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

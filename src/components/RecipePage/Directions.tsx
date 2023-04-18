import "./Directions.css";

export const Directions = ({ directions }) => {
  if (!directions || directions.length === 0) {
    return (
      <div className="directions-container">
        <div className="directions-box">
          <p>DIRECTIONS</p>
        </div>
        <p>No directions available</p>
      </div>
    );
  }

  return (
    <div className="directions-container">
      <div className="directions-box">
        <p>DIRECTIONS</p>
      </div>
      <br />
      <ul className="directions-list">
        {directions[0].steps.map((step) => (
          <li key={step.number}>
            <label>
              <input type="checkbox" />
              <span>{step.step}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
  
  
};

  
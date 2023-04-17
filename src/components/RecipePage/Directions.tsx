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
      <ol>
        {directions[0].steps.map((step) => (
          <li key={step.number}>
            <label>
              <input type="checkbox" />
              {step.step}
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
};

  
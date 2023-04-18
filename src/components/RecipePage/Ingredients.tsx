import "./Ingredients.css";

export const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients-container">
      <div className="ingredients-box">
        <p>INGREDIENTS</p>
      </div>
      <br />
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
};



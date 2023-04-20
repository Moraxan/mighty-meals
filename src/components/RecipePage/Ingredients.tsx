import "./Ingredients.css";

export const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients-container">
      <div className="ingredients-box">
        <p>INGREDIENTS</p>
      </div>
      <br />
      <ul>
        {ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
};



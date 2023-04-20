import "./Ingredients.css";

//@ts-ignore
export const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients-container">
      <div className="ingredients-box">
        <p>ingredients</p>
      </div>
      <br />
      <ul>
        {/* @ts-ignore */}
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
};
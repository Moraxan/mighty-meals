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
        {ingredients.map((ingredient) => {
          // splits the amount of ingredients from name of the ingredient and makes the amount bold
          const [amount, ...rest] = ingredient.original.split(" ");
          return (
            <li key={ingredient.id}>
              <span>
                <strong>{amount}</strong> {rest.join(" ")}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
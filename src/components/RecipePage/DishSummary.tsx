export const DishSummary = ({ recipeData }) => (
  <div className="dish-summary-container">
    <h2>{recipeData.title}</h2>
    <p>Ready in {recipeData.readyInMinutes} minutes</p>
    <p>Serves {recipeData.servings}</p>
  </div>
);



import { useEffect, useState } from 'react';
import './RecipePage.css';

export const RecipePage = () => {
  const [recipeId, setRecipeId] = useState(660697);
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(`recipeFetch_${recipeId}`));
    if (storedData) {
      setRecipeData(storedData);
    } else {
      const apiKey = '62351b97ce5e483ab975407ba6e4bdb9';
      const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error fetching recipe');
          }
        })
        .then((recipeData) => {
          localStorage.setItem(`recipeFetch_${recipeId}`, JSON.stringify(recipeData));
          setRecipeData(recipeData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [recipeId]);

  const handleSwitchRecipe = () => {
    if (recipeId === 660697) {
      setRecipeId(634091);
    } else {
      setRecipeId(660697);
    }
  };

  return (
    <>
      <button onClick={handleSwitchRecipe}>Switch Recipe</button>
      {recipeData && (
        <div className="recipe-container">
          <div className="dish-image-container">
            <img src={recipeData.image} alt="Your dish" />
          </div>
          <div className="ingredients-directions-container">
            <div className="ingredients-body">
              <div className="ingredients-container">
                <div className="ingredients-box">
                  <p>INGREDIENTS</p>
                </div>
                <br />
                <ul>
                  {recipeData.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="directions-container">
              <div className="directions-box">
                <p>DIRECTIONS</p>
              </div>
              <br />
              <ul>
                {recipeData.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>
                    <label>
                      <input type="checkbox" />
                      {step.step}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import { useEffect, useState } from 'react';
import './RecipePage.css';

export const RecipePage = () => {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('recipeFetch'));
    if (storedData) {
      setRecipeData(storedData);
    } else {
      const receivedId = 660697;
      const apiKey = '62351b97ce5e483ab975407ba6e4bdb9';
      const url = `https://api.spoonacular.com/recipes/${receivedId}/information?apiKey=${apiKey}`;

      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error fetching recipe');
          }
        })
        .then((recipeData) => {
          localStorage.setItem('recipeFetch', JSON.stringify(recipeData));
          setRecipeData(recipeData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="ingredients-outer">
      
        <div className="ingredients-box">
          <p>INGREDIENTS</p>
        </div> 
        <div className="ingredients-body">
          <br />
          {recipeData ? (
            <ul>
              {recipeData.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          ) : (
            <p>Loading recipe data...</p>
          )}
        </div>
    </div>
   
  );
}

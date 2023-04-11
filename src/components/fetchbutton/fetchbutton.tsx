import { useState } from 'react';

export const FetchButton = ({ ingredientChoices, setRecipes }) => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
  const tvmhHits = 4;
  const apiString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodeURIComponent(
    ingredientChoices.join(",")
  )}&ranking=2&ignorePantry=true&number=${tvmhHits}`;

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
    localStorage.setItem('apiKey', event.target.value);
  };

  const handleClick = () => {
    fetch(apiString)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch(() => alert("Cannot connect, check your API key."));
      console.log(apiString)
  };

  return (
    <div>
      <label htmlFor="apiKey">API Key:</label>
      <input type="text" id="apiKey" value={apiKey} onChange={handleApiKeyChange} />
      <button onClick={handleClick}>GO!</button>
    </div>
  );
};

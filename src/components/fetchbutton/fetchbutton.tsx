import { useState } from 'react';

//Gives the component 2 props which can be accessed.
export function FetchButton({ ingredientChoices, setRecipes }) {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
  const tvmhHits = 4;
  const apiString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodeURIComponent(
    ingredientChoices.join(",")
  )}&ranking=2&ignorePantry=true&number=${tvmhHits}`;

  //Lets us store our own API-keys for debugging puropses.
  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
    localStorage.setItem('apiKey', event.target.value);
  };

  //Get's the generated API-string and fetches it from the API.
  const handleClick = () => {
    fetch(apiString)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch(() => alert("Cannot connect, check your API key."));
      console.log(apiString)
  };

  //Ths html for the component. The API-key input could be deleted later on or handled by another component.
  return (
    <div>
      <label htmlFor="apiKey">API Key:</label>
      <input type="text" id="apiKey" value={apiKey} onChange={handleApiKeyChange} />
      <button onClick={handleClick}>GO!</button>
    </div>
  );
}


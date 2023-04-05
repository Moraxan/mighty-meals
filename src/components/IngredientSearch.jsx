import React, { useState, useEffect } from "react";

const IngredientSearch = () => {
  const [ingredientArray, setIngredientArray] = useState([]);
  const [ingredientChoices, setIngredientChoices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./src/components/commonIngredients.csv")
      .then((rawData) => rawData.text())
      .then((data) => {
        const ingrArr = data.split("\n");
        console.log("Data loaded successfully:", ingrArr);
        setIngredientArray(ingrArr);
      });
  }, []);

  function handleInputChange(event) {
    const userData = event.target.value;
    setSearchText(userData);

    if (userData) {
      const filteredArray = ingredientArray.filter((data) =>
        data.toLowerCase().startsWith(userData.toLowerCase())
      );
      const suggestionsList = filteredArray.map((data, index) => (
        <li
          key={index}
          onClick={() => handleSelectFromList(data.toLowerCase())}
        >
          {data.toLowerCase()}
        </li>
      ));
      setSuggestions(suggestionsList);
    } else {
      setSuggestions([]);
    }
  }

  function handleSelectFromList(userData) {
    if (!ingredientChoices.includes(userData)) {
      setIngredientChoices([...ingredientChoices, userData]);
    } else {
      const updatedChoices = ingredientChoices.filter(
        (choice) => choice !== userData
      );
      setIngredientChoices(updatedChoices);
    }
  }

  function handleClearIngredients() {
    setIngredientChoices([]);
    setSelectedIngredients("");
  }

  function getSelectedIngredients() {
    return ingredientChoices.map((choice) => choice.toLowerCase()).join(", ");
  }

  function handleTvmhBtnClick() {
    const apiKey = "f0486ec7f61543e19771bc59bf1750b7";
    const tvmhHits = 4;
    const apiString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodeURIComponent(
      ingredientChoices.join(",")
    )}&ranking=2&ignorePantry=true&number=${tvmhHits}`;

    console.log(encodeURI(apiString));

    fetch(apiString)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch(() => alert("Cannot connect, check your API key."));
  }

  return (
    <div>
      <div className="search-input">
        <input type="text" value={searchText} onChange={handleInputChange} />
        <ul className="autocom-box">{suggestions}</ul>
      </div>
      <div className="selected-ingredients">
        <span id="selectedIngredients">{getSelectedIngredients()}</span>
        <button className="clear-ingredients" onClick={handleClearIngredients}>
          Clear
        </button>
        <button id="tvmhBtn" onClick={handleTvmhBtnClick}>
          Search Recipes
        </button>
      </div>
      <div id="recipeResults">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IngredientSearch;

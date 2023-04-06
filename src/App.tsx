import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchIngredients from './components/searchingredientsbar/SearchIngredients'
import FetchButton from './components/fetchbutton/fetchbutton'

function App() {
  const [ingredientChoices, setIngredientChoices] = useState([]);

  const handleIngredientSelection = (selectedIngredients) => {
    setIngredientChoices(selectedIngredients);
  };

  const handleRecipesUpdate = (updatedRecipes) => {
    setRecipes(updatedRecipes);
  };

  return (
    <div>
      <SearchIngredients onIngredientSelection={handleIngredientSelection} />
      <FetchButton ingredientChoices={ingredientChoices} onRecipesUpdate={handleRecipesUpdate} />
      {/* Render the recipes here */}
    </div>
  );
}


export default App

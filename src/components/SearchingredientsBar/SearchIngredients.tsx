import { useEffect, useState } from 'react';
import './SearchIngredients.css';

// Define the SearchIngredients function
function SearchIngredients() {
  // Declare state variables using the useState hook
  const [ingredientArray, setIngredientArray] = useState<string[]>([]);
  const [ingredientChoices, setIngredientChoices] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Use the useEffect hook to fetch the CSV file and update the ingredientArray state variable
  useEffect(() => {
    fetch('./src/components/SearchingredientsBar/commonIngredients.csv')
      .then(response => response.text())
      .then(data => {
        const ingrArr = data.split('\r\n');
        setIngredientArray(ingrArr);
      });
  }, []);

  // Define the handleInputChange function to handle changes in the search box
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userData = event.target.value;
    setSearchTerm(userData);

    const emptyArray = userData
      ? ingredientArray.filter(data => data.toLowerCase().startsWith(userData.toLowerCase()))
      : [];

    setSuggestions(emptyArray);
  };

  // Define the handleSelectFromList function to handle selecting items from the suggestion list
  function handleSelectFromList(element: HTMLElement) {
    const selectUserData = element.textContent?.toLowerCase() ?? '';
    const updatedChoices = selectUserData && ingredientChoices.includes(selectUserData)
      ? ingredientChoices.filter(choice => choice !== selectUserData)
      : [...ingredientChoices, selectUserData];
    setIngredientChoices(updatedChoices);
    setSearchTerm('');
    setSuggestions([]);
  }

  // Define the handleClearIngredients function to clear the ingredientChoices state variable
  const handleClearIngredients = () => {
    setIngredientChoices([]);
    setSearchTerm('');
    setSuggestions([]);
  };

  // Define the selectionFilter function to convert the ingredientChoices array to a string with comma-separated values
  const selectionFilter = (choices: string[]) => choices.join(', ');

  // Render the component
  return (
    <div className="search-input">
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <ul className="autocom-box">
        {/* suggestion.slice(0,10) makes the list only display a maximum of 10 results. */}
        {suggestions.slice(0, 10).map((data, index) => (
          <li key={index} onClick={(event) => handleSelectFromList(event.currentTarget)}>
            {data.toLowerCase()}
          </li>
        ))}
      </ul>
      <button className="clear-ingredients" onClick={handleClearIngredients}>Clear</button>
      <p id="selectedIngredients">{selectionFilter(ingredientChoices)}</p>
    </div>
  );
}

// Export the SearchIngredients function as the default export
export default SearchIngredients;



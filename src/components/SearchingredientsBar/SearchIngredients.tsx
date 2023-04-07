import { useEffect, useState } from 'react';
import './SearchIngredients.css';

// Define the SearchIngredients function. Also gives it the setIngredientChoices prop. That can then be used by other components, as the fetch button.
export function SearchIngredients({ setIngredientChoices }) {
  // Declare state variables using the useState hook
  const [ingredientArray, setIngredientArray] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Use the useEffect hook to fetch the CSV file and update the ingredientArray state variable
  useEffect(() => {
    fetch('./src/components/searchingredientsbar/commonIngredients.csv')
      .then(response => response.text())
      .then(data => {
        const ingrArr = data.split('\r\n');
        setIngredientArray(ingrArr);
      });
  }, []);

  // Define the handleInputChange function to handle changes in the search box
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const userData = event.target.value;
    setSearchTerm(userData);

    const emptyArray = userData
      ? ingredientArray.filter(data => data.toLowerCase().startsWith(userData.toLowerCase()))
      : [];

    setSuggestions(emptyArray);
  }

  // Define the handleSelectFromList function to handle selecting items from the suggestion list
  function handleSelectFromList(element: HTMLElement) {
    const selectUserData = element.textContent?.toLowerCase() ?? '';
    const updatedChoices = selectUserData && setIngredientChoices((choices: string[]) =>
      choices.includes(selectUserData)
        ? choices.filter(choice => choice !== selectUserData)
        : [...choices, selectUserData]
    );
    setSearchTerm('');
    setSuggestions([]);
  }

  // Define the handleClearIngredients function to clear the ingredientChoices state variable
  function handleClearIngredients() {
    setIngredientChoices([]);
    setSearchTerm('');
    setSuggestions([]);
  }
  
  // Define the selectionFilter function to convert the ingredientChoices array to a string with comma-separated values
  function selectionFilter(choices: string[]): string {
    if (Array.isArray(choices)) {
      return choices.join(', ');
    } else {
      return '';
    }
  }
  
  
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
      <p id="selectedIngredients">{selectionFilter(setIngredientChoices)}</p>
    </div>
  );
}

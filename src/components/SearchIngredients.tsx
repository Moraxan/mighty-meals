import { useEffect, useState } from 'react';
import './SearchIngredients.css';

const SearchIngredients = () => {
  const [ingredientArray, setIngredientArray] = useState<string[]>([]);
  const [ingredientChoices, setIngredientChoices] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

//This fetches the .csv. It reads the CSV and the response.text method parses it to text strings. The data.split breaks every row and tosses it into the setIngredientArray.
  useEffect(() => {
    fetch('./src/components/commonIngredients.csv')
      .then(response => response.text())
      .then(data => {
        const ingrArr = data.split('\r\n');
        setIngredientArray(ingrArr);
      });
  }, []);
//This handles input into the searchbox and updates the the list to match the chars typed by the user
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userData = event.target.value;
    setSearchTerm(userData);

    const emptyArray = userData
      ? ingredientArray.filter(data => data.toLowerCase().startsWith(userData.toLowerCase()))
      : [];

    setSuggestions(emptyArray);
  };
//This does what it says. It takes care of the items selected from the <ul> and stores it in the ingredientChoices array. const [ingredientChoices, setIngredientChoices] = useState<string[]>([]);
function handleSelectFromList(element: HTMLElement) {
  const selectUserData = element.textContent?.toLowerCase() ?? '';
  const updatedChoices = selectUserData && ingredientChoices.includes(selectUserData)
    ? ingredientChoices.filter(choice => choice !== selectUserData)
    : [...ingredientChoices, selectUserData];
  setIngredientChoices(updatedChoices);
  setSearchTerm('');
  setSuggestions([]);
}
//This clears the ingredients array
  const handleClearIngredients = () => {
    setIngredientChoices([]);
    setSearchTerm('');
    setSuggestions([]);
  };
//This is my array of all the selected ingredients.
  const selectionFilter = (choices: string[]) => choices.join(', ');
//autocom-box is styled with the the local SearchIngredient.css
  return (
    <div className="search-input">
      <input type="text" value={searchTerm} onChange={handleInputChange} />
        <ul className="autocom-box">
          {/* suggestiion.slice(0,10) makes the list only display a maximum of 10 results. */}
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
};

export default SearchIngredients;

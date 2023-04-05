import { useEffect, useState } from 'react';

const SearchIngredients = () => {
  const [ingredientArray, setIngredientArray] = useState<string[]>([]);
  const [ingredientChoices, setIngredientChoices] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

//This fetches the .csv. Super wierd that I don't have to parse it this time.
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
  const handleSelectFromList = (element: HTMLElement) => {
    const selectUserData = element.textContent?.toLowerCase();
    const updatedChoices = selectUserData && ingredientChoices.includes(selectUserData)
      ? ingredientChoices.filter(choice => choice !== selectUserData)
      : [...ingredientChoices, selectUserData];
    setIngredientChoices(updatedChoices);
    setSearchTerm('');
    setSuggestions([]);
  };
//This clears the ingredients array
  const handleClearIngredients = () => {
    setIngredientChoices([]);
    setSearchTerm('');
    setSuggestions([]);
  };

  const selectionFilter = (choices: string[]) => choices.join(', ');
//autocom-box is styled with the app.css
  return (
    <div className="search-input">
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <ul className="autocom-box"> 
      {/* The code below handles the elements in the list and sends them as to the ingredientChoices, using the handleSelectFromList function */}
        {suggestions.map((data, index) => (
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

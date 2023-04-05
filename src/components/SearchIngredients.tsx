import { useEffect, useState } from 'react';

const SearchIngredients = () => {
  const [ingredientArray, setIngredientArray] = useState<string[]>([]);
  const [ingredientChoices, setIngredientChoices] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    fetch('./src/components/commonIngredients.csv')
      .then(response => response.text())
      .then(data => {
        const ingrArr = data.split('\r\n');
        setIngredientArray(ingrArr);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userData = event.target.value;
    setSearchTerm(userData);

    const emptyArray = userData
      ? ingredientArray.filter(data => data.toLowerCase().startsWith(userData.toLowerCase()))
      : [];

    setSuggestions(emptyArray);
  };

  const handleSelectFromList = (element: HTMLElement) => {
    const selectUserData = element.textContent?.toLowerCase();
    const updatedChoices = selectUserData && ingredientChoices.includes(selectUserData)
      ? ingredientChoices.filter(choice => choice !== selectUserData)
      : [...ingredientChoices, selectUserData];
    setIngredientChoices(updatedChoices);
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleClearIngredients = () => {
    setIngredientChoices([]);
    setSearchTerm('');
    setSuggestions([]);
  };

  const selectionFilter = (choices: string[]) => choices.join(', ');

  return (
    <div className="search-input">
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <ul className="autocom-box">
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

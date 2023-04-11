import React, { useEffect, useState } from 'react';
import './SearchIngredients.css';

export const SearchIngredients = ({ setIngredientChoices }) => {
  const [ingredientArray, setIngredientArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('./src/components/searchingredientsbar/commonIngredients.csv')
      .then(response => response.text())
      .then(data => {
        const ingrArr = data.split('\r\n');
        setIngredientArray(ingrArr);
      });
  }, []);

  const handleInputChange = (event) => {
    const userData = event.target.value;
    setSearchTerm(userData);

    const emptyArray = userData
      ? ingredientArray.filter(data => data.toLowerCase().startsWith(userData.toLowerCase()))
      : [];

    setSuggestions(emptyArray);
  };

  const handleSelectFromList = (event) => {
    const selectUserData = event.currentTarget.textContent?.toLowerCase() ?? '';
    const updatedChoices = selectUserData && setIngredientChoices((choices) =>
      choices.includes(selectUserData)
        ? choices.filter(choice => choice !== selectUserData)
        : [...choices, selectUserData]
    );
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleClearIngredients = () => {
    setIngredientChoices([]);
    setSearchTerm('');
    setSuggestions([]);
  };

  const selectionFilter = (choices) => {
    if (Array.isArray(choices)) {
      return choices.join(', ');
    } else {
      return '';
    }
  }

  return (
    <div className="search-input">
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <ul className="autocom-box">
        {suggestions.slice(0, 10).map((data, index) => (
          <li key={index} onClick={handleSelectFromList}>
            {data.toLowerCase()}
          </li>
        ))}
      </ul>
      <button className="clear-ingredients" onClick={handleClearIngredients}>Clear</button>
      <p className="selections">{selectionFilter(setIngredientChoices)}</p>
    </div>
  );
};

import React, { useState } from "react";
import Papa from "papaparse";

type Ingredient = {
  name: string;
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Ingredient[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
// This parses the CSV file into an mapped array that react can read
    Papa.parse("./src/components/commonIngredients.csv", {
      download: true,
      header: false,
      complete: (results) => {
        const data: string[][] = results.data;
        const filteredSuggestions = data
          .map((row) => ({ name: row[0] })) // map each row to an Ingredient object
          .filter((item: Ingredient) =>
            item.name.toLowerCase().includes(value)
          );

        // Only show suggestions if there is at least one that matches the current value
        // This should be changed so it gives suggestion based on the chars typed by user
        if (filteredSuggestions.length > 0) {
          setSuggestions(filteredSuggestions.slice(0, 5)); // limit to 5 suggestions
        } else {
          setSuggestions([]);
        }
      },
    });
  };

  const handleSuggestionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSuggestions([]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Search for:", searchTerm);
    }
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search for an ingredient"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {suggestions.length > 0 && (
        <select className="suggestions" onChange={handleSuggestionChange}>
          {suggestions.map((suggestion) => (
            <option key={suggestion.name} value={suggestion.name}>
              {suggestion.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
export default SearchBar;

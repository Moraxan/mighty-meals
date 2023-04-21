import "./Ingredients.css";

//regex filtering out all integers and fractions to make them bold/strong
const boldNumbers = (str) => {
   const pattern = /(\d+|\d+\s*(?:\/\s*\d+)?)/g;

  // below is optional pattern to also include measurments (not working 100%)
  // const pattern = /(\d+[\s\d]*(?:\/\s*\d+)?|\d*\.\d+)\s*(cup[s]?|teaspoon[s]?|tablespoon[s]?|ounce[s]?|gallon[s]?|pint[s]?|quart[s]?|pound[s]?|milliliter[s]?|liter[s]?|gram[s]?|kilogram[s]?)/gi;

  // Replaces matches with bold/strong HTML tags
  return str.replace(pattern, (match) => `<strong>${match}</strong>`);
};

export const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients-container">
      <div className="ingredients-box">
        <p>ingredients</p>
      </div>
      <br />
      <ul>
        {ingredients.map((ingredient: string, index: number) => {
          const [amount, ...rest] = ingredient.original.split(" ");
          const formattedIngredient = boldNumbers(
            `${amount} ${rest.join(" ")}`
          );
          return <li key={index} dangerouslySetInnerHTML={{ __html: formattedIngredient }}/>;
        })}
      </ul>
    </div>
  );
};
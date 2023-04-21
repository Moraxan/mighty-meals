//@ts-ignore
export const BackButton = ({ handleBackClick }) => {
  return (
    <button className="RecipePage-back-button" onClick={() => {handleBackClick();}}>
      Back button
    </button>
  );
};

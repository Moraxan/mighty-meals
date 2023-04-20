import backbtn from "../../images/return-button.png";
//@ts-ignore
export const BackButton = ({ handleBackClick }) => {
  return (
    <div className="RecipePage-back-button" >      
        <img className="back" alt="back-button"  src={backbtn} width="120" height="64" onClick={() => {handleBackClick();}}></img>
    </div>
  );
};
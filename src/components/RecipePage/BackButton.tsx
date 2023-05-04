import { Link } from "react-router-dom";
import backbtn from "../../images/return-button.png";
//@ts-ignore
export const BackButton = ({handleBackClick}) => {
  return (
    <Link to="/" style={{textDecoration:"none"}} onClick={handleBackClick} >
    <div className="RecipePage-back-button" >      
        <img className="back" alt="back-button"  src={backbtn} width="120" height="64"></img>
    </div>
    </Link>
  );
};

//onClick={() => useBackButtonStore((state) => state.clickBackButton())}


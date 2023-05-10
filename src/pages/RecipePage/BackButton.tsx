import { Link } from "react-router-dom";
import {useBackButtonStore} from "../../components/Stores/backButtonClick";
import backbtn from "../../images/return-button.png";

//@ts-ignore
export const BackButton = () => {

  //@ts-ignore //global zustand variable/state to monitor back button click and persist state.
  const handleBackClick = useBackButtonStore((state) => state.clickBackButton);

  const handleClick = () => {
    history.back();
    if(sessionStorage.getItem("persisted-search-data") !== null){
      handleBackClick(true);
    } else{
      handleBackClick(false);
    }
  }

  return (
    <Link to="/" style={{textDecoration:"none"}} onClick={handleClick} >
    <div className="RecipePage-back-button" >      
        <img className="back" alt="back-button"  src={backbtn} width="120" height="64"></img>
    </div>
    </Link>
  );
};

//onClick={() => useBackButtonStore((state) => state.clickBackButton())}


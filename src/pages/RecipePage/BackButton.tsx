import { Link, useLocation } from "react-router-dom";
import {useBackButtonStore} from "../../components/Stores/backButtonClick";
import { useBroserHistoryStore } from "../../components/Stores/browsingHistory";
import backbtn from "../../images/return-button.png";

//@ts-ignore
export const BackButton = () => {

  //@ts-ignore
  const getPreviousPage = useBroserHistoryStore((state) => state.previousPage);
  let previousPage: string = getPreviousPage === null ? "/" : getPreviousPage;

  //Takes the current URI from where backbutton was clicked. If clicked from hero selection page no persist logic is run.
  // Also uses this to force profile page & hero page to go back to root.
  const currentLocationURI = useLocation().pathname;

  if(currentLocationURI === "/profilepage" || currentLocationURI === "/heroselection"){
    previousPage = "/";
  };

  //@ts-ignore //global zustand variable/state to monitor back button click and persist state.
  const handleBackClick = useBackButtonStore((state) => state.clickBackButton);

  const handleClick = () => {
    if(currentLocationURI !== "/heroselection" &&  currentLocationURI !== "/profilepage"){
      if(sessionStorage.getItem("persisted-search-data") !== null){
        handleBackClick(true);
      } else{
        handleBackClick(false);
      }
    }
  }

  return (
    <Link to={previousPage} style={{textDecoration:"none"}} onClick={handleClick} >
    <div className="RecipePage-back-button" >      
        <img className="back" alt="back-button"  src={backbtn} width="120" height="64"></img>
    </div>
    </Link>
  );
};


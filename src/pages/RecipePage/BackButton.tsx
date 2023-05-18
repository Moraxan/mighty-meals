import { Link, useLocation } from "react-router-dom";
import {useBackButtonStore} from "../../components/Stores/backButtonClick";
import { useBrowserHistoryStore } from "../../components/Stores/browsingHistory";
import { useHeroInfoStore } from "../../components/Stores/displayHeroInfoAndFood";
import backbtn from "../../images/return-button.png";
import './BackButton.css';

//@ts-ignore
export const BackButton = () => {

  const getPreviousPage = useBrowserHistoryStore((state) => state.previousPage);
  let previousPage: string = getPreviousPage === null ? "/" : getPreviousPage;

  const setIsHeroSelected = useHeroInfoStore((state) => state.setIsHeroSelected);

  //Takes the current URI from where backbutton was clicked. If clicked from hero selection page no persist logic is run.
  // Also uses this to force profile page & hero page to go back to root.
  const currentLocationURI = useLocation().pathname;

  if(currentLocationURI === "/profilepage" || currentLocationURI === "/heroselection"){
    previousPage = "/";
  };

  //global zustand variable/state to monitor back button click and persist state.
  const handleBackClick = useBackButtonStore((state) => state.clickBackButton);

  const handleClick = () => {
    if(currentLocationURI === "/profilepage" || currentLocationURI === "/heroselection"){
      setIsHeroSelected(false);
      handleBackClick(false);
    }

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
    <div className="RecipePage-back-button" >    </div>
    </Link>
  );
};


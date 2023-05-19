import "./card.css";
import { Link, useLocation } from 'react-router-dom';
import { useBrowserHistoryStore } from "../Stores/browsingHistory";
import clock from "../../images/clock.png";
import alt_image from "../../images/alt_image.png";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

//@ts-ignore
const Card = ( props ) => {

  const setPreviousPage = useBrowserHistoryStore((state) => state.setPreviousPage);
  const location: string = useLocation().pathname;

  const handleClick = () => {
    if(location !== "/profilepage"){
      props.persistSearchData();
    }
    
    setPreviousPage(location);
  };

  function removeSymbolsFromString(){
    const title = props.recipeTitle
    var regex = /[^A-Za-z0-9\s\&\-\']/g;
    var editedString = title.replace(regex, "");
    return editedString;
  }

  function titleToDisplay() {
    let strippedTitle = removeSymbolsFromString();
    return strippedTitle.length < 36 ? strippedTitle.toLowerCase() : strippedTitle.substring(0, 35).toLowerCase() + "...";
  }

  return (
    
    <div>
      
    <Link to={`/recipe/${props.recId}`} onClick={() => {handleClick()}}>
    <div className="card card__wrapper">
      {/*//@ts-ignore*/}
      <img className="card__bg-image" src={props.imgSrc === undefined ? "undefined" : props.imgSrc} alt="" onError={(e) => {e.target.src = alt_image}} />

      <div className="card__container">
        <div className="card-title-background">
          <p className="card-title-text">{titleToDisplay()}</p>
        </div>
        
        <div>
          <div className="card__time">
            <img className="time" alt="time" src={clock} />
            <p className="card__time-text">
              {props.readyInMin}
              <span>min</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
    <div className="favorite-button-container">
      <FavoriteButton recId={props.recId} imgSrc={props.imgSrc} recipeTitle={titleToDisplay()} readyInMin={props.readyInMin} markAsFavorite={props.isFavoriteRecipe} favoritedRecipes={props.favoriteRecipes} ></FavoriteButton>
      </div>
    </div>
  )
}

export default Card;

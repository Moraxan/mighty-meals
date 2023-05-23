import "./card.css";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import { useBrowserHistoryStore } from "../Stores/browsingHistory";
import alt_image from "../../images/alt_image.png";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

//@ts-ignore
const CardMTVMH = ( props ) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(props.markAsFavorite);

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
    <div className="main-card">
    <Link to={`/recipe/${props.recId}`} onClick={() => {handleClick()}}>
    <div className="card card__wrapper">
      {/*//@ts-ignore*/}
      <img className="card__bg-image" src={props.imgSrc === undefined ? "undefined" : props.imgSrc} alt="" onError={(e) => {e.target.src = alt_image}} />

      <div className="card__container">
        <div className="card-title-background">
          <p className="card-title-text">{removeSymbolsFromString().length < 36 ? removeSymbolsFromString().toLowerCase() : removeSymbolsFromString().substring(0, 35).toLowerCase() + "..."}</p>
        </div>
        <div>
          <div className="card__ingredients">            
            <p className="ingredients">                        
              <span>matching ingredients:&nbsp;&nbsp;{props.usedIngredientCount}<span className="divider">&nbsp;/</span>{props.totalNumberOfIngredients}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
    {props.showHeart && <div className="favorite-button-container">
      <FavoriteButton recId={props.recId} imgSrc={props.imgSrc} recipeTitle={titleToDisplay()} readyInMin={props.readyInMin} setFavoriteRecipes={props.setFavoriteRecipes} isFavorite={isFavorite} setIsFavorite={setIsFavorite} ></FavoriteButton>
      </div>}
    </div>
  );
};

export default CardMTVMH;

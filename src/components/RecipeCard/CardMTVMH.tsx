import "./card.css";
import { Link, useLocation } from 'react-router-dom';
import { useBrowserHistoryStore } from "../Stores/browsingHistory";
import alt_image from "../../images/alt_image.png";

//@ts-ignore
const CardMTVMH = ( props ) => {

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

  return (
    <div className="topCard">
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
    </div>
  );
};

export default CardMTVMH;

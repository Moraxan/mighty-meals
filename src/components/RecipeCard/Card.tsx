import "./card.css";
import {Link} from 'react-router-dom';
import clock from "../../images/clock.png";

//@ts-ignore
const Card = ( props ) => {

  function removeSymbolsFromString(){
    const title = props.recipeTitle
    var regex = /[^A-Za-z0-9\s\&\-\']/g;
    var editedString = title.replace(regex, "");
    return editedString;

  }
  return (
    
    <div>
      
    <Link to={`recipe/${props.recId}`} onClick={() => {props.persistSearchData()}}>
    <div className="card card__wrapper">
      <img className="card__bg-image" src={props.imgSrc} alt="" />

      <div className="card__container">
        <div className="card__pill card__title">
          <p className="card__title-text">{removeSymbolsFromString().length < 36 ? removeSymbolsFromString().toLowerCase() : removeSymbolsFromString().substring(0, 35).toLowerCase() + "..."}</p>
        </div>
        <div>
          <div className="card__pill card__time">
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
    </div>
  );
};

export default Card;

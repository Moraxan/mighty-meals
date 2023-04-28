import "./card.css";
import {Link} from 'react-router-dom';

//@ts-ignore
const CardMTVMH = ( props ) => {
  return (
    <div className="topCard">
    <Link to={`recipe/${props.recId}`} onClick={() => {props.persistSearchData()}}>
    <div className="card card__wrapper">
      <img className="card__bg-image" src={props.imgSrc} alt="" />

      <div className="card__container">
        <div className="card__pill card__title">
          <p className="card__title-text">{props.recipeTitle}</p>
        </div>
        <div>
          <div className="card__pill card__time">            
            <p className="ingredients">                        
              <span>matching ingredients: {props.usedIngredientCount}</span>
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

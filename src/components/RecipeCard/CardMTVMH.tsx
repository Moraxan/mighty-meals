import { useState } from "react";
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
        <div className="card-title-background">
          <p className="card-title-text">{props.recipeTitle.length < 36 ? props.recipeTitle.toLowerCase() : props.recipeTitle.substring(0, 35).toLowerCase() + "..."}</p>
        </div>
        <div>
          <div className="card__ingredients">            
            <p className="ingredients">                        
              <span>matching ingredients:&nbsp;&nbsp;{props.usedIngredientCount}<span className="divider">&nbsp;/</span>{props.ingredientChoices.length}</span>
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

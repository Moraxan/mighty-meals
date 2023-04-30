import "./card.css";
import {Link} from 'react-router-dom';

//@ts-ignore
const Card = ( props ) => {
  return (
    <div>
    <Link to={`recipe/${props.recId}`} onClick={() => {props.persistSearchData()}}>
    <div className="card card__wrapper">
      <img className="card__bg-image" src={props.imgSrc} alt="" />

      <div className="card__container">
        <div className="card__pill card__title">
          <p className="card__title-text">{props.recipeTitle.length < 36 ? props.recipeTitle.toLowerCase() : props.recipeTitle.substring(0, 35).toLowerCase() + "..."}</p>
        </div>
        <div>
          <div className="card__pill card__time">
            <img
              className="card__time-icon"
              src="https://img.freepik.com/free-icon/stopwatch_318-873357.jpg"
              alt="clock icon"
            />
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

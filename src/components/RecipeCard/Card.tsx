import "./card.css";

//@ts-ignore
const Card = ({ title, time, bgImgUrl }) => {
  return (
    <div className="card card__wrapper">
      <img className="card__bg-image" src={bgImgUrl} alt="" />

      <div className="card__container">
        <div className="card__pill card__title">
          <p className="card__title-text">{title}</p>
        </div>
        <div>
          <div className="card__pill card__time">
            <img
              className="card__time-icon"
              src="https://img.freepik.com/free-icon/stopwatch_318-873357.jpg"
              alt="clock icon"
            />
            <p className="card__time-text">
              {time}
              <span>MIN</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

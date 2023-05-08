import "./SuperHeroInfo.css";

//@ts-ignore
export default function SuperHeroInfo(props) {
  return (
    <>
      <div className="image">
        <img src={props.image.url}></img>
      </div>
      <div className="info">
        <ul>
          <li>{props.name}</li>
          {props.biography["full-name"]}
          {props.appearance.race}
          {props.work.base}
          {props.appearance.height}
          {props.appearance.weight}
          {props.appearance["eye-color"]}
          {props.appearance["hair-color"]}

          {props.powerstats.intelligence}
          {props.powerstats.strength}
          {props.powerstats.speed}
          {props.powerstats.power}
        </ul>
      </div>
    </>
  );
}

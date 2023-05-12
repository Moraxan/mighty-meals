import "./SuperHeroInfo.css";
import { useHeroInfoStore } from "../../components/Stores/displayHeroInfoAndFood";
import { Hero } from "../../components/Interface/Interface";
import statbar0 from "../../images/statbar_0.png";
import statbar1 from "../../images/statbar_1.png";
import statbar2 from "../../images/statbar_2.png";
import statbar3 from "../../images/statbar_3.png";
import statbar4 from "../../images/statbar_4.png";
import statbar5 from "../../images/statbar_5.png";
import statbar6 from "../../images/statbar_6.png";
import statbar7 from "../../images/statbar_7.png";
import statbar8 from "../../images/statbar_8.png";
import statbar9 from "../../images/statbar_9.png";
import statbar10 from "../../images/statbar_10.png";

//@ts-ignore
export default function SuperHeroInfo() {
  //@ts-ignore
  const superHero: Hero = useHeroInfoStore((state) => state.heroObject);
  //@ts-ignore
  const powerStatImage = (powerStatValue) => {
    let imageUrl = "";
    switch (true) {
      case powerStatValue >= 0 && powerStatValue <= 9:
        imageUrl = statbar0;
        break;
      case powerStatValue >= 10 && powerStatValue <= 19:
        imageUrl = statbar1;
        break;
      case powerStatValue >= 20 && powerStatValue <= 29:
        imageUrl = statbar2;
        break;
      case powerStatValue >= 30 && powerStatValue <= 39:
        imageUrl = statbar3;
        break;
      case powerStatValue >= 40 && powerStatValue <= 49:
        imageUrl = statbar4;
        break;
      case powerStatValue >= 50 && powerStatValue <= 59:
        imageUrl = statbar5;
        break;
      case powerStatValue >= 60 && powerStatValue <= 69:
        imageUrl = statbar6;
        break;
      case powerStatValue >= 70 && powerStatValue <= 79:
        imageUrl = statbar7;
        break;
      case powerStatValue >= 80 && powerStatValue <= 89:
        imageUrl = statbar8;
        break;
      case powerStatValue >= 90 && powerStatValue <= 99:
        imageUrl = statbar9;
        break;
      case powerStatValue == 100:
        imageUrl = statbar10;
        break;
      default:
        imageUrl = statbar0;
    }
    return imageUrl;
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center superhero-container">
        <div className="image-container">
          <img
            className="superhero-image"
            src={superHero.image.url}
            alt={superHero.name}
          />
        </div>
        <div className="info-container">
          <div className="superhero-info">
            <h2 className="yellow-background">{superHero.name}</h2>
            <p>{superHero.biography.facts}</p>
          </div>
          <div className="details-container">
            <div className="info">
              <div className="info-first">
                <p>Full Name: {superHero.biography.fullName}</p>
                <p>Race: {superHero.appearance.race}</p>
                <p>Base: {superHero.work.base}</p>
              </div>
              <div className="info-second">
                <div className="first-column">
                  <p className="yellow-background">
                    Height: {superHero.appearance.height[1]}
                  </p>
                  <p className="yellow-background">
                    Hair color: {superHero.appearance.hairColor}
                  </p>
                </div>
                <div className="second-column">
                  <p className="yellow-background">
                    Weight: {superHero.appearance.weight[1]}
                  </p>
                  <p className="yellow-background">
                    Eye color: {superHero.appearance.eyeColor}
                  </p>
                </div>
              </div>
            </div>
            <div className="stats">
              <div className="stats-details">
                <p>INTELLIGENCE </p>
                <img
                  src={powerStatImage(superHero.powerstats.intelligence)}
                  alt=""
                  className="powerstat-image"
                />
              </div>
              <div className="stats-details">
                <p>STRENGTH </p>
                <img
                  src={powerStatImage(superHero.powerstats.strength)}
                  alt=""
                  className="powerstat-image"
                />
              </div>
              <div className="stats-details">
                <p>SPEED </p>
                <img
                  src={powerStatImage(superHero.powerstats.speed)}
                  alt=""
                  className="powerstat-image"
                />
              </div>
              <div className="stats-details">
                <p>POWER </p>
                <img
                  src={powerStatImage(superHero.powerstats.power)}
                  alt=""
                  className="powerstat-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

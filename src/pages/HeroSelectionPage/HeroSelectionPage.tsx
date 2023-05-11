import {Link} from 'react-router-dom';
import { BackButton } from "../RecipePage/BackButton";
import { getSuperhero } from "../../components/GetSuperhero/GetSuperhero";
import { captainAmerica, hulk, thor } from "./HeroObjects";
import { useHeroInfoStore } from "../../components/Stores/displayHeroInfoAndFood";

import cptAmericaImg from "./Images/captainAmerica.jpg";
import hulkImg from "./Images/hulk.jpg";
import thorImg from "./Images/thor.jpg";

import "./HeroSelectionPage.css";

export default function HeroSelectionPage(){

    //@ts-ignore Zustand store variables for setting global hero object and if hero is selected
    const setHeroObject = useHeroInfoStore((state) => state.setHeroObject);
    //@ts-ignore
    const setIsHeroSelected = useHeroInfoStore((state) => state.setIsHeroSelected);

    // const cptAmericaImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg";
    // const hulkImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg";
    // const thorImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg";

    const onHeroClick = (heroId: number) => {
        if(heroId === 149){
            setIsHeroSelected(true);
            setHeroObject(captainAmerica);
        } else if(heroId === 332){
            setIsHeroSelected(true);
            setHeroObject(hulk);
        } else if(heroId === 659){
            setIsHeroSelected(true);
            setHeroObject(thor);
        };
    };

    return (
        <>
            <div className="back-btn">
                <BackButton />
            </div>
            
            <div className="heroheader">
                <h1>eat like your favorite hero</h1>
            </div>

            <div className="hero-image-container">
                <div className="margin-hero-cards">
                    <Link to="/" style={{textDecoration: "none"}} onClick={() => {onHeroClick(149)}}>
                        <div className="hero-flex">
                            <img className="hero-image" src={cptAmericaImg} alt="Captain America" />
                            <span className="hero-text">captain america</span>
                        </div>
                    </Link>
                </div>

                <div className="margin-hero-cards">
                    <Link to="/" style={{textDecoration: "none"}} onClick={() => {onHeroClick(332)}}>
                        <div className="hero-flex">
                            <img className="hero-image" src={hulkImg} alt="The incredible Hulk" />
                            <span className="hero-text">the incredible hulk</span>
                        </div>
                    </Link>
                </div>

                <div className="margin-hero-cards">
                    <Link to="/" style={{textDecoration: "none"}} onClick={() => {onHeroClick(659)}}>
                        <div className="hero-flex">
                            <img className="hero-image" src={thorImg} alt="Thor" />
                            <span className="hero-text">thor</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}


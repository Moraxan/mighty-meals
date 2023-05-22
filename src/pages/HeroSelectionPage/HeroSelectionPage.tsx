import {Link} from 'react-router-dom';
import { BackButton } from "../RecipePage/BackButton";
import { captainAmerica, hulk, thor } from "./HeroObjects";
import { useHeroInfoStore } from "../../components/Stores/displayHeroInfoAndFood";
import { useBackButtonStore } from "../../components/Stores/backButtonClick";

import cptAmericaImg from "./Images/captainAmerica.jpg";
import hulkImg from "./Images/hulk.jpg";
import thorImg from "./Images/thor.jpg";

import "./HeroSelectionPage.css";

export default function HeroSelectionPage(){

    //Zustand store variables for setting clicked state, useState on StartPage renders differently depending on this.
    const handleBackClick = useBackButtonStore((state) => state.clickBackButton);
    //Zustand store variables for setting global hero object and if hero is selected
    const setHeroObject = useHeroInfoStore((state) => state.setHeroObject);
    const setIsHeroSelected = useHeroInfoStore((state) => state.setIsHeroSelected);

    // const cptAmericaImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg";
    // const hulkImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg";
    // const thorImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg";

    const onHeroClick = (heroId: number) => {
        setIsHeroSelected(true);
        handleBackClick(false);

        if(heroId === 149){
            setHeroObject(captainAmerica);
        } else if(heroId === 332){
            setHeroObject(hulk);
        } else if(heroId === 659){
            setHeroObject(thor);
        };
    };

    return (
        <>
            <div className="backbutton-style">
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


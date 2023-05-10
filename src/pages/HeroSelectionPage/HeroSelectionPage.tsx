import {Link} from 'react-router-dom';
import { BackButton } from "../RecipePage/BackButton";

import "./HeroSelectionPage.css";

export default function HeroSelectionPage(){

    const cptAmericaImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg";
    const hulkImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg";
    const thorImg: string = "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg";


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
                    <Link to="/" style={{textDecoration: "none"}}>
                        <div className="hero-flex">
                            <img className="hero-image" src={cptAmericaImg} alt="Captain America" />
                            <span className="hero-text">captain america</span>
                        </div>
                    </Link>
                </div>

                <div className="margin-hero-cards">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <div className="hero-flex">
                            <img className="hero-image" src={hulkImg} alt="The incredible Hulk" />
                            <span className="hero-text">the incredible hulk</span>
                        </div>
                    </Link>
                </div>

                <div className="margin-hero-cards">
                    <Link to="/" style={{textDecoration: "none"}}>
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


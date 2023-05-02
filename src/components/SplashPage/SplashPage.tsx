import './SplashPage.css';
import Image from '../../images/logo.png'

export const SplashPage = () => {

    return (
        <div className="splash-page">
            <div className="splash-image">
                <img src={Image} alt="Mighty Meals Logo" />
            </div>
            <div className="splash-text">
                Mighty Meals
            </div>
        </div>
    )

}
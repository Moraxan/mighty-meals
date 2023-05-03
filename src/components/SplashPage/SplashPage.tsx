import './SplashPage.css';
import Image from '../../images/logo.png'

//@ts-ignore
export const SplashPage = (props) => {

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
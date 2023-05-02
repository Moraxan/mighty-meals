import alt_image from "../../images/alt_image.png";
import "./DishImage.css"

//@ts-ignore
export const DishImage = ({ imageUrl, altText }) => {
  return (
    <div className="dish-image-container">
      {/*//@ts-ignore*/}
      <img src={imageUrl === undefined ? "undefined" : imageUrl} alt={altText} className="dish-image" onError={(e) => {e.target.src = alt_image}} />
    </div>
  );
};
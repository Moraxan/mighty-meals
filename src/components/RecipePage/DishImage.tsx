import "./DishImage.css"

export const DishImage = ({ imageUrl, altText }) => {
  return (
    <div className="dish-image-container">
      <img src={imageUrl} alt={altText} className="dish-image" />
    </div>
  );
};

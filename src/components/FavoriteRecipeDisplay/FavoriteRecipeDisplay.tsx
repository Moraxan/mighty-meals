import Card from "../../components/RecipeCard/Card";
import "./FavoriteRecipeDisplay.css";

//@ts-ignore
export function FavoriteRecipeDisplay({favoriteRecipes, setFavoriteRecipes}){

    function checkIfFavoriteRecipe(recipeId:number) {
      //@ts-ignore
        const found = favoriteRecipes.find(recipe => recipe.id === recipeId)
        return found? true: false; 
      }

//@ts-ignore
      const renderCards = (recipes) => {
        return (
          <div>
            {/*//@ts-ignore*/}
            {recipes.map(recipe => (
              <Card
              key={recipe.id}
              recId={recipe.id}
              imgSrc={recipe.image}
              recipeTitle={recipe.title}
              readyInMin={recipe.timeToMake}
              markAsFavorite={checkIfFavoriteRecipe(recipe.id)}
              favoriteRecipes={favoriteRecipes}
              setFavoriteRecipes={setFavoriteRecipes}
              showHeart={true}
              />
            ))}
          </div>
        );
      };

    return (
        <>
        <div className="favorite-title">
          Favorite recipes
        </div>
        <div className="favorite-outer-container">
          <div className="favorite-outer-container">
              <div className="cards-container">
                {favoriteRecipes.length > 0 && <div className="cards-wrapper">
                    {renderCards(favoriteRecipes)};
                </div>}
              </div>
          </div>
        </div>
        </>
    );
}
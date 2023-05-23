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
          <>
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
          </>
        );
      };

    return (        
        <div className="faved-recipes">
        <div className="fav-header">favorite recipes</div>
                {favoriteRecipes.length > 0 && <div className="fav-recipes">                
                    {renderCards(favoriteRecipes)}
                </div>}              
          </div>
    );
}
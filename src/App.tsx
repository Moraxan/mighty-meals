import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/AVENGEANCE/AVENGEANCE HEROIC AVENGER.ttf';
import './App.css'
import SideBar from './components/SideBar/SideBar'
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import TmpCard from './components/TmpCard/TmpCard';
import SearchBar from './components/SearchBar/SearchBar';

// Interface defining properties of recipe objects fetched from API.
interface Recipe  {
  id: number;

  title: string;
  // summary: string;
  image: string;

  readyInMinutes: number;
  // servings: number;

  // vegetarian: boolean;
  // vegan: boolean;
  // glutenFree: boolean;
  // dairyFree: boolean;

  // cuisines: string[];
  // dishTypes: string[];
  // diets: string[];

  // analyzedInstructions: string[];
}

function App() {
  // Below 2 arrays are used to make it clear for TypeScript what types our useState functions require.
  const tmpRecipe: Recipe[] = [];
  const emptyArr: string[] = [];

  // Storing recipe objects in this state.
  const [recipes, setRecipes] = useState(tmpRecipe);

  // Button in search bar and X button in filter uses this state to show/hide filter.
  const [show, setShow] = useState(false);

  // States for all different type of filter/ingredient choices
  const [ingredientChoices, setIngredientChoices] = useState(emptyArr);
  const [mealChoice, setMealChoice] = useState("");
  const [cuisineChoices, setCuisineChoices] = useState(emptyArr);
  const [intoleranceChoices, setIntoleranceChoices] = useState(emptyArr);
  const [dietChoices, setDietChoices] = useState(emptyArr);

  // State for all filter choices (except ingredients since there are no predefines buttons) so we can make buttons purple if they are selected.
  const [selected, setSelected] = useState(emptyArr);


  // useEffect hook that triggers when page first loads up, gives us the random recipes.
  useEffect(() => {

    // fetch(`https://api.spoonacular.com/recipes/random?apiKey=f4780df1170f41749bd24df676766198&tags=${getMealTypeByTime()}&number=3`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     createCards(data.recipes);
    //   })

    // Sample recipes to use insteas of calling fetch method during development.
    let forTesting: Recipe[] = [{
      id: 637776,
      title: "Cherry Pancakes for One",
      image: "https://spoonacular.com/recipeImages/637776-556x370.jpg",
      readyInMinutes: 45
    }, {
      id: 660697,
      title: "Southern Fried Catfish",
      image: "https://spoonacular.com/recipeImages/660697-556x370.jpg",
      readyInMinutes: 45
    }, {
      id: 634091,
      title: "Banana Foster Bread Pudding",
      image: "https://spoonacular.com/recipeImages/634091-556x370.jpg",
      readyInMinutes: 45
    }]

    createCards(forTesting);
  }, [])


  // Used in random API call URL to define type of meal.
  function getMealTypeByTime(){

    const date: Date = new Date();
    const hours: number = date.getHours();

    if(hours > 3 && hours < 11){
        return "breakfast";
    } else if(hours > 10 && hours < 16){
        return "lunch";
    } else if(hours > 15 && hours < 23){
        return "dinner";
    } else{
        return "snack";
    }
  }

  // Receives data from API or the sample data and creates objects fit for start-page cards.
  function createCards(input: Recipe[]){
    let tmpTmp: Recipe[] = [];
    input.forEach((recipe) => {
      let tmp: Recipe = {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        readyInMinutes: recipe.readyInMinutes
      }
      tmpTmp.push(tmp);
    })
    setRecipes(tmpTmp);
  }

  return (
    <div>
      <div className="app-body">
        <NavigationBar />
        <SearchBar show={show} setShow={setShow} ingredientChoices={ingredientChoices} setIngredientChoices={setIngredientChoices} showRed={true}/>
        <SideBar show={show} setShow={setShow} mealChoice={mealChoice} setMealChoice={setMealChoice} cuisineChoices={cuisineChoices} setCuisineChoices={setCuisineChoices} intoleranceChoices={intoleranceChoices} setIntoleranceChoices={setIntoleranceChoices} dietChoices={dietChoices} setDietChoices={setDietChoices} selected={selected} setSelected={setSelected} ingredientChoices={ingredientChoices} setIngredientChoices={setIngredientChoices} showRed={false}/>
        <br />
        <div className="d-flex flex-wrap justify-content-center">
        {recipes.length > 0 && recipes.map(recipe => <TmpCard className="test-card" key={recipe.id} recId={recipe.id} imgSrc={recipe.image} recipeTitle={recipe.title} readyInMin={recipe.readyInMinutes}/>)}
        </div>
        <div className="random-generated">Random: {getMealTypeByTime()}</div><br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
        Mighty Meals<br/>
      </div>
      <Footer />
    </div>
  );
}

export default App

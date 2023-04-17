import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/AVENGEANCE/AVENGEANCE HEROIC AVENGER.ttf';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import TmpCard from './components/TmpCard/TmpCard';
import TmpCardMTVMH from './components/TmpCard/TmpCardMTVMH';
import SearchBar from './components/SearchBar/SearchBar';
import SearchSwitch from './components/SearchSwitch/SearchSwitch';
import {RecipeFrontST} from './components/Interface/Interface';
import {RecipeMTVMH} from './components/Interface/Interface';
import {useMediaQuery} from "./components/DropdownNav/DropdownNav";
import { RecipePage } from './components/RecipePage/RecipePage';

export default function App() {
  // Below 2 arrays are used to make it clear for TypeScript what types our useState functions require.
  const emptyRecipeST: RecipeFrontST[] = [];
  const emptyRecipeMTVMH: RecipeMTVMH[] = [];
  const emptyArr: string[] = [];

  // Storing recipe objects in this state.
  const [recipesST, setRecipesST] = useState(emptyRecipeST);
  const [recipesMTVMH, setRecipesMTVMH] = useState(emptyRecipeMTVMH);

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

  // State to monitor if it's a regular search or MTVMH search, will affect api call string and in turn also the response.
  const [standardSearch, setStandardSearch] = useState(true);


  // useEffect hook that triggers when page first loads up, gives us the random recipes.
  useEffect(() => {

    // fetch(`https://api.spoonacular.com/recipes/random?apiKey=f4780df1170f41749bd24df676766198&tags=${getMealTypeByTime()}&number=3`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     createCards(data.recipes);
    //   })

    // Sample recipes to use instead of calling fetch method during development.
    let forTesting: RecipeFrontST[] = [{
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




  // Receives data from API or the sample data and creates objects fit for start-page cards.
  function createCards(input: RecipeFrontST[] | RecipeMTVMH[]){

    if(standardSearch === true){
      setRecipesMTVMH(emptyRecipeMTVMH);

      let tmpTmp: RecipeFrontST[] = [];
      input.forEach((recipe) => {
        let tmp: RecipeFrontST = {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          //@ts-ignore
          readyInMinutes: recipe.readyInMinutes
        }
        tmpTmp.push(tmp);
        setRecipesST(tmpTmp);
      })
    } else{
      setRecipesST(emptyRecipeST);

      let tmpTmp: RecipeMTVMH[] = [];
      input.forEach((recipe) => {
        let tmp: RecipeMTVMH = {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          //@ts-ignore
          usedIngredientCount: recipe.usedIngredientCount,
          //@ts-ignore
          missedIngredientCount: recipe.missedIngredientCount
        }
        tmpTmp.push(tmp);
        setRecipesMTVMH(tmpTmp);
      })
    }
  }

  // importing useMediaQuery function to make SearchSwith appear based on if condition is met or not.
  const matches = useMediaQuery('screen and (max-width: 900px) and (max-height: 450px), screen and (max-width: 450px) and (max-height: 900px)')

//If this variable is set to show it shows the start page rather than the recipe page.  
  const showStartPage : string = "hide";
     
  return (

    <>
      {showStartPage === "show" ? (
        <div>
          <div className="app-body">
            <NavigationBar />
            <SearchBar
              show={show}
              setShow={setShow}
              ingredientChoices={ingredientChoices}
              setIngredientChoices={setIngredientChoices}
              showRed={true}
            />
            <SideBar
              show={show}
              setShow={setShow}
              mealChoice={mealChoice}
              setMealChoice={setMealChoice}
              cuisineChoices={cuisineChoices}
              setCuisineChoices={setCuisineChoices}
              intoleranceChoices={intoleranceChoices}
              setIntoleranceChoices={setIntoleranceChoices}
              dietChoices={dietChoices}
              setDietChoices={setDietChoices}
              selected={selected}
              setSelected={setSelected}
              ingredientChoices={ingredientChoices}
              setIngredientChoices={setIngredientChoices}
              showRed={false}
            />
            <br />
            <div className="d-flex flex-wrap justify-content-center">
              {recipes.length > 0 &&
                recipes.map((recipe) => (
                  <TmpCard
                    className="test-card"
                    key={recipe.id}
                    recId={recipe.id}
                    imgSrc={recipe.image}
                    recipeTitle={recipe.title}
                    readyInMin={recipe.readyInMinutes}
                  />
                ))}
            </div>
            <div className="random-generated">
              Random: {getMealTypeByTime()}
            </div>
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
            <br />
            Mighty Meals
          </div>
          <Footer />
        </div>
      ) : (
        <div className='recipe-page'>
          <div className='app-body'>
          <NavigationBar/>
          <RecipePage/>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}



import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/AVENGEANCE/AVENGEANCE HEROIC AVENGER.ttf';
import './App.css'
import SideBar from './components/SideBar/SideBar'
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import TmpCard from './components/TmpCard/TmpCard';

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
  const tmpRecipe: Recipe[] = [];
  const [recipes, setRecipes] = useState(tmpRecipe);


  useEffect(() => {

    // fetch('https://api.spoonacular.com/recipes/random?apiKey=f4780df1170f41749bd24df676766198&tags=&number=3')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     createCards(data.recipes);
    //   })

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
      <NavigationBar />
      <SideBar />
      <div className="div-text-test">
        <br />
        <div className="d-flex flex-wrap justify-content-center">
        {recipes.length > 0 && recipes.map(recipe => <TmpCard className="test-card" key={recipe.id} recId={recipe.id} imgSrc={recipe.image} recipeTitle={recipe.title} readyInMin={recipe.readyInMinutes}/>)}
        </div>
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
        Mighty Meals<br/>
        Mighty Meals<br/>
        <Footer />
      </div>
    </div>
  )
}

export default App

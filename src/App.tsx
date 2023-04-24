import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import { RecipePage } from "./components/RecipePage/RecipePage";

export default function App() {
  //Set this constant to true to view the Start Page
  //  ***************   |Function mainly for demo purpose. For easier dev of recipe page set default state to false   |***************
  //  ***************   |and in RecipePage component set default state of recipeId to a static ID.                    |***************
  const [showStartPage, setShowStartPage] = useState(true);

  //Testing states
  const [clickedRecipeID, setClickedRecipeID] = useState(0);

  const handleRecipeClick = (clickedId: number) => {
    setClickedRecipeID(clickedId);
    setShowStartPage(!showStartPage);
  };

  return (
    <>
      {showStartPage === true ? (
        <>
          <StartPage handleRecipeClick={handleRecipeClick} />
          <div className='footer'>
          <Footer />
          </div>
        </>
      ) : (
        <>
          <div className="app-body-recipe">
            <NavigationBar hideSwitch={true}/>
            <RecipePage setShowStartPage={setShowStartPage} showStartPage={showStartPage} clickedRecipeID={clickedRecipeID} />
          </div>
          <div className='footer'>
          <Footer />
          </div>
        </>
      )}
    </>
  );
}
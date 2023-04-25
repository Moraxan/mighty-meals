import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import ModalSaveAPIKey from "./components/ModalSaveAPIKey/ModalSaveAPIKey"
import { RecipePage } from "./components/RecipePage/RecipePage";

export default function App() {

  //@ts-ignore
  const [showModal, setShowModal] = useState(localStorage.getItem("storedApiKey") === null || localStorage.getItem("storedApiKey").length < 25);

  //Set this constant to true to view the Start Page
  //  ***************   |Function mainly for demo purpose. For easier dev of recipe page set default state to false   |***************
  //  ***************   |and in RecipePage component set default state of recipeId to a static ID.                    |***************
  const [showStartPage, setShowStartPage] = useState(true);

  //Testing states
  const [clickedRecipeID, setClickedRecipeID] = useState(0);

  const [backButtonClicked, setBackButtonClicked] = useState(false);

  const handleRecipeClick = (clickedId: number) => {
    setClickedRecipeID(clickedId);
    setShowStartPage(!showStartPage);
  };

  return (
    <>
      {showModal && <ModalSaveAPIKey setShowModal={setShowModal} /> }
      {showStartPage === true ? (
        <>
          <StartPage handleRecipeClick={handleRecipeClick} backButtonClicked={backButtonClicked} />
          <Footer />
        </>
      ) : (
        <>
          <div className="app-body-recipe">
            <NavigationBar hideSwitch={true}/>
            <RecipePage setShowStartPage={setShowStartPage} showStartPage={showStartPage} clickedRecipeID={clickedRecipeID} setBackButtonClicked={setBackButtonClicked} />
          </div>
            <Footer />
        </>
      )}
    </>
  );
}
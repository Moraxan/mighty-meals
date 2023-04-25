import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import { RecipePage } from "./components/RecipePage/RecipePage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";

//This is the router for the app. It is not used yet, but will be used in the future.

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StartPage />
    ),
  },
  {
    path: "recipe/:id",
    loader: ({ params }) => {return params.id},
    element: (
      <>
          <div className="app-body-recipe">
            <NavigationBar hideSwitch={true}/>
            <RecipePage />
          </div>
            <Footer />
      </>
    ),
  },
]);


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
          <Footer />
        </>
      ) : (
        <>
          <div className="app-body-recipe">
            <NavigationBar hideSwitch={true}/>
            {/* <RecipePage setShowStartPage={setShowStartPage} showStartPage={showStartPage} clickedRecipeID={clickedRecipeID} /> */}
          </div>
            <Footer />
        </>
      )}
    </>
  );
}
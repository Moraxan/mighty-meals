import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import StartPage from "./pages/StartPage/StartPage";
import { RecipePage } from "./pages/RecipePage/RecipePage";
import {createBrowserRouter} from "react-router-dom";
import "./App.css";
import { SplashPage } from "./components/SplashPage/SplashPage";


const ShowSplashFirstSession = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const showSplash = sessionStorage.getItem("showSplash");
    if (showSplash === "false") {
      setShowSplash(false);
    } else {
      setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("showSplash", "false");
      }, 2000);
    }
  }, []);

  const closeSplash = () => {
    setShowSplash(false);
    sessionStorage.setItem("showSplash", "false");
  };
//Here we can set when the splash page will show. Now it shows is sceenwidth is less than 768px.
  if (showSplash && window.innerWidth <= 768) {
//@ts-ignore
//The fade out is an animation to purple. Not to a page behind.
    return (
    <>
    <div className="splash-front">
      <SplashPage closeSplash={closeSplash} />
    </div>
    </>
    )
  } 
  else {
    return (
      <>
        <StartPage />
        <div className='footer'>
          <Footer />
          </div>
      </>
    );
  }
};



//This is the router for the app. 
export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <div className="splashPage">
     <ShowSplashFirstSession />
     </div>
      </>
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
          <div className='footer'>
          <Footer />
          </div>
        </>
      )
  }
]);
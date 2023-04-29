import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import StartPage from "./pages/StartPage/StartPage";
import { RecipePage } from "./pages/RecipePage/RecipePage";
import {createBrowserRouter} from "react-router-dom";
import "./App.css";
import { SplashPage } from "./components/SplashPage/SplashPage";

//I needed to add this to have the logic for the SplashPage and the Page behind it.
const MainPage = () => {
  return (
    <>
      <StartPage />
      <Footer />
    </>
  );
};

//Now I just need to add the fade out animation to the splash page.
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
      }, 1500);
    }
  }, []);

  const closeSplash = () => {
    setShowSplash(false);
    sessionStorage.setItem("showSplash", "false");
  };
//Here we can set when the splash page will show.
  if (showSplash && window.innerWidth <= 768) {
//@ts-ignore
    return <SplashPage closeSplash={closeSplash} />
  } 
  else {
    return <MainPage />;
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
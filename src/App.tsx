import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import StartPage from "./pages/StartPage/StartPage";
import { RecipePage } from "./pages/RecipePage/RecipePage";
import {createBrowserRouter} from "react-router-dom";
import "./App.css";
import { SplashPage } from "./components/SplashPage/SplashPage";
import HeroSelectionPage from "./pages/HeroSelectionPage/HeroSelectionPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";


const ShowSplashFirstSession = () => {
  const showSplash = sessionStorage.getItem("showSplash") === "false" ? false : true;
  if(showSplash && window.innerWidth <= 768){
    useEffect(() => {
      setTimeout(() => {
        sessionStorage.setItem("showSplash", "false");
        const zIndex = -1;
        const splashFront: Element | null = document.querySelector('.splash-front');
        //@ts-ignore
        splashFront!.style.setProperty('z-index', zIndex);
      }, 2000);
    }, []);
  }

//Here we can set when the splash page will show. Now it shows is sceenwidth is less than 768px.
  if (showSplash && window.innerWidth <= 768) {
    return (
    <>
    <div className="splash-front">
      <SplashPage />
    </div>
    <div className="splash-behind">
        <StartPage />
        <div className='footer'>
        <Footer />
        </div>
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
     <ShowSplashFirstSession />
      </>
    ),
  },
  {
    path: "recipe/:id",
    loader: ({ params }) => {return params.id},
    element: (
      <>
            <NavigationBar hideSwitch={true}/>
            <RecipePage />
          <div className='footer'>
          <Footer />
          </div>
        </>
      )
  },
  {
    path: "profilepage",
    element: (
      <>
      <NavigationBar hideSwitch={true}/>
      <ProfilePage />
      <div className='footer'>
          <Footer />
          </div>
      </>
      ),
  },
  {
    path: "heroselection",
    element: (
      <>
      <div className="app-body-hero">
        <NavigationBar hideSwitch={true}/>
        <HeroSelectionPage />
      </div>
      <div className="footer">
      <Footer />
      </div>
      </>
    ),
  }
]);
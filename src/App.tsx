import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import { RecipePage } from './components/RecipePage/RecipePage';

export default function App() {

  //Set this constant to show to view the Start Page
  const showStartPage: string = "show";

  return (
    <>
      {showStartPage === "show" ? (
        <>
          <StartPage />
          <Footer />
        </>
      ) : (
        <>
          <div className="app-body-recipe">
            <NavigationBar hideSwitch={true}/>
            <RecipePage />
          </div>
            <Footer />
        </>
      )}
    </>
  );
}



import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import { RecipePage } from "./components/RecipePage/RecipePage";
import {createBrowserRouter} from "react-router-dom";
import "./App.css";


//This is the router for the app. It is not used yet, but will be used in the future.
export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <StartPage />
        <Footer />
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
      )}
    </>
  );
}


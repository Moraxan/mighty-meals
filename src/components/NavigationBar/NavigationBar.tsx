import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import DropdownNav from "../DropdownNav/DropdownNav";
import SearchSwitch from "../SearchSwitch/SearchSwitch";
import {useMediaQuery} from "../DropdownNav/DropdownNav";
import { useHeroInfoStore } from "../../components/Stores/displayHeroInfoAndFood";
import "./NavigationBar.css";

//@ts-ignore
export default function NavigationBar(props) {
  // Taking in these props from App.tsx: standardSearch, setStandardSearch, setMealChoice, setCuisineChoices, setIntoleranceChoices, setDietChoices

  // importing useMediaQuery function to make SearchSwith appear based on if condition is met or not.
  const matches = useMediaQuery('screen and (max-width: 900px) and (max-height: 450px), screen and (max-width: 450px) and (max-height: 900px)')

  //@ts-ignore Zustand store variables for hero selection, inluding hero object and if hero is selected or not.
  const isHeroSelected: boolean = useHeroInfoStore((state) => state.isHeroSelected);

  return (
    <>
      <Navbar className="mighty-nabvar" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img alt="logo" src={logo} className="d-inline-block align-top navbar-logo" />
          </Navbar.Brand>
          <span className="mighty-navbar-text">Mighty Meals</span>
          <div className="d-flex flex-row">
            {props.hideSwitch === true ?
              <div className="hiddenSwitch-margin"></div> :
              isHeroSelected ? <div className="hiddenSwitch-margin"></div> :
              matches === false && !isHeroSelected && <SearchSwitch standardSearch={props.standardSearch} setStandardSearch={props.setStandardSearch} setMealChoice={props.setMealChoice} setCuisineChoices={props.setCuisineChoices} setIntoleranceChoices={props.setIntoleranceChoices} setDietChoices={props.setDietChoices} setSelected={props.setSelected}/>}
            <DropdownNav />
          </div>
        </Container>
      </Navbar>
      <div className="navbar-bottom-margin"></div>
    </>
  );
}

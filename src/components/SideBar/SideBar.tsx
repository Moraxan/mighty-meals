import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBarSection from '../SideBarSection/SideBarSection';
import SearchBar from "../SearchBar/SearchBar";
import closeLogo from "../../images/close.png"
import './SideBar.css'

//@ts-ignore
export default function SideBar(props) {
  // Taking in these props from App.tsx: show, setShow, mealChoice, setMealChoice, cuisineChoices, setCuisineChoices, intoleranceChoices, setIntoleranceChoices
  //  - dietChoices, setDietChoices, selected, setSelected, ingredientChoices, setIngredientChoices, showRed, createCards, standardSearch, setStandardSearch

  // Close button is mapped to this function, one could also simply click outside of filter to close it.
  const handleClose = () => props.setShow(false);

  return (
    <>
      <Offcanvas id="filter-canvas" scroll={false} show={props.show} onHide={handleClose} placement="end">
        <Offcanvas.Header id="filter-header" className="d-flex align-items-start">
          <Offcanvas.Title id="filter-title">FILTERS</Offcanvas.Title>
          <Button className="filter-close-btn" onClick={handleClose}>
            <img className="filter-close-logo" src={closeLogo} alt="close"/>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="filter-body">

        <SearchBar show={props.show} setShow={props.setShow} ingredientChoices={props.ingredientChoices} setIngredientChoices={props.setIngredientChoices} showRed={false}/>
        <SideBarSection mealChoice={props.mealChoice} setMealChoice={props.setMealChoice} cuisineChoices={props.cuisineChoices} setCuisineChoices={props.setCuisineChoices} intoleranceChoices={props.intoleranceChoices} setIntoleranceChoices={props.setIntoleranceChoices} dietChoices={props.dietChoices} setDietChoices={props.setDietChoices} selected={props.selected} setSelected={props.setSelected} ingredientChoices={props.ingredientChoices} setIngredientChoices={props.setIngredientChoices} createCards={props.createCards} standardSearch={props.standardSearch} setStandardSearch={props.setStandardSearch}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
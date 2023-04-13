import { useState } from 'react'
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { ReturnFilters } from "./Filters";
import xWhite from "../../images/x_white.png"
import "./SideBarSection.css";
import "./SideBarButtons.css";

//@ts-ignore
export default function SideBarSection(props) {
  // Taking in these props from SideBar.tsx: mealChoice, setMealChoice, cuisineChoices, setCuisineChoices, intoleranceChoices, setIntoleranceChoices
  // - dietChoices, setDietChoices, selected, setSelected, ingredientChoices, setIngredientChoices, createCards, standardSearch, setStandardSearch

  return (
    <>
      <Accordion>
        <AccordionSelectedFilters />
        <AccordionFilterItem />
      </Accordion>
      <FilterFooter />
    </>
  );

  function AccordionSelectedFilters(){
    // Maps thru all states with the users filter/ingredient choices and displays them as buttons.
    // All buttons have handleClick function which removes the choice from filter.
    return (
      <>
        {/*//@ts-ignore*/}
        {props.ingredientChoices.map(item => 
          <Button key={item} className="selected-btn" onClick={event => HandleClick(item, "ingredients")}>
            {item}
            <img className="x-btn" src={xWhite} alt="x"></img>
          </Button>)}

        {props.mealChoice.length > 0 &&
          <Button key={`${props.mealChoice}-selected`} className="selected-btn" onClick={event => HandleClick(props.mealChoice, "meal types")}>
            {props.mealChoice}
            <img className="x-btn" src={xWhite} alt="x"></img>
          </Button>}

        {/*//@ts-ignore*/}
        {props.cuisineChoices.map(item =>
          <Button key={`${item}-selected`} className="selected-btn" onClick={event => HandleClick(item, "cuisines")}>
            {item}
            <img className="x-btn" src={xWhite} alt="x"></img>
          </Button>)}

        {/*//@ts-ignore*/}
        {props.intoleranceChoices.map(item =>
          <Button key={`${item}-selected`} className="selected-btn" onClick={event => HandleClick(item, "intolerances")}>
            {item}
            <img className="x-btn" src={xWhite} alt="x"></img>
          </Button>)}

        {/*//@ts-ignore*/}
        {props.dietChoices.map(item =>
          <Button key={`${item}-selected`} className="selected-btn" onClick={event => HandleClick(item, "diets")}>
            {item}
            <img className="x-btn" src={xWhite} alt="x"></img>
          </Button>)}
      </>
    )
  }

  function AccordionFilterItem() {
    // Nested mapping to create all filter sections.
    // ReturnFilters function returns an array containing multiple arrays which represent all filters.

    // Outer loop/map creates the section and inner loop adds all items as button to that section.
    return (
      <ul>
        {ReturnFilters().map((array, index) => (
          <li key={index}>
          <Accordion.Item eventKey={(index + 1).toString()}>
            <Accordion.Header className="filter-section-header">
              {ArrayName(index)}
            </Accordion.Header>
            <Accordion.Body>
              {/*//@ts-ignore*/}
              {array.map(item => <Button key={item} id={item} onClick={event => HandleClick(item, ArrayName(index))} className={`filter-buttons ${isItemSelected(props.selected, item.toLocaleLowerCase()) && "btn-selected"}`}>{item.toLowerCase()}</Button>)}
            </Accordion.Body>
          </Accordion.Item>
          </li>
        ))}
      </ul>
    );
  }

  function FilterFooter(){
    // 2 buttons, 1 to clear and 1 to search. 

    const tmpSpan = <span className="clear-btn-font">{` (${props.selected.length + props.ingredientChoices.length})`}</span>
    return (
      <footer className="filter-footer d-flex pb-1">
        <Button className="clear-result-btn" onClick={clearAll}>clear{props.selected.length + props.ingredientChoices.length > 0 && tmpSpan}</Button>
        <Button className="clear-result-btn" onClick={getApiData}>go!</Button>
      </footer>
    )
  }

  function isItemSelected(inputArray: string[], item: string){
    // function takes an array and an item and checks if item is included in the array. Using this to determine if button in filter sections is selected.
    if(inputArray.includes(item)){
      return true;
    }
    else{
      return false;
    }
  }

  function clearAll(){
    const emptyArr: string[] = [];

    props.setIngredientChoices(emptyArr);
    props.setMealChoice("");
    props.setCuisineChoices(emptyArr);
    props.setIntoleranceChoices(emptyArr);
    props.setDietChoices(emptyArr);
    props.setSelected(emptyArr);
  }

  function HandleClick(buttonText: string, category: string){
    // Multiple sections for each filer type.
    // Checking if current state have clicked button stored, if not id adds if to array, if already included it will be removed by splice.
    // Either way state gets updated always when button is clicked.

    let tmpSelected = [...props.selected];

    buttonText = buttonText.toLowerCase();

    if(category === "ingredients"){
      let tmpIngredientChoices = [...props.ingredientChoices];

      tmpIngredientChoices.splice(tmpIngredientChoices.indexOf(buttonText), 1)
      props.setIngredientChoices(tmpIngredientChoices);
    }

    if(category === "meal types"){
      let tmpMealChoice = props.mealChoice;

      ReturnFilters()[0].forEach((item) => {
        if(tmpSelected.includes(item.toLowerCase())){
          tmpSelected.splice(tmpSelected.indexOf(item), 1);
        }
      })

      if(tmpMealChoice === buttonText){
        tmpMealChoice = "";
      } else{
        tmpMealChoice = buttonText;

        let tmpArr = [buttonText];
        tmpSelected.push(...tmpArr);
      }

      props.setMealChoice(tmpMealChoice);
    }

    if(category === "cuisines"){
      let tmpCuisineChoices = [...props.cuisineChoices];

      if(!tmpCuisineChoices.includes(buttonText)){
        tmpCuisineChoices.push(buttonText);

        let tmpArr = [buttonText];
        tmpSelected.push(...tmpArr);
      } else{
        tmpCuisineChoices.splice(tmpCuisineChoices.indexOf(buttonText), 1)
        tmpSelected.splice(tmpSelected.indexOf(buttonText), 1);
      }

      props.setCuisineChoices(tmpCuisineChoices);
    }

    if(category === "intolerances"){
      let tmpIntoleranceChoices = [...props.intoleranceChoices];

      if(!tmpIntoleranceChoices.includes(buttonText)){
        tmpIntoleranceChoices.push(buttonText);

        let tmpArr = [buttonText];
        tmpSelected.push(...tmpArr);
      } else{
        tmpIntoleranceChoices.splice(tmpIntoleranceChoices.indexOf(buttonText), 1)
        tmpSelected.splice(tmpSelected.indexOf(buttonText), 1);
      }

      props.setIntoleranceChoices(tmpIntoleranceChoices);
    }

    if(category === "diets"){
      let tmpDietChoices = [...props.dietChoices];

      if(!tmpDietChoices.includes(buttonText)){
        tmpDietChoices.push(buttonText);

        let tmpArr = [buttonText];
        tmpSelected.push(...tmpArr);
      } else{
        tmpDietChoices.splice(tmpDietChoices.indexOf(buttonText), 1)
        tmpSelected.splice(tmpSelected.indexOf(buttonText), 1);
      }
      props.setDietChoices(tmpDietChoices);

    }
    props.setSelected(tmpSelected);
  }

  async function getApiData(){
    // Function that fetches / GET data back from the API.
    // 2 endpoints which are controlled på state prop standardSearch. If true standard search will run, if false "man tager vad man haver" search will run.

    // Settings, read spoonacular documentation for more info.
    const apiKey: string = "f4780df1170f41749bd24df676766198";
    const maxHits: number = 1;
    const addRecipeNutrition: boolean = false;

    // Settings only for MTVMH
    const ranking: number = 1;    //Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
    const ignorePantry: boolean = true;   //Whether to ignore typical pantry items, such as water, salt, flour, etc.

    if(props.standardSearch === true){

      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${props.mealChoice}&cuisine=${createURIString(props.cuisineChoices)}&includeIngredients=${createURIString(props.ingredientChoices)}&intolerance=${createURIString(props.intoleranceChoices)}&diet=${createURIString(props.dietChoices)}&number=${maxHits}&addRecipeInformation=true&addRecipeNutrition=${addRecipeNutrition}`;

      try{
        const response = await fetch(encodeURI(url));
        const result = await response.json();

        props.createCards(result.results)
      }
      catch (e){
        console.log(e);
      }
    } else{

      const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${createURIString(props.ingredientChoices)}&ranking=${ranking}&ignorePantry=${ignorePantry}&number=${maxHits}`;

      try{
        const response = await fetch(encodeURI(url));
        const result = await response.json();

        props.createCards(result)
      }
      catch (e){
        console.log(e);
      }
    }

  }
}

function ArrayName(arrIndex: number) {
  // Used when creating the filter sections, takes the nested array index and returns a proper name.
  switch(arrIndex){
    case 0:
      return "meal types";
    case 1:
      return "cuisines";
    case 2:
      return "intolerances";
    case 3:
      return "diets";
    default:
      return "not found";
  }
}

// Takes all choices from the source array and creates a string appropriate for the API URI.
function createURIString(inputArray: string[]){
  let returnString: string = "";

  if(inputArray.length <= 0){
      return "";
  } else{
      if(inputArray.length == 1){
          return inputArray[0];
      } else{
          inputArray.forEach((item: string, index: number) => {
              if(index + 1 < inputArray.length){
                  returnString += `${item},`;
              } else{
                  returnString += item;
              }
          });

          return returnString.toLowerCase();
      }
  }
}



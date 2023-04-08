import React, { useState } from 'react';
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { ReturnFilters } from "./Filters";
import xWhite from "../../images/x_white.png"
import "./SideBarSection.css";
import "./SideBarButtons.css";



//@ts-ignore
export default function SideBarSection(props) {

  const emptyArr: string[] = [];

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
    return (
      <>
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
    const tmpSpan = <span className="clear-btn-font">{` (${props.selected.length})`}</span>
    return (
      <footer className="filter-footer d-flex">
        <Button className="clear-result-btn" onClick={clearAll}>clear{props.selected.length > 0 && tmpSpan}</Button>
        <Button className="clear-result-btn">results</Button>
      </footer>
    )
  }

  function isItemSelected(inputArray: string[], item: string){
    if(inputArray.includes(item)){
      return true;
    }
    else{
      return false;
    }
  }

  function clearAll(){
    props.setMealChoice("");
    props.setCuisineChoices(emptyArr);
    props.setIntoleranceChoices(emptyArr);
    props.setDietChoices(emptyArr);
    props.setSelected(emptyArr);
  }

  function HandleClick(buttonText: string, category: string){
    let tmpMealChoice = props.mealChoice;
    let tmpCuisineChoices = [...props.cuisineChoices];
    let tmpIntoleranceChoices = [...props.intoleranceChoices];
    let tmpDietChoices = [...props.dietChoices];

    let tmpSelected = [...props.selected];

    buttonText = buttonText.toLowerCase();

    if(category === "meal types"){

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
}

function ArrayName(arrIndex: number) {
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

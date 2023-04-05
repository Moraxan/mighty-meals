import React, { useState } from 'react';
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { ReturnFilters } from "./Filters";
import xWhite from "../../images/x_white.png"
import "./SideBarSection.css";
import "./SedeBarButtons.css";



//@ts-ignore
export default function SideBarSection() {

  const emptyArr: string[] = [];

  const [mealChoice, setMealChoice] = useState("");
  const [cuisineChoices, setCuisineChoices] = useState(emptyArr);
  const [intoleranceChoices, setIntoleranceChoices] = useState(emptyArr);
  const [dietChoices, setDietChoices] = useState(emptyArr);

  return (
    <Accordion>
      <AccordionSelectedFilters />
      <AccordionFilterItem />
    </Accordion>
  );

  function AccordionSelectedFilters(){
    return (
      <Accordion.Item eventKey="0">
        <Accordion.Header className="filter-section-header">
          selected filters
        </Accordion.Header>
        <Accordion.Body>
          {mealChoice.length > 0 &&
            <Button key={`${mealChoice}-selected`} className="selected-btn" onClick={event => HandleClick(event, "meal types")}>
              {mealChoice}
              <img className="x-btn" src={xWhite} alt="x"></img>
            </Button>}

          {cuisineChoices.map(item =>
            <Button key={`${item}-selected`} className="selected-btn" onClick={event => HandleClick(event, "cuisines")}>
              {item}
              <img className="x-btn" src={xWhite} alt="x"></img>
            </Button>)}

          {intoleranceChoices.map(item =>
            <Button key={`${item}-selected`} className="selected-btn" onClick={event => HandleClick(event, "intolerances")}>
              {item}
              <img className="x-btn" src={xWhite} alt="x"></img>
            </Button>)}

          {dietChoices.map(item =>
            <Button key={`${item}-selected`} className="selected-btn" onClick={event => HandleClick(event, "diets")}>
              {item}
              <img className="x-btn" src={xWhite} alt="x"></img>
            </Button>)}
        </Accordion.Body>
      </Accordion.Item>
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
              {array.map(item => <Button key={item} onClick={event => HandleClick(event, ArrayName(index))} className={`filter-buttons`}>{item.toLowerCase()}</Button>)}
            </Accordion.Body>
          </Accordion.Item>
          </li>
        ))}
      </ul>
    );
  }

  function HandleClick(event: React.MouseEvent<HTMLButtonElement>, category: string){
    let tmpMealChoice = mealChoice;
    let tmpCuisineChoices = [...cuisineChoices];
    let tmpIntoleranceChoices = [...intoleranceChoices];
    let tmpDietChoices = [...dietChoices];

    //@ts-ignore
    let buttonText: string = event.target.innerText;

    if(category === "meal types"){
      if(tmpMealChoice === buttonText){
        tmpMealChoice = "";
      } else{
        tmpMealChoice = buttonText;
      }

      setMealChoice(tmpMealChoice);
    }

    if(category === "cuisines"){
      if(!tmpCuisineChoices.includes(buttonText)){
        tmpCuisineChoices.push(buttonText);
      } else{
        tmpCuisineChoices.splice(tmpCuisineChoices.indexOf(buttonText), 1)
      }

      setCuisineChoices(tmpCuisineChoices);
    }

    if(category === "intolerances"){
      if(!tmpIntoleranceChoices.includes(buttonText)){
        tmpIntoleranceChoices.push(buttonText);
      } else{
        tmpIntoleranceChoices.splice(tmpIntoleranceChoices.indexOf(buttonText), 1)
      }

      setIntoleranceChoices(tmpIntoleranceChoices);
    }

    if(category === "diets"){
      if(!tmpDietChoices.includes(buttonText)){
        tmpDietChoices.push(buttonText);
      } else{
        tmpDietChoices.splice(tmpDietChoices.indexOf(buttonText), 1)
      }

      setDietChoices(tmpDietChoices);
    }
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

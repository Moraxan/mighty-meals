import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useApiCheckerStore} from "../Stores/checkIfApiExists";

import "./ModalSettings.css";

//@ts-ignore
export default function ModalSaveAPIKey(props) {
  //@ts-ignore
  const persistedSettings = JSON.parse(localStorage.getItem("mightySettings"));

  //@ts-ignore // global zustand variable/state to set state of api key
  const setApiKey = useApiCheckerStore((state) => state.updateApiKey);

  const [show, setShow] = useState(true);
  const [apiInputBox, setApiInputBox] = useState(localStorage.getItem("storedApiKey"));
  const [maxHits, setMaxHits] = useState(persistedSettings.storedMaxHits);
  const [maxRandom, setMaxRandom] = useState(persistedSettings.storedMaxRandomHits);
  const [includeNutrition, setIncludeNutrition] = useState(persistedSettings.storeAddRecipeNutrition);
  const [ignorePantry, setIgnorePantry] = useState(persistedSettings.storedIgnorePantry);
  const [ranking, setRanking] = useState(persistedSettings.storedRanking);

  const handleClose = () => setShow(false);

    //@ts-ignore
  const handleApiChange = (event) => {
    setApiInputBox(event.target.value.toLowerCase());
  };

    //@ts-ignore
  const handleMaxChange = (event) => {
    setMaxHits(Number(event.target.value));
  };

    //@ts-ignore
  const handleMaxRndChange = (event) => {
    setMaxRandom(Number(event.target.value));
  };

    //@ts-ignore
  const handleNutritionChange = () => {
    setIncludeNutrition(Boolean(!includeNutrition));
  };

    //@ts-ignore
  const handlePantryChange = () => {
    setIgnorePantry(Boolean(!ignorePantry));
  };

    //@ts-ignore
  const handleRankingChange = (event) => {
    setRanking(Number(event.target.value));
  };

  const handleSubmit = () => {
    persistedSettings.storedMaxHits = maxHits;
    persistedSettings.storedMaxRandomHits = maxRandom;
    persistedSettings.storeAddRecipeNutrition = includeNutrition;
    persistedSettings.storedIgnorePantry = ignorePantry;
    persistedSettings.storedRanking = ranking;

    localStorage.setItem("storedApiKey", apiInputBox!);
    setApiKey(localStorage.getItem("storedApiKey"));
    localStorage.setItem("mightySettings", JSON.stringify(persistedSettings));

    handleClose();
  };

  return (
    <>
      <Modal className="ModalSettings" show={show} onHide={handleClose} onExit={() => {props.setShowSettings(false)}}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            API key:
            <input className="input-Modal" type="text" value={apiInputBox!} onChange={handleApiChange} />

            Max hits on search: {maxHits}
            <input className="input-Modal" type="range" min="1" max="100" value={maxHits} onChange={handleMaxChange} />

            Max hits when random generated: {maxRandom}
            <input className="input-Modal" type="range" min="1" max="100" value={maxRandom} onChange={handleMaxRndChange} />

            <input className="input-Checkbox" id="nutrition-check" type="checkbox" checked={includeNutrition} onChange={handleNutritionChange} />
            <label htmlFor="nutrition-check">Include recipe nutrition</label>
            <br/>

            <input className="input-Checkbox" id="pantry-check" type="checkbox" checked={ignorePantry} onChange={handlePantryChange} />
            <label htmlFor="pantry-check">Ignore pantry | MTVMH: <a href="https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients" target="_blank">Documentation</a></label>
            <br/>

            <input className="input-Modal-Small" type="range" min="1" max="2" value={ranking} onChange={handleRankingChange} />
            Ranking output: {ranking} | MTVMH: <a href="https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients" target="_blank">Documentation</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={apiInputBox === null ? true : apiInputBox!.length < 25 ? true : false}>
            Save settings
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
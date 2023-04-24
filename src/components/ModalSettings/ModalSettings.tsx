import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ModalSettings.css";

//@ts-ignore
export default function ModalSaveAPIKey(props) {

  const [show, setShow] = useState(true);
  const [inputBox, setInputBox] = useState("");

  const handleClose = () => setShow(false);

  //@ts-ignore
  const handleChange = (event) => {
    // searchbar / input fields calls this function to filter ingredients based on user input.
    setInputBox(event.target.value.toLowerCase());
    console.log(inputBox);
  };

  const handleSubmitApi = () => {
    localStorage.setItem("storedApiKey", inputBox);
    props.setStoredApiKey(localStorage.getItem("storedApiKey"));
    props.setShowModal(false);
  };

  //@ts-ignore
  const persistedSettings = JSON.parse(localStorage.getItem("mightySettings"));

  return (
    <>
      <Modal className="ModalAPI" show={show} onHide={handleClose} onExit={() => {props.setShowSettings(false)}}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            API key:
            <input className="input-Modal" type="text" value={localStorage.getItem("storedApiKey")!} onChange={handleChange} />
            Max hits on search:
            <input className="input-Modal" type="text" value={persistedSettings.storedMaxHits} onChange={handleChange} />
            Max hits when random generated:
            <input className="input-Modal" type="text" value={persistedSettings.storedMaxRandomHits} onChange={handleChange} />
            Include recipe nutrition on standard search:
            <input className="input-Modal" type="text" value={persistedSettings.storeAddRecipeNutrition} onChange={handleChange} />
            Ignore pantry | MTVMH:
            <input className="input-Modal" type="text" value={persistedSettings.storedIgnorePantry} onChange={handleChange} />
            Ranking output | MTVMH:
            <input className="input-Modal" type="text" value={persistedSettings.storedRanking} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitApi} disabled={inputBox.length < 25 ? true : false}>
            Save API Key
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

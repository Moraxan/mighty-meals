import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useApiCheckerStore} from "../Stores/checkIfApiExists";

import "./ModalSaveAPIKey.css";

//@ts-ignore
export default function ModalSaveAPIKey() {

  //global zustand variable/state to set state of api key
  const setApiKey = useApiCheckerStore((state) => state.updateApiKey);

  const [show, setShow] = useState(true);
  const [inputBox, setInputBox] = useState("");

  const handleClose = () => setShow(false);

  //@ts-ignore
  const handleChange = (event) => {
    // searchbar / input fields calls this function to filter ingredients based on user input.
    setInputBox(event.target.value.toLowerCase());
  };

  const handleSubmitApi = () => {
    localStorage.setItem("storedApiKey", inputBox);
    setApiKey(localStorage.getItem("storedApiKey"));
    handleClose();
  };

  return (
    <>
      <Modal className="ModalSettings" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>No API Key found, please enter below to store in localStorage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="input-Modal" type="text" placeholder="Enter API Key" onChange={handleChange} />
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

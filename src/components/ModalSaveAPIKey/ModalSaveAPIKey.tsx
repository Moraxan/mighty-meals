import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ModalSaveAPIKey.css";

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

  return (
    <>
      <Modal className="ModalAPI" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>No API Key found, please enter below to store in localStorage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="input-API" type="text" placeholder="Enter API Key" onChange={handleChange} />
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

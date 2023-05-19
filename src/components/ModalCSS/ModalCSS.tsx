import { useState } from 'react';
import Modal from "react-bootstrap/Modal";

//@ts-ignore
export default function ModalCSS(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal className="ModalSettings" show={show} onHide={handleClose} onExit={() => {props.setShowCSS(false)}}>
        <Modal.Header className="modalheader" closeButton>
          <Modal.Title>CSS Guidlines/Help</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbody">
          <p>If we want CSS properties to be global we can set them as variables in index.css.<br></br>
              We can then import it into your css file them with @import url('../../index.css'); (file path will depend on where your component is);<br></br>
              We should also use relative units (em, rem, %) instead of absolute units (px, pt, cm, in) for font sizes, margins, paddings, etc.<br></br>
              This is not the case at them moment and needs a double check.<br></br>
              <br></br>
              Check the current index.css for global variables before you start a new component, please.<br></br>
          </p>
        </Modal.Body>
        <Modal.Footer className="modalfooter">
          <button className="submitbutton" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

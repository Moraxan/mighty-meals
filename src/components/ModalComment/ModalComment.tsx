import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import './ModalComment.css';
import CommentForm from "../../components/Comment/CommentForm"
import closeLogo from "../../images/close.png";
export default function Comment(props: any) {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false) ;
    return (
      <>
        <Modal show={show} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onExit={() => {
          props.setshowComments(false);
        }}>
          <Modal.Body className="modal-background">
          <Button className="filter-close-btn" onClick={handleClose}>
            <img className="filter-close-logo" src={closeLogo} alt="close" />
          </Button>
            <CommentForm recipeId ={props.recipeId} setshowComments={props.setshowComments} forceUpdate={props.forceUpdate} />
          </Modal.Body>
        </Modal>
      </>
);
}
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBarSection from '../SideBarSection/SideBarSection';
import closeLogo from "../../images/close.png"
import filterLogo from '../../images/filter.png'
import './SideBar.css'

//@ts-ignore
export default function SideBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="filter-button" variant="primary" onClick={handleShow}>
        <img className="filter-logo" alt="filter" src={filterLogo} />
      </Button>
      <Offcanvas id="filter-canvas" scroll={true} show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header id="filter-header" className="d-flex align-items-start">
          <Offcanvas.Title id="filter-title" >Search & Filter</Offcanvas.Title>
          <Button className="filter-close-btn" onClick={handleClose}>
            <img className="filter-close-logo" src={closeLogo} alt="close"/>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="filter-body">
          <SideBarSection mealChoice={props.mealChoice} setMealChoice={props.setMealChoice} cuisineChoices={props.cuisineChoices} setCuisineChoices={props.setCuisineChoices} intoleranceChoices={props.intoleranceChoices} setIntoleranceChoices={props.setIntoleranceChoices} dietChoices={props.dietChoices} setDietChoices={props.setDietChoices} selected={props.selected} setSelected={props.setSelected}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBarSection from '../SideBarSection/SideBarSection';
import './SideBar.css'

//@ts-ignore
export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Filter
      </Button>
      <Offcanvas id="filter-canvas" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header id="filter-header" className="d-flex align-items-start">
          <Offcanvas.Title id="filter-title" >Search & Filter</Offcanvas.Title>
          <Button className="filter-close-btn" onClick={handleClose}>X</Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="filter-body">
          <SideBarSection />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
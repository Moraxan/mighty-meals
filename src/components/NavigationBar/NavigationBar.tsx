import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import burger from "../../images/burger.png";
import "./NavigationBar.css";
import { Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <>
      <Navbar className="mighty-nabvar" variant="dark">
        <Container className="">
          <Navbar.Brand href="#home" className="">
            <img
              alt="logo"
              src={logo}
              className="d-inline-block align-top navbar-logo"
            />
          </Navbar.Brand>
          <span className="mighty-navbar-text">Mighty Meals</span>
          <Button className="burger-button">
            <img className="burger-logo" alt="burger-menu" src={burger} />
          </Button>
        </Container>
      </Navbar>
      <div className="navbar-bottom-margin"></div>
    </>
  );
}

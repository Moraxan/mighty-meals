import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import DropdownNav from "../DropdownNav/DropdownNav";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <>
      <Navbar className="mighty-nabvar" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={logo}
              className="d-inline-block align-top navbar-logo"
            />
          </Navbar.Brand>
          <span className="mighty-navbar-text">Mighty Meals</span>
          <DropdownNav />
        </Container>
      </Navbar>
      <div className="navbar-bottom-margin"></div>
    </>
  );
}

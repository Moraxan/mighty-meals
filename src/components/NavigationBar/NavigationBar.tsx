import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import DropdownNav from "../DropdownNav/DropdownNav";
import questionIcon from "../../images/question_mark.png"
import "./NavigationBar.css";

//@ts-ignore
export default function NavigationBar(props) {
  // Taking in these props from App.tsx: standardSearch, setStandardSearch

  const SearchSwitch = () => {
    return (
      <div className="d-flex switch-content">
        <img className="question-icon" src={questionIcon} alt="more info" />
        <div className="form-check form-switch ms-2">
          <input id="mighty-switch" className="form-check-input" type="checkbox" role="switch" defaultChecked />
        </div>
      </div>

    );
  };
  
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
          {/* <SearchSwitch /> */}
          <DropdownNav />
        </Container>
      </Navbar>
      <div className="navbar-bottom-margin"></div>
    </>
  );


}

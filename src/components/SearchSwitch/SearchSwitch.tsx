import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import "./SearchSwitch.css"

//@ts-ignore
export default function SearchSwitch(props){
      // Taking in these props from SearchBar.tsx and App.tsx: standardSearch, setStandardSearch, setMealChoice, setCuisineChoices, setIntoleranceChoices, setDietChoices

    return (
        <div className="d-flex" id="switch-content">

          <OverlayTrigger trigger="click" key="bottom" placement="bottom" rootClose={true} overlay={
            <Popover id="popover">
              <Popover.Header as="h3">{props.standardSearch ? "Standard search" : "MTVMH search"}</Popover.Header>
              <Popover.Body>
              {props.standardSearch ?
              "All filters activated. Free text search on front page." :
              "Filters de-activated. Only ingredients available for selection."}
              </Popover.Body>
            </Popover>
          }>
            <span className="questionMark-span">?</span>
          </OverlayTrigger>

          <div className="form-check form-switch ms-2">
            {props.standardSearch === true ?
            <input id="mighty-switch" onChange={flipSwitch} className="form-check-input" type="checkbox" role="switch" defaultChecked={props.standardSearch} /> : 
            <input id="mighty-switch" onChange={flipSwitch} className="form-check-input" type="checkbox" role="switch" defaultChecked={props.standardSearch} />
            }
          </div>



        </div>
      );

    //@ts-ignore
    function flipSwitch(event){
        // Sets standardSearch state to true/false controlling what type of search is made.
        props.setStandardSearch(event.target.checked)

        if(event.target.checked === false){
            const emptyArr: string[] = [];

            props.setMealChoice("");
            props.setCuisineChoices(emptyArr);
            props.setIntoleranceChoices(emptyArr);
            props.setDietChoices(emptyArr);
            props.setSelected(emptyArr);
        }
    }
}
import questionIcon from "../../images/question_mark.png"
import "./SearchSwitch.css"

//@ts-ignore
export default function SearchSwitch(props){
      // Taking in these props from SearchBar.tsx and App.tsx: standardSearch, setStandardSearch, setMealChoice, setCuisineChoices, setIntoleranceChoices, setDietChoices

    return (
        <div className="d-flex" id="switch-content">
          <img className="question-icon" src={questionIcon} alt="more info" />
          <div className="form-check form-switch ms-2">
            {props.standardSearch === true ?
            <input id="mighty-switch" onChange={flipSwitch} className="form-check-input" type="checkbox" role="switch" defaultChecked /> : 
            <input id="mighty-switch" onChange={flipSwitch} className="form-check-input" type="checkbox" role="switch" />
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
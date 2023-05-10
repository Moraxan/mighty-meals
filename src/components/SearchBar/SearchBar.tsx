import { useState } from "react";
import "./SearchBar.css";
import { staticIngredientList } from "./commonIngredients";
import filterLogo from '../../images/filter.png'
import searchLogo from '../../images/search.png'

//@ts-ignore
export default function SearchBar(props){
    // Taking in these props from App.tsx & SideBar.tsx: show, setShow, ingredientChoices, setIngredientChoices, showRed

    const emptyStringArr: string[] = [];

    // filteredData is all results matching the users input in searchbar.
    const [filteredData, setFilteredData] = useState(emptyStringArr);

    // content from .csv is parsed into here.
    const ingredientArray = staticIngredientList;

    // state for searchbar text, use variable to clear upon ingredient selection.
    const [searchText, setSearchtext] = useState("");

        //@ts-ignore
        const handleChange = (event) => {
            // searchbar / input fields calls this function to filter ingredients based on user input.
            setSearchtext(event.target.value.toLowerCase());
            const searchWord = event.target.value.toLowerCase();
            const newFilter = ingredientArray.filter((value) => {
                return value.startsWith(searchWord);
            })

            // text from event is stored in searchWord, if searchWord becomes empty our filterdata sets to empty also, otherwise filtered accordingly.
            if(searchWord === ""){
                setFilteredData(emptyStringArr);
            } else{
                setFilteredData(newFilter);
            }
        };
        
        //@ts-ignore
        const ingredientClick = (event) => {
            // This finction is triggered from the list items sorted above.
            // When clicked this function adds the choice to ingredientChoices (if already existing in list it will be removed instead).
            const ingredientListChoice = event.target.innerText;
            let tmpIngredientChoices = [...props.ingredientChoices];

            if(!tmpIngredientChoices.includes(ingredientListChoice)){
                tmpIngredientChoices.push(ingredientListChoice);

            } else{
                tmpIngredientChoices.splice(tmpIngredientChoices.indexOf(ingredientListChoice), 1)
            }
            props.setIngredientChoices(tmpIngredientChoices);

            // Resets userinput and filter after ingredient/list item is selected.
            setFilteredData(emptyStringArr);
            setSearchtext("");
        };  

        //@ts-ignore
        const openFilter = () => {
        props.setShow(!props.show);
    }


    return (
        // First div uses ternary on received prop (showRed) to determine if the extra red fluff is needed.
        <div className={props.showRed === true ? "red-fluff" : ""}>
            <div className={props.showRed === true ? "wrapper wrapper-padding" : "wrapper no-fluff"}>
                <div className="search-input">
                    <input type="text" placeholder={props.ingredientChoices.length > 0 ? `Search ingredients (${props.ingredientChoices.length})` : "Search ingredients"} onChange={handleChange}  value={searchText}/>
                    {/* If showRed is true our fileted result div gets a second class allowing us to change direction from down to up when displayed on phone. */}
                    <div className={props.showRed === true ? "autocom-box mobile-change-direction" : "autocom-box"}>
                        {/* Checks that our filteredData.length is longer than 0 and if true display the results. */}
                        {filteredData.length != 0 && (
                            <ul>
                                {filteredData.map((ingredient: string, index: number) => {
                                    return (
                                        <li key={index} onClick={ingredientClick} className={`${isItemSelected(props.ingredientChoices, ingredient.toLocaleLowerCase()) && "ingredient-selected"}`}>{ingredient}</li>     
                                    )
                                })}
                            </ul>
                        )}
                    </div>
                    {props.ingredientChoices.length > 0 && <div className="search-icon" onClick={() => {props.getApiData(); props.setShow(false)}}><img className="icon-search" src={searchLogo} /></div>}
                    <div className="icon" onClick={openFilter}><img className="icon-filter" src={filterLogo} /></div>
                </div>
            </div>
        </div>
    );

    function isItemSelected(inputArray: string[], item: string){
        // function takes an array and an item and checks if item is included in the array. Using this to determine if list item in search is selected.
        if(inputArray.includes(item)){
          return true;
        }
        else{
          return false;
        }
      }
};
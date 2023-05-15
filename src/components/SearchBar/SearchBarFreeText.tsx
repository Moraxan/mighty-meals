import "./SearchBar.css";
import filterLogo from '../../images/filter.png'
import searchLogo from '../../images/search.png'

//@ts-ignore
export default function SearchBarFreeText(props){
    // Taking in these props from App.tsx & SideBar.tsx: show, setShow, ingredientChoices, setIngredientChoices, showRed

    //@ts-ignore
    const handleChange = (event) => {
        // searchbar / input fields calls this function take input + show/hide search button.
        props.setFreeTextSearch(event.target.value.toLowerCase());
    };

    const openFilter = () => {
        props.setShow(!props.show);
    }

    return (
        // First div uses ternary on received prop (showRed) to determine if the extra red fluff is needed.
        <div className={props.showRed === true ? "red-fluff" : ""}>
            <div className={props.showRed === true ? "wrapper wrapper-padding" : "wrapper no-fluff"}>
                <div className="search-input">
                <input type="text" placeholder="Search here..." onChange={handleChange} value={props.freeTextSearch} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        props.getApiData();
                        }
                    }}
                />
                    {props.freeTextSearch.length > 0 && <div className="search-icon" onClick={() => {props.getApiData(), props.setFreeTextSearch("")}}><img className="icon-search" src={searchLogo} /></div>}
                    <div className="icon" onClick={openFilter}><img className="icon-filter" src={filterLogo} /></div>
                </div>
            </div>
        </div>
    );
};
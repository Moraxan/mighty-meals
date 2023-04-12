import { useState ,useEffect } from "react";
import "./SearchBar.css";
import filterLogo from '../../images/filter.png'

//@ts-ignore
export default function SearchBar(props){

    const emptyStringArr: string[] = [];
    const [filteredData, setFilteredData] = useState(emptyStringArr);
    const [ingredientArray, setIngredientArray] = useState(emptyStringArr);
    const [searchText, setSearchtext] = useState("");

    useEffect(() => {
        fetch("./src/components/SearchBar/commonIngredients.csv")
          .then((response) => response.text())
          .then((data) => {
            const parsedIngredients: string[] = data.toLowerCase().split("\r\n");
            setIngredientArray(parsedIngredients);
        });
    }, []);

        //@ts-ignore
        const handleChange = (event) => {
            setSearchtext(event.target.value.toLowerCase());
            const searchWord = event.target.value.toLowerCase();
            const newFilter = ingredientArray.filter((value) => {
                return value.startsWith(searchWord);
            })

            if(searchWord === ""){
                setFilteredData(emptyStringArr);
            } else{
                setFilteredData(newFilter);
            }
        };

        //@ts-ignore
        const ingredientClick = (event) => {
            const ingredientListChoice = event.target.innerText;
            let tmpIngredientChoices = [...props.ingredientChoices];

            if(!tmpIngredientChoices.includes(ingredientListChoice)){
                tmpIngredientChoices.push(ingredientListChoice);

            } else{
                tmpIngredientChoices.splice(tmpIngredientChoices.indexOf(ingredientListChoice), 1)
            }
            props.setIngredientChoices(tmpIngredientChoices);
            setFilteredData(emptyStringArr);
            setSearchtext("");
        };

        //@ts-ignore
        const openFilter = () => {
            props.setShow(!props.show);
        }

    return (
        <div className="wrapper">
            <div className="search-input">
                <input type="text" placeholder="Search here..." onChange={handleChange} value={searchText}/>
                <div className="autocom-box">
                    {filteredData.length != 0 && (
                        <ul>
                            {filteredData.map((ingredient: string, index: number) => {
                                return (
                                    <li key={index} onClick={ingredientClick}>{ingredient}</li>     
                                )
                            })}
                        </ul>
                    )}
                </div>
                <div className="icon" onClick={openFilter}><img className="icon-filter" src={filterLogo} /></div>
            </div>
        </div>
    );
};
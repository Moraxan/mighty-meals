import { useState, useEffect } from 'react';
import { useBackButtonStore } from "../../components/Stores/backButtonClick";
import "./Sort.css"

//@ts-ignore
export default function Sort(props) {

  // To not fetch unnecessary data with useEffect when data is persisted we monitor zustand store below of backbutton click.
  // We can also set it to false in case we change sort parameter right after we render the persisted search, triggering a new getch.
  const backButtonStatus = useBackButtonStore((state) => state.clicked);
  const setBackButtonStatus = useBackButtonStore((state) => state.clickBackButton);

  // Using previousSort state to appropriately be able to go back to no sort "" and trigger a new search.
  const [previousSort, setPreviousSort] = useState("");

  useEffect(() => {

    if(!backButtonStatus){

      if(previousSort !== "" && previousSort !== props.sortedBy){
        props.getApiData();
      }
  
      if(props.sortedBy !== ""){
        props.getApiData();
      }

    }

    // previousSort is set in the end of useEffect to not mess up the logic/order how it is read and copared.
    setPreviousSort(props.sortedBy);

  }, [props.sortedBy]);

  //@ts-ignore
  function handleSortChange(e) {
    setBackButtonStatus(false);
    props.setSortedBy(e.target.value);
  }
  
  return (
    <div className="sort-dropdown">
      <select className="select" value={props.sortedBy} onChange={handleSortChange}>
        <option value="">sort by:</option>
        <option value="popularity&sortDirection=desc">popularity</option>
        <option value="time&sortDirection=asc">prep time</option>
        <option value="price&sortDirection=asc">price</option>
        <option value="calories&sortDirection=asc">calories</option>
      </select>
    </div>
  );
}
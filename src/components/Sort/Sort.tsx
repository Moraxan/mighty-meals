import { useEffect, useState } from "react";
import "./Sort.css"

//@ts-ignore
export default function Sort(props) {
  const [sortKey, setSortKey] = useState("");

  function handleSortChange(e) {
    const newSortKey = e.target.value;
    setSortKey(newSortKey);
    props.onSortChange(newSortKey);
  }

  useEffect(() => {
    props.getApiData();
  }, [sortKey]);
  
  return (
    <div className="sort-dropdown">
      <select className="select" value={sortKey} onChange={handleSortChange}>
        <option value="">Sort by:</option>
        <option value="popularity">Popularity</option>
        <option value="time">Prep Time</option>
        <option value="price">Price</option>
        <option value="calories">Calories</option>
      </select>
    </div>
  );
}

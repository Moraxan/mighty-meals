import "./Sort.css"

//@ts-ignore
export default function Sort(props) {

  //@ts-ignore
  function handleSortChange(e) {
    props.setSortedBy(e.target.value);
  }
  
  return (
    <div className="sort-dropdown">
      <select className="select" value={props.sortedBy} onChange={handleSortChange}>
        <option value="">Sort by:</option>
        <option value="popularity">Popularity</option>
        <option value="time">Prep Time</option>
        <option value="price">Price</option>
        <option value="calories">Calories</option>
      </select>
    </div>
  );
}

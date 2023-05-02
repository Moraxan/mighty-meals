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
        <option value="">sort by:</option>
        <option value="popularity">popularity</option>
        <option value="time">prep time</option>
        <option value="price">price</option>
        <option value="calories">calories</option>
      </select>
    </div>
  );
}
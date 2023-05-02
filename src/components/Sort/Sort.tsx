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
        <option value="popularity&sortDirection=desc">popularity</option>
        <option value="time&sortDirection=asc">prep time</option>
        <option value="price&sortDirection=asc">price</option>
        <option value="calories&sortDirection=asc">calories</option>
      </select>
    </div>
  );
}
import './DishSummary.css';
import clock from "../../images/clock.png";

// Cleans the input string and shortens it to specified number of sentences
function TruncateString(string: string, numberOfSentences: number) {
  const indexes: number[] = [];
  const editedString = string.replaceAll('<b>','').replaceAll('</b>','')

  for (let index = 0; index < editedString.length; index++) {
  if (editedString[index] === '.') {
    indexes.push(index+1);
  }
}
  if (editedString.length <= indexes[numberOfSentences-1]) {
    return editedString;
  }
  return editedString.slice(0, indexes[numberOfSentences-1]);
}

export function DishSummary(props){
  const summary: string = props.recipeData.summary;
  
  return(
    
    <div className="dish-summary-container">
    <div className="title-time">
        <div>
          <h2 className="recipe-title"><span>{props.recipeData.title}</span></h2>
        </div>
        <div>
          <h2 className="recipe-time"><span><img className="time" alt="time" src={clock} />{props.recipeData.readyInMinutes} min</span></h2>
        </div>
    </div>

    <div className="summary-text">
      <p>{TruncateString(props.recipeData.summary, 3)}</p>
    </div>
  </div>
  );  
}
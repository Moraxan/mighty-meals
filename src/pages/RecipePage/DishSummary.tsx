import './DishSummary.css';
import clock from "../../images/clock.png";

// Cleans the input string and shortens it to specified number of sentences
function TruncateString(string: string, numberOfSentences: number) {
  const indexes: number[] = [];
  const editedString = string.replaceAll('<b>','').replaceAll('</b>','').replaceAll('<a href=','').replaceAll('/a>','')

  for (let index = 0; index < editedString.length; index++) {
  if (editedString[index] === '.') {
    if(editedString[index+1] === ' ')
    indexes.push(index+1);
  }
}
  if (editedString.length <= indexes[numberOfSentences-1]) {
    return editedString;
  }
  return editedString.slice(0, indexes[numberOfSentences-1]);
}

//@ts-ignore
export function DishSummary(props){
  const summary: string = props.recipeData.summary;
  function removeSymbolsFromString(){
    const title = props.recipeData.title
    var regex = /[^A-Za-z0-9\s\&\-\']/g;
    var editedString = title.replace(regex, "");
    return editedString;

  }

  return(
    
    <div className="dish-summary-container">
    <div className="title-time">
        <div>
          <h2 className="recipe-title"><span>{removeSymbolsFromString().toLowerCase()}</span></h2>

        </div>
        <div>
          <h2 className="recipe-time"><span><img className="time" alt="time" src={clock} />{props.recipeData.readyInMinutes} min</span></h2>
        </div>
    </div>

    <div className="summary-text">
      <p>{TruncateString(props.recipeData.summary, 4)}</p> 
    </div>
  </div>
  );  
}
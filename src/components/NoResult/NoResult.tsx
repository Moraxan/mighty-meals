import React from "react";
import "./NoResult.css";
import noMatchImg from "../../images/no-matching-recipe.png";

export default function NoResult() {
  return (
    <div className="no-results">
      <img 
        src={noMatchImg}
        alt="No matching results">
      </img>
    </div>
  );
}

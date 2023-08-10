import React from "react";
import Meaning from "./Meaning";


export default function WordSearch(props) {
  console.log(props.words);

  if (props.data) {
    return (
      <div className="Words">
        <h2>{props.data.word}</h2>
        <h3>/{props.data.phonetic}/</h3>
        {props.data.meanings.map(function(meaning, index){
          return (
          <div key={index}> 
          <Meaning meaning ={meaning} />

          </div>)
        })}
      </div>
    );
  } else {
    return null;
  }
}

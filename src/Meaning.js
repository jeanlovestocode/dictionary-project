import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4 className="btn">{props.meaning.partOfSpeech}</h4>

      <div className="definition">{props.meaning.definition}</div>

      <div className="example">{props.meaning.example}</div>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}

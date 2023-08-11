import React from "react";
import Meaning from "./Meaning";
import "./WordSearch.css"


export default function WordSearch(props) {

  if (props.data) {
    return (
      <div className="Words">
        <section>
          <h2>{props.data.word}</h2>
          <h3>/{props.data.phonetic}/</h3>
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

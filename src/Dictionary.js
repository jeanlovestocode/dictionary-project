import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import WordSearch from "./WordSearch";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultKeyword);
  let [words, setWords] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);

    setWords(response.data);
  }

  function search() {
    let apiKey = "990bbae9o01t0f92d3eba6338ad1439d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlekeyword(event) {
    setkeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word do you want to look up?</h2>
      
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handlekeyword}
              placeholder="Unravel meanings by typing any word"
            />
          </form>
          <div>suggested words: 💅beauty, 🌅sunset, 🧘‍♀️meditate...</div>
        </section>
        <WordSearch data={words} />
      </div>
    );
  } else {
    load();
    return "Loading..."
  }
}

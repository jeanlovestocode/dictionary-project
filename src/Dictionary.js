import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import WordSearch from "./WordSearch";
import Images
 from "./Images";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultKeyword);
  let [words, setWords] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  function handleResponse(response) {

    setWords(response.data);
  }


  function handleImagesResponse(response){
    console.log(response);
    setImages(response.data.photos);
  }

  function search() {
    let apiKey = "990bbae9o01t0f92d3eba6338ad1439d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let sheCodesApiKey = "990bbae9o01t0f92d3eba6338ad1439d";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;

    axios.get(sheCodesApiUrl).then(handleImagesResponse);

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
          <h2 className="heading">What word do you want to look up?</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handlekeyword}
              placeholder="Unravel expressions by typing any word"
            />
          </form>
          <div className="d-none d-lg-block">
            suggested words: 💅beauty, 🌅sunset, 🧘‍♀️meditate...
          </div>
        </section>
        <WordSearch data={words} />
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return "Loading..."
  }
}

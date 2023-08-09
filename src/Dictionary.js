import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary (){
    let [keyword, setkeyword]= useState("");

    function handleResponse(response){
        console.log(response.data.meanings[0]);
    }


    function search(event){
        event.preventDefault();
            let apiKey = "990bbae9o01t0f92d3eba6338ad1439d";
            let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
            axios.get(apiUrl).then(handleResponse);
    }

    function handlekeyword(event){
        setkeyword(event.target.value);
    }

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handlekeyword}/>

            </form>
        </div>
        
    )
}
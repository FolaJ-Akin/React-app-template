import React, { useEffect, useState } from "react";
import axios from "axios";
import Keyboard from "./components/Keyboard"

function App(): JSX.Element {
  const [randWord, setrandWord] = useState<string[]>([""]);
  const [chunk,setchunk] = useState<string[]>([])


  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/",
    params: { random: true, letters: "5", limit: "100", page: "1" },
    headers: {
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      "X-RapidAPI-Key": "34d2ff4367msh223c9f3ef28bc86p15a053jsnba862eab98be",
    },
  };
  // function checkAnswer(chunk:string[]){
  //   if(chunk === randWord[0].split('')){
  //     const correctAns = true
  //   }else{
  //     const correctAns = false
  //   }
  // };

  console.log("this is chunk", chunk)
  // if (chunk[0].length()){

  // }


  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.word);
        setrandWord(response.data.word);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>YAMDLE App</h1>
      The word of the day is: {randWord}
      {}
      <hr/>
      <Keyboard handlechunk={(chunkbit:string[]) => setchunk(chunkbit) }/>
    </div>
  );
}

export default App;

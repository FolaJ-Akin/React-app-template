import React, { useEffect, useState } from "react";
import axios from "axios";
import Keyboard from "./components/Keyboard"
import LetterGrid from "./components/LetterGrid";

function App(): JSX.Element {
  const [randWord, setrandWord] = useState<string[]>([""]);
  const [swich, setswitch] = useState<boolean>(false)
  const [currentGuess, setCurrentGuess] = useState<string[]>([])
  const [attempt,setAttempt] = useState<number>()

  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/",
    params: { random: true, letters: "5", limit: "100", page: "1" },
    headers: {
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      "X-RapidAPI-Key": "34d2ff4367msh223c9f3ef28bc86p15a053jsnba862eab98be",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        //console.log(response.data.word);
        setrandWord(response.data.word);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>YAMDLE App</h1>
      <LetterGrid currentGuess = {currentGuess}/>
      <hr/>
      The word of the day is: {randWord}
      {swich && <h2>You guessed correctly </h2>  }
      <hr/>
      <Keyboard randWord = {randWord}
      handleSwitch={(switcher:boolean)=> setswitch(switcher)}
      getCurrentGuess = {(guess:string[]) => setCurrentGuess(guess)}
      getCurrentAttempt = {(attemptNum:number) => setAttempt(attemptNum)}
      />
    </div>
  );
}

export default App;

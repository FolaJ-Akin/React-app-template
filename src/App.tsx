import React, { useEffect, useState } from "react";
import axios from "axios";
import Keyboard from "./components/Keyboard";
import LetterGrid from "./components/LetterGrid";

function App(): JSX.Element {
  const [randWord, setrandWord] = useState<string[]>(["eelam"]);
  const [swich, setswitch] = useState<boolean>(false);
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [truthyArrayCss, setTruthyArrayCss] = useState<number[][]>([]);
  const [attempt, setAttempt] = useState<number>(0);
  const [change, setchange] = useState<number>(0);

  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/",
    params: { random: true, letters: "5", limit: "100", page: "1" },
    headers: {
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      "X-RapidAPI-Key": "34d2ff4367msh223c9f3ef28bc86p15a053jsnba862eab98be",
    },
  };
  const dictreq = {
    method: "GET",
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${randWord}`,
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setrandWord(response.data.word);
      })

      .catch(function (error) {
        //console.error(error);
      });

    // eslint-disable-next-line
  }, [change]);

  useEffect(() => {
    axios.request(dictreq).catch(() => {
      setchange(change + 1);
    });
    // eslint-disable-next-line
  }, [randWord]);

  const attemptNum = (attempt: number): number => {
    let count;
    if (attempt < 1) {
      count = 1;
    } else {
      count = attempt / 5 + 1;
    }
    return count;
  };

  return (
    <div>
      <h1>YAMDLE App</h1>
      <LetterGrid currentGuess={currentGuess} truthyArray={truthyArrayCss} />
      {/* <hr/> */}
      {/* The word of the day is: {randWord} */}
      {swich && (
        <h2>You guessed correctly in {attemptNum(attempt)}/6 Guesses</h2>
      )}
      {!swich && attempt === 30 && <h2>The correct word was: {randWord}</h2>}
      {/* <hr/> */}
      <Keyboard
        randWord={randWord}
        swich={swich}
        attempt={attempt}
        setAttempt={(attemptNum: number) => setAttempt(attemptNum)}
        handleSwitch={(switcher: boolean) => setswitch(switcher)}
        getCurrentGuess={(guess: string[]) => setCurrentGuess(guess)}
        getTruthyArray={(truthyArray: number[][]) =>
          setTruthyArrayCss((prevarray) => [...prevarray, truthyArray[0]])
        }
        truthyArray={truthyArrayCss}
      />
    </div>
  );
}

export default App;

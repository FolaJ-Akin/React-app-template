import { useState } from "react";
import alphabetObjectarray from "../utils/alphabetObjectArray";
import alphabetObject from "../utils/alphabetInterface";
import checkContained from "../utils/checkLettersContains";

interface prop {
  //setchunk?:string[]
  //handlechunk(chunkbit: string[]):void;
  randWord: string[];
  currentGuess: string[];
  handleSwitch(switcher: boolean): void;
  getCurrentGuess(guess: string[]): void;
  getTruthyArray(truthyArray: number[][]): void;
  truthyArray: number[][];
  swich: boolean;
  //getCurrentAttempt(attemptNum:number):void;
}
export default function Keyboard({
  randWord,
  swich,
  handleSwitch,
  getCurrentGuess,
  getTruthyArray,
  currentGuess,
}: prop): JSX.Element {
  const [letterarray, setletterarray] = useState<string[]>([]);
  const [attempt, setAttempt] = useState<number>(0);

  //console.log("this random word from keyboard", randWord)
  function checkAnswer(chunk: string[]) {
    if (chunk.length % 5 === 0 && chunk.length > 0) {
      if (chunk.join("") === randWord.toString()) {
        return true;
      } else {
        if (attempt < 30) {
          setAttempt(attempt + 5);
        } else {
          setAttempt(30);
        }
        return false;
      }
    } else {
      return false;
    }
  }

  const handleEnter = () => {
    const ans = letterarray.slice(attempt, attempt + 5);
    handleSwitch(checkAnswer(ans));
    console.log("current ans is", ans);
    if (ans.length > 4) {
      const cssTruthyArray = checkContained(
        letterarray.slice(attempt, attempt + 5),
        randWord
      );
      getTruthyArray([cssTruthyArray]);
      //console.log("cssTruthyArray",cssTruthyArray)
      //console.log("truthyarray[][]",truthyArray)
      //console.log("truthyArray[0]",truthyArray[0]?truthyArray[0][0]:"Box")
    }
  };

  const handleOnletterClick = (oneletter: string) => {
    if (letterarray.length < attempt + 5 && letterarray.length < 30 && !swich) {
      setletterarray([...letterarray, oneletter]);
      // const slice = ([...letterarray,oneletter].reverse()).slice(0,5).reverse()
      // setletterarray(slice)
      getCurrentGuess([...letterarray, oneletter]);
    }
  };
  const backspace = "\u27F5";
  const handleBackspace = () => {
    if (letterarray.length - attempt > 0 && !swich) {
      const prevLetterarray = letterarray;
      prevLetterarray.splice(letterarray.length - 1, 1);
      setletterarray([...prevLetterarray]);
      getCurrentGuess([...prevLetterarray]);
    }

    //console.log("handleback space was clicked", prevLetterarray)
  };
  const stylebackspace = {
    width: 85,
    height: 90,
    marginLeft: 5,
    marginTop: 3,
    borderRadius: 15,
  };
  return (
    <div>
      {/* Keyboard Component
            <br/>
            {letterarray}
            <br/> */}

      <div className="keyboardContainer">
        <div className="row1">
          {alphabetObjectarray.slice(0, 10).map((oneletter: alphabetObject) => (
            <div
              className="CharKey"
              key={oneletter.id}
              onClick={() => handleOnletterClick(oneletter.letter)}
            >
              {oneletter.letter}
            </div>
          ))}
        </div>
        <div className="row2">
          {alphabetObjectarray
            .slice(10, 19)
            .map((oneletter: alphabetObject) => (
              <div
                className="CharKey"
                key={oneletter.id}
                onClick={() => handleOnletterClick(oneletter.letter)}
              >
                {oneletter.letter}
              </div>
            ))}
        </div>

        <div className="row3">
          {" "}
          <button style={stylebackspace} onClick={handleEnter}>
            Enter
          </button>{" "}
          {alphabetObjectarray
            .slice(19, 26)
            .map((oneletter: alphabetObject) => (
              <div
                className="CharKey"
                key={oneletter.id}
                onClick={() => handleOnletterClick(oneletter.letter)}
              >
                {oneletter.letter}
              </div>
            ))}
          <button style={stylebackspace} onClick={handleBackspace}>
            {backspace}
          </button>
        </div>
      </div>
    </div>
  );
}

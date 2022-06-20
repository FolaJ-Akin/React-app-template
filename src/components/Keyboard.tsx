import { useState } from "react";
import alphabetObjectarray from "../utils/alphabetObjectArray";
import {alphabetObject} from "../utils/alphabetInterface";
import checkContained from "../utils/checkLettersContains";
import axios from "axios";
import classidObjBuilder from "../utils/classIdObjBuilder";

interface prop {
  randWord: string[];
  attempt: number;
  setAttempt(attemptNum: number): void;
  handleSwitch(switcher: boolean): void;
  getCurrentGuess(guess: string[]): void;
  getTruthyArray(truthyArray: number[][]): void;
  truthyArray: number[][];
  swich: boolean;
}
export default function Keyboard({
  randWord,
  swich,
  handleSwitch,
  getCurrentGuess,
  getTruthyArray,
  setAttempt,
  attempt,
  truthyArray
}: prop): JSX.Element {
  const [letterarray, setletterarray] = useState<string[]>([]);
  const [classid,setclassid] = useState<alphabetObject[]>([])
  
  function checkAnswer(chunk: string[]) {
    if (chunk.length % 5 === 0 && chunk.length > 0) {
      if (chunk.join("") === randWord.toString().toUpperCase()) {
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
  const currentAnswer = letterarray.slice(attempt, attempt + 5)
  function goodRequest () {
    if (currentAnswer.length > 4) {
      const cssTruthyArray = checkContained(
        currentAnswer,
        randWord
      );
      const collectionArr = classidObjBuilder(currentAnswer,randWord)
      handleCollection(collectionArr,classid)
      setclassid([...classid,...collectionArr])
      getTruthyArray([cssTruthyArray]);
    }
  }
  function handleCollection (collectionArr:alphabetObject[],classid:alphabetObject[]){
    let count=-1;
    for(const item of classid){
      count +=1;
      for(const value of collectionArr){
        if(item.letter===value.letter){
          if(item.classId===1&&value.classId===2){
            classid.splice(count,1)
          } 
        }
      }
    }
  }

  function  realWordCheck() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentAnswer.join('').toLowerCase()}`)
      .then( ()=>{
       goodRequest();
       handleSwitch(checkAnswer(currentAnswer))
      })
      .catch(() => {
        window.alert(`Oi yammm! '${currentAnswer.join('').toLowerCase()}' isn't a real word!!!`);
      });
    // eslint-disable-next-line
  }

  const handleOnletterClick = (oneletter: string) => {
    if (letterarray.length < attempt + 5 && letterarray.length < 30 && !swich) {
      setletterarray([...letterarray, oneletter]);
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

  };




  function find(oneletter:alphabetObject){
    for(const classobj of classid){
      if(oneletter.id === classobj.id){
        if(classobj.classId===undefined){
          return "CharKey"
        }else if(classobj.classId===0){
          return "CharKey0"
        }else if (classobj.classId){
          return  "CharKey"+classobj.classId
        }
      }
    }
    return "CharKey"
  }
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
              className={find(oneletter)}
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
                className={find(oneletter)}
                key={oneletter.id}
                onClick={() => handleOnletterClick(oneletter.letter)}
              >
                {oneletter.letter}
              </div>
            ))}
        </div>

        <div className="row3">
          {" "}
          <button style={stylebackspace} onClick={realWordCheck}>
            Enter
          </button>{" "}
          {alphabetObjectarray
            .slice(19, 26)
            .map((oneletter: alphabetObject) => (
              <div
                className={find(oneletter)}
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

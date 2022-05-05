import { useState } from "react";
import alphabetObjectarray from "../utils/alphabetObjectArray";
import alphabetObject from "../utils/alphabetInterface";
interface prop{
        //setchunk?:string[]
        //handlechunk(chunkbit: string[]):void;
        randWord: string[];
        handleSwitch(switcher:boolean):void;
        getCurrentGuess(guess:string[]):void;
        getCurrentAttempt(attemptNum:number):void;
    }
export default function Keyboard({ randWord, handleSwitch, getCurrentGuess, getCurrentAttempt}:prop):JSX.Element {
    const [letterarray,setletterarray] = useState<string[]>([])
    
    //console.log("this random word from keyboard", randWord)
    function checkAnswer(chunk:string[]){
        if(chunk.join('') === (randWord.toString())){
            return true;
        }else{
            return false
        }
      }

    const handleEnter = () => {
        handleSwitch(checkAnswer(letterarray))
    }

    const handleOnletterClick = (oneletter:string) => {
        if (letterarray.length <= 30  ){
            setletterarray(([...letterarray,oneletter].reverse()).slice(0,5).reverse())
            const slice = ([...letterarray,oneletter].reverse()).slice(0,5).reverse()
            setletterarray(slice)
            getCurrentGuess([...letterarray,oneletter])
        }
    }
    const backspace = '\u27F5';
    const handleBackspace = () => {
        const prevLetterarray = letterarray
        prevLetterarray.pop()
        setletterarray([...prevLetterarray]);
        getCurrentGuess([...prevLetterarray]);
        console.log("handleback space was clicked", prevLetterarray)
    }
    return (
        <div>
            Keyboard Component
            <br/>
            {letterarray}
            <br/>
            <button onClick={handleEnter} >Enter</button>
            <div className="keyboardContainer">
            {alphabetObjectarray.map((oneletter:alphabetObject)=> <div className="indvletter" key={oneletter.id} onClick={()=> handleOnletterClick(oneletter.letter)} >{oneletter.letter}</div>)}
            </div>
            <button onClick={handleBackspace}>{backspace}</button>
        </div>
    );
}

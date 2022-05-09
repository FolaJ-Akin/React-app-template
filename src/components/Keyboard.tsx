import { useState } from "react";
import alphabetObjectarray from "../utils/alphabetObjectArray";
import alphabetObject from "../utils/alphabetInterface";
interface prop{
        //setchunk?:string[]
        //handlechunk(chunkbit: string[]):void;
        randWord: string[];
        handleSwitch(switcher:boolean):void;
        getCurrentGuess(guess:string[]):void;
        //getCurrentAttempt(attemptNum:number):void;
    }
export default function Keyboard({ randWord, handleSwitch, getCurrentGuess,/* getCurrentAttempt*/}:prop):JSX.Element {
    const [letterarray,setletterarray] = useState<string[]>([])
    const [attempt,setAttempt] = useState<number>(0)

    //console.log("this random word from keyboard", randWord)
    function checkAnswer(chunk:string[]){
        console.log(chunk.length % 5)
        if((chunk.length % 5 === 0)&&(chunk.length>0 )){
            if(chunk.join('') === (randWord.toString())){
                return true;
            }else{
                if(attempt<30){
                    setAttempt(attempt+5)
                }else{
                    setAttempt(30)
                }
                return false
            }  
        }else{
            return false
        }
        
      }

    const handleEnter = () => {
        const ans = letterarray.slice(attempt,attempt +5)
        handleSwitch(checkAnswer(ans))
        console.log("current ans is",ans)
    }

    const handleOnletterClick = (oneletter:string) => {
        if ((letterarray.length < attempt + 5) && (letterarray.length < 30) ){
            setletterarray(([...letterarray,oneletter]))
            //const slice = ([...letterarray,oneletter].reverse()).slice(0,5).reverse()
            //setletterarray(slice)
            getCurrentGuess([...letterarray,oneletter])
        }
    }
    const backspace = '\u27F5';
    const handleBackspace = () => {
        if(letterarray.length-attempt>0){
            const prevLetterarray = letterarray
            prevLetterarray.splice(letterarray.length-attempt-1,1 )
            setletterarray([...prevLetterarray]);
            getCurrentGuess([...prevLetterarray]);
        }

        //console.log("handleback space was clicked", prevLetterarray)
    }
    return (
        <div>
            Keyboard Component
            <br/>
            {letterarray}
            <br/>
            <button onClick={handleEnter} >Enter</button>
            <div className="keyboardContainer">
            {alphabetObjectarray.map((oneletter:alphabetObject)=> <div className="CharKeyboard" key={oneletter.id} onClick={()=> handleOnletterClick(oneletter.letter)} >{oneletter.letter}</div>)}
            </div>
            <button onClick={handleBackspace}>{backspace}</button>
        </div>
    );
}

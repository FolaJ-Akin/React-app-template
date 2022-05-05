// import { useState } from "react";

interface props{
    currentGuess:string[]; 
}
export default function LetterGrid({currentGuess}:props):JSX.Element {

    
    return(
    <>
    Grid: 
    <div>
    {currentGuess.map((oneletter) => <div className="Box" key={oneletter + Math.random()}> {oneletter}</div>)}
    </div>
    </>
)
}
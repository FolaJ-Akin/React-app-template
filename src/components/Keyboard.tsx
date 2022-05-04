import { useState } from "react";
import alphabetObjectarray from "../utils/alphabetObjectArray";
import alphabetObject from "../utils/alphabetInterface";
interface prop{
        //setchunk?:string[]
        handlechunk(chunkbit: string[]):void;
    }
export default function Keyboard({handlechunk}:prop):JSX.Element {
    const [letterarray,setletterarray] = useState<string[]>([])

    
    
    const handleOnletterClick = (oneletter:string) => {
        setletterarray(([...letterarray,oneletter].reverse()).slice(0,5).reverse())
        const slice = ([...letterarray,oneletter].reverse()).slice(0,5).reverse()
        handlechunk(slice)
    }
    //() =>setchunk(letterarray)

    //console.log(alphabetObjectarray)
    return (
        <div>
            Keyboard Component
            <br/>
            {letterarray}
            <br/>
            <div className="keyboardContainer">
            {alphabetObjectarray.map((oneletter:alphabetObject)=> <div className="indvletter" key={oneletter.id} onClick={()=> handleOnletterClick(oneletter.letter)} >{oneletter.letter}</div>)}
            </div>
        </div>
    );
}

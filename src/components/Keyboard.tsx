import alphabetObjectarray from "../utils/alphabetObjectArray";
export default function Keyboard():JSX.Element {
     
    
    console.log(alphabetObjectarray)
    return (
        <div>
            Keyboard Component
            <br/>
            <div className="keyboardC">
            {alphabetObjectarray.map((oneletter)=> <div className="indvletter" key={oneletter.id}>{oneletter.letter}</div>)}
            </div>
        </div>
    );
}

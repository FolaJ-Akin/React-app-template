import objConverter from "../utils/objConverter"
interface props{
    currentGuess:string[]; 
}
export default function LetterGrid({currentGuess}:props):JSX.Element {
    const letterDisplayArray = [objConverter(currentGuess.slice(0,5)),objConverter(currentGuess.slice(5,10)),objConverter(currentGuess.slice(10,15)),objConverter(currentGuess.slice(15,20)),objConverter(currentGuess.slice(20,25)),objConverter(currentGuess.slice(25,30))]
    console.log("curentguess slice(0,5)",objConverter(currentGuess.slice(0,5)) )
    console.log("letterDisplayArray[0]", letterDisplayArray[0])


    return(
    <>
    Grid: 
    <div>
    {letterDisplayArray[0].map((oneletter) => <div className={"Box"+oneletter.id} key={oneletter.id}> {oneletter.letter} </div>)}
    <hr/>
    {letterDisplayArray[1].map((oneletter) => <div className={"Box"+oneletter.id} key={oneletter.id}> {oneletter.letter} </div>)}
    <hr/>
    {letterDisplayArray[2].map((oneletter) => <div className={"Box"+oneletter.id} key={oneletter.id}> {oneletter.letter} </div>)}
    <hr/>
    {letterDisplayArray[3].map((oneletter) => <div className={"Box"+oneletter.id} key={oneletter.id}> {oneletter.letter} </div>)}
    <hr/>
    {letterDisplayArray[4].map((oneletter) => <div className={"Box"+oneletter.id} key={oneletter.id}> {oneletter.letter} </div>)}
    <hr/>
    {letterDisplayArray[5].map((oneletter) => <div className={"Box"+oneletter.id} key={oneletter.id}> {oneletter.letter} </div>)}
    </div>
    </>
)
}
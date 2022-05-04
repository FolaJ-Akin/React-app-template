import alphabetObject from "./alphabetInterface";

const alphabet = "qwertyuiopasdfghjklzxcvbnm"
const alphabetArray = alphabet.split('')
const alphabetObjectarray: alphabetObject[] = []
for( const indv of alphabetArray){
   const alphabetObject:alphabetObject = {
       letter: "",
       id: 0
   };
   alphabetObject["letter"] = indv
   alphabetObject["id"]= alphabetArray.indexOf(indv) + 1
   alphabetObjectarray.push(alphabetObject)
}
export default alphabetObjectarray
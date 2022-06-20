import { alphabetObject } from "./alphabetInterface";
import alphabetObjectarray from "./alphabetObjectArray";
import objConverter from "./objConverter";

export default function classidObjBuilder (
    letterarray: string[],
    currentWord: string[]
  ): alphabetObject[] {
    const objLetterArray = objConverter(letterarray);
    const objCurrentWord = objConverter(currentWord);
    const collectionArr = []
    for (let i = 0; i < 5; i++) {
        if (
          objLetterArray[i].id === objCurrentWord[i].id &&
          objLetterArray[i].letter === objCurrentWord[i].letter
        ) {
          for(const alpha of alphabetObjectarray){
              if (alpha.letter === objLetterArray[i].letter){
                    objLetterArray[i].classId=2
                    objLetterArray[i].id = alpha.id
                    collectionArr.push(objLetterArray[i])
              }
          }
        } else if (currentWord.includes(letterarray[i].toLowerCase())) {
            for(const alpha of alphabetObjectarray){
                if (alpha.letter === objLetterArray[i].letter && objLetterArray[i].classId!==2){
                      objLetterArray[i].classId=1
                      objLetterArray[i].id = alpha.id
                      collectionArr.push(objLetterArray[i])
                }
            }
        } else {
            for(const alpha of alphabetObjectarray){
                if (alpha.letter === objLetterArray[i].letter && objLetterArray[i].classId!==(2||1)){
                      objLetterArray[i].classId=0
                      objLetterArray[i].id = alpha.id
                      collectionArr.push(objLetterArray[i])
                }
            }
        }
    }
    return collectionArr
  }
import {alphabetObject} from "./alphabetInterface";

function objConverter(attemptArray: string[]): alphabetObject[] {
  const attemptObjectarray: alphabetObject[] = [];
  let count = 1;
  for (const indv of attemptArray) {
    const indvattemptObject: alphabetObject = {
      letter: "",
      id: 0,
    };
    indvattemptObject["letter"] = indv.toUpperCase();
    indvattemptObject["id"] = count;
    attemptObjectarray.push(indvattemptObject);
    count += 1;
  }
  return attemptObjectarray;
}
export default objConverter;

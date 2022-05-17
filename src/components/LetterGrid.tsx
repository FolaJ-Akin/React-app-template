import objConverter from "../utils/objConverter";
interface props {
  currentGuess: string[];
  truthyArray: number[][];
}

export default function LetterGrid({
  currentGuess,
  truthyArray,
}: props): JSX.Element {
  //console.log(currentGuess)
  const intermeditate = ["", "", "", "", "", ""];

  function transform(slice: string[], interSlice: string[]) {
    const itter = slice.length;
    for (let i = 0; i < itter; i++) {
      const letter = slice[i];
      interSlice[i] = letter;
    }
    return interSlice;
  }
  // let lineOne = intermeditate.slice(0,5)
  const layerOne = transform(
    currentGuess.slice(0, 5),
    intermeditate.slice(0, 5)
  );
  const layerTwo = transform(
    currentGuess.slice(5, 10),
    intermeditate.slice(0, 5)
  );
  const layerThree = transform(
    currentGuess.slice(10, 15),
    intermeditate.slice(0, 5)
  );
  const layerFour = transform(
    currentGuess.slice(15, 20),
    intermeditate.slice(0, 5)
  );
  const layerFive = transform(
    currentGuess.slice(20, 25),
    intermeditate.slice(0, 5)
  );
  const layerSix = transform(
    currentGuess.slice(25, 30),
    intermeditate.slice(0, 5)
  );

  const letterDisplayArray = [
    objConverter(layerOne),
    objConverter(layerTwo),
    objConverter(layerThree),
    objConverter(layerFour),
    objConverter(layerFive),
    objConverter(layerSix),
  ];

  return (
    <>
      {/* Grid:  */}
      <div className="LetterGridContainer">
        <div className="gridLayer">
          {letterDisplayArray[0].map((oneletter) => (
            <div
              className={
                truthyArray[0]
                  ? "Box" + truthyArray[0][oneletter.id - 1]
                  : "Box"
              }
              key={oneletter.id}
            >
              {" "}
              {oneletter.letter}{" "}
            </div>
          ))}
        </div>
        <hr />
        <div className="gridLayer">
          {letterDisplayArray[1].map((oneletter) => (
            <div
              className={
                truthyArray[1]
                  ? "Box" + truthyArray[1][oneletter.id - 1]
                  : "Box"
              }
              key={oneletter.id}
            >
              {" "}
              {oneletter.letter}{" "}
            </div>
          ))}
        </div>
        <hr />
        <div className="gridLayer">
          {letterDisplayArray[2].map((oneletter) => (
            <div
              className={
                truthyArray[2]
                  ? "Box" + truthyArray[2][oneletter.id - 1]
                  : "Box"
              }
              key={oneletter.id}
            >
              {" "}
              {oneletter.letter}{" "}
            </div>
          ))}
        </div>
        <hr />
        <div className="gridLayer">
          {letterDisplayArray[3].map((oneletter) => (
            <div
              className={
                truthyArray[3]
                  ? "Box" + truthyArray[3][oneletter.id - 1]
                  : "Box"
              }
              key={oneletter.id}
            >
              {" "}
              {oneletter.letter}{" "}
            </div>
          ))}
        </div>
        <hr />
        <div className="gridLayer">
          {letterDisplayArray[4].map((oneletter) => (
            <div
              className={
                truthyArray[4]
                  ? "Box" + truthyArray[4][oneletter.id - 1]
                  : "Box"
              }
              key={oneletter.id}
            >
              {" "}
              {oneletter.letter}{" "}
            </div>
          ))}
        </div>
        <hr />
        <div className="gridLayer">
          {letterDisplayArray[5].map((oneletter) => (
            <div
              className={
                truthyArray[5]
                  ? "Box" + truthyArray[5][oneletter.id - 1]
                  : "Box"
              }
              key={oneletter.id}
            >
              {" "}
              {oneletter.letter}{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function checkKeyboard(
  letterarray: string[],
  currentWord: string[]
): string[] {
  const wrongLetter: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (!currentWord.includes(letterarray[i].toLowerCase())) {
      wrongLetter.push(letterarray[i]);
    }
  }
  //   console.log("wrongLetter",wrongLetter)
  return wrongLetter;
}

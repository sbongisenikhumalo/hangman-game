// File: src/utils.js
export function pickRandomWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
}

export function checkWin(word, guessedLetters) {
  return word.split("").every((letter) => guessedLetters.includes(letter));
}

export function countIncorrect(word, guessedLetters) {
  return guessedLetters.filter((letter) => !word.includes(letter)).length;
}

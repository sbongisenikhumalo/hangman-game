import React, { useState } from "react";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import HangmanImage from "./components/HangmanImage";
import MessageModal from "./components/MessageModal";
import HelpModal from "./components/HelpModal";
import words from "./words";
import "./App.css";

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)].toLowerCase();
};

function App() {
  const [selectedWord, setSelectedWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const maxIncorrect = 6;

  const correctLetters = selectedWord
    .split("")
    .filter((letter) => guessedLetters.includes(letter));
  const isWinner = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectGuesses >= maxIncorrect;

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return;
    setGuessedLetters((prev) => [...prev, letter]);

    if (!selectedWord.includes(letter)) {
      setIncorrectGuesses((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setSelectedWord(getRandomWord());
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  return (
    <div className="App">
      <h1>🎉 Hangman Game 🎉</h1>
      <button className="help-button" onClick={() => setShowHelp(true)}>
        Help
      </button>
      <HangmanImage step={incorrectGuesses} />
      <WordDisplay word={selectedWord} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} />
      <MessageModal
        isWinner={isWinner}
        isLoser={isLoser}
        word={selectedWord}
        onRestart={resetGame}
      />
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}

export default App;

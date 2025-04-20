import React from "react";

const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

function Keyboard({ guessedLetters, onGuess }) {
  return (
    <div className="keyboard">
      {KEYS.map((key) => (
        <button
          key={key}
          onClick={() => onGuess(key)}
          disabled={guessedLetters.includes(key)}
          className="key-button"
        >
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;

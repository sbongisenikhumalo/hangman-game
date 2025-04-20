// File: src/components/WordDisplay.js
import React from "react";

function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word-display">
      {word.split("").map((char, idx) => (
        <span key={idx} className="letter">
          {guessedLetters.includes(char) ? char : "_"}
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;

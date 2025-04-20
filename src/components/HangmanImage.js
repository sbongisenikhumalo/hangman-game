import React from "react";

function HangmanImage({ step }) {
  return (
    <div className="hangman-image">
      <p>Incorrect guesses: {step}</p>
      <p>{"💀".repeat(step)}</p>
    </div>
  );
}

export default HangmanImage;

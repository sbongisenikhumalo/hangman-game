import React from "react";

function HelpModal({ onClose }) {
  return (
    <div className="modal">
      <h2>How to Play</h2>
      <p>
        Guess the word one letter at a time. You can make up to 6 incorrect
        guesses before the game is over.
      </p>
      <p>If you guess all letters correctly, you win!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default HelpModal;

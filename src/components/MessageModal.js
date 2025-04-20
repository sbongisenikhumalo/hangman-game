// File: src/components/MessageModal.js
import React from "react";

function MessageModal({ isWinner, isLoser, word, onRestart }) {
  if (!isWinner && !isLoser) return null;
  return (
    <div className="modal">
      <h2>{isWinner ? "You won! 🎉" : "You lost 😢"}</h2>
      <p>
        The word was: <strong>{word}</strong>
      </p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default MessageModal;

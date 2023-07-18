import React from "react";
import "./Game.css";
const Game = ({ gameOver }) => {
  return (
    <div>
      <p>Game</p>
      <button onClick={gameOver}>Perdeu</button>
    </div>
  );
};

export default Game;

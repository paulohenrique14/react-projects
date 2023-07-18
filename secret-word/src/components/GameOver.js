import React from "react";
import "./GameOver.css";

const GameOver = ({ retry }) => {
  return (
    <div>
      <p>Errou</p>
      <button onClick={retry}>tente novamente</button>
    </div>
  );
};

export default GameOver;

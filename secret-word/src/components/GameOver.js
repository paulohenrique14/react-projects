import React from "react";
import "./GameOver.css";

const GameOver = ({ retry, pickedWord, score }) => {
  return (
    <div>
      <p>Errou! A palavra era 
        <span> {pickedWord}</span>
      </p>
      <p>
        <span>A sua pontuação foi de: {score}</span>
      </p>
      <button onClick={retry}>tente novamente</button>
    </div>
  );
};

export default GameOver;

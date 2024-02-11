import React from "react";
import "./Game.css";
import { useRef, useState } from "react"
                               
const Game = ({ gameOver, pickedWord, pickedCategory, guesses, score, guessedLetters, wrongLetters, letters, verifyLetter}) => {
  
  const [letterInput, setLetterInput] = useState('')

  const handleSubmitLetter = (e) => {
    e.preventDefault();
    console.log(letterInput)
    verifyLetter(letterInput)
    setLetterInput('')
    inputRef.current.focus()
  }

  const inputRef = useRef(null)
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <div className="wordContainer">
        {letters.map((letter, i) =>(
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
       {/* <span className="letter">A</span>
       <span className="blankSquare"></span>  */}
      </div>
    < div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form onSubmit={handleSubmitLetter}>
          <input 
            type="text" 
            name="letter" 
            maxLength={1}
            onChange={(e) => setLetterInput(e.target.value)}
            value={letterInput} 
            required 
            ref={inputRef}/>
          <button>Jogar</button>
        </form>
      </div>
    <div className="wrongLettersContainer">
      <p>Letras já utilizadas:</p>
      {wrongLetters.map((letterWrong, i) => (
        <span key={i}>{letterWrong}, </span>
      ))}
      {/* <span>{wrongLetters}, </span> */}
    </div>
    <p className="guesses">
        <span>Tentativas: {guesses}</span>
    </p>
    </div>
  );
};

export default Game;

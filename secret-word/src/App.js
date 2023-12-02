//CSS
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//Data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)
  const [guessedLetters, setGuessedLetters] = useState([]);//useState(['a', 'e', 'i', 'o', 'u']);
  const [wrongLetters, setWrongLetters] = useState([])


  //pick random word and category
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };


  //start the game
  const startGame = () => {
    //pick word and pick category
    const { word, category } = pickWordAndCategory()

    //array de letras
    let wordLetters = word.split('');
    

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //escolhe palavra categoria e as divide
    setPickedWord(word)
    setPickedCategory(category);
    setLetters(wordLetters)


    setGameStage(stages[1].name)
    console.log(word)
  };

  //process the letter input
  const verifyLetter = (letterInput) => {


    //letters é a palvra já separada por letras
    let treatedLetter = letterInput.toLowerCase();

    if (guessedLetters.includes(treatedLetter) || (wrongLetters.includes(treatedLetter))){
      return;
    }
    //letra certa
    if (letters.includes(treatedLetter)){
      setGuessedLetters((actualGuessedLetters) =>[
        ...actualGuessedLetters,
        treatedLetter
      ])
    }else{  //letra errada
      setWrongLetters((actualWrongLetter) => [
        ...actualWrongLetter,
        treatedLetter
     ])
     setGuesses(guesses - 1)
   }

  };
  //game over
  const gameOver = () => {
    setGameStage(stages[2].name);
  };


  //quando as tentativas estiverem = 0
  useEffect(() =>{
    if ((guesses <= 0)){
      gameOver()

    }
  })

  //Quando ganhar
  useEffect(() => {
    const uniqueLetters = [...new Set (letters)]

    //condição para dar a vitória quando tudo estiver completo
    if ((uniqueLetters.length === guessedLetters.length) && (guessedLetters.length > 0)){
      resetValues();
      handleScore();
      startGame();

    }
  })

  //função de reset de valores
  const resetValues = () =>{
    setPickedWord('');
    setPickedCategory('');
    setLetters('')
    setGuessedLetters([])
    setGuesses(3)
    setWrongLetters((prevWrongLetters) => []);
  }

  const handleScore = () => {
    setScore(score +100)
  }

  //retry
  const retry = () => {
    setScore(0);
    resetValues();
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}

      {gameStage === "game" && <Game
                                gameOver       = {gameOver}
                                pickedWord     = {pickedWord}
                                pickedCategory = {pickedCategory}
                                guesses        = {guesses}
                                score          = {score}
                                guessedLetters = {guessedLetters}
                                wrongLetters   = {wrongLetters}
                                letters        = {letters}
                                verifyLetter   = {verifyLetter} />}

      {gameStage === "end" && <GameOver 
                                retry={retry} 
                                pickedWord = {pickedWord} 
                                score = {score} />}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ScoreBoard } from "./components/ScoreBoard";
import { fetchDogData } from "./helpers/dogHelpers";
import { Gameboard } from "./components/Gameboard";

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [dogImages, setDogImages] = useState([]);
  const [numGames, setNumGames] = useState(0); // used to start a new game

  useEffect(() => {
    fetchDogData(setDogImages);
  }, [numGames]);  

  return (
    <>
      <div className="header">
        <Header />
        <ScoreBoard currScore={currScore} highScore={highScore} />
      </div>
      <Gameboard dogImages={dogImages} 
        updateDogImages={setDogImages}
        currScore={currScore}
        updateCurrScore={setCurrScore}
        highScore={highScore}
        updateHighScore={setHighScore}
        numGames={numGames}
        updateNumGames={setNumGames}
      />
    </>
  );
}

export default App;

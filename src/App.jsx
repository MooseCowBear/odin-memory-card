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
  const [numGames, setNumGames] = useState(0);

  useEffect(() => {
    fetchDogData(setDogImages);
  }, [numGames]); // for now, just on mount, eventually need on new game

  // when do we have a new game? when the currScore is reset to 0, ie.
  // when a dog has been clicked twice. 

  return (
    <>
      <Header />
      <ScoreBoard currScore={currScore} highScore={highScore} />
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

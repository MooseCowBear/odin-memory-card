import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import { ScoreBoard } from './components/ScoreBoard';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header />
      <ScoreBoard 
        currScore={currScore}
        highScore={highScore}
      />
    </>
  )
}

export default App

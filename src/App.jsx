import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header';
import { ScoreBoard } from './components/ScoreBoard';
import { fetchDogData } from './helpers/dogHelpers';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetchDogData(setDogImages);
  }, []); // for now, just on mount, eventually need on new game

  return (
    <>
      <Header />
      <ScoreBoard 
        currScore={currScore}
        highScore={highScore}
      />
      <div className='gameboard'>
        {dogImages.map((dog, index) => {
          return (
          <div key={index}>          
            <img className="dog-image" src={dog}></img>
          </div>
          );
        })}
      </div>
    </>
  )
}

export default App

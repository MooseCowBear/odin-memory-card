import PropTypes from "prop-types";
import { updateScores, shuffle, gameOver } from "../helpers/gameBoardHelpers";
import "../styles/Gameboard.css";

export function Gameboard({
  dogImages,
  updateDogImages,
  currScore,
  updateCurrScore,
  highScore,
  updateHighScore,
  numGames,
  updateNumGames,
}) {
  const clickHandler = (e, index) => {
    let data = [...dogImages];
    if (data[index].clicked === true) {
      updateCurrScore(0);
      updateNumGames(numGames + 1);
      return;
    }
    data[index].clicked = true;
    updateScores(currScore + 1, highScore, updateCurrScore, updateHighScore);

    // now check if over now that arr has been updated
    const over = gameOver(data);

    if (over) {
      updateNumGames(numGames + 1);
      return;
    }

    shuffle(data);
    updateDogImages(data);
  };

  if (dogImages.length === 0) {
    return (
      <div className="error">
        Oh no! We have yet to find any dogs :(
        <span>If the problem persists, try reloading the page</span>
      </div>
    );
  }

  return (
    <div className="gameboard">
      {dogImages.map((dog, index) => {
        return (
          <button
            key={index}
            className="dog-card"
            onClick={(e) => {
              clickHandler(e, index);
            }}
          >
            <img className="dog-image" src={dog.image}></img>
          </button>
        );
      })}
    </div>
  );
}

Gameboard.propTypes = {
  dogImages: PropTypes.array.isRequired,
  updateDogImages: PropTypes.func.isRequired,
  currScore: PropTypes.number.isRequired,
  updateCurrScore: PropTypes.func.isRequired,
  highScore: PropTypes.number.isRequired,
  updateHighScore: PropTypes.func.isRequired,
  numGames: PropTypes.number.isRequired,
  updateNumGames: PropTypes.func.isRequired,
};

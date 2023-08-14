import PropTypes from "prop-types";
import { updateScores } from "../helpers/gameBoardHelpers";

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
  // take the dog images, draw the board and add click handlers...
  // want some data attribute on the cards to denote whether they have been clicked
  // which updates with the click and also updates the score appropriately

  console.log(dogImages);

  const clickHandler = (e, index) => {
    console.log("dog has been clicked", index);
    let data = [...dogImages];
    if (data[index].clicked === true) {
      updateCurrScore(0);
      updateNumGames(numGames + 1); // to cause a new fetch
      return;
    }
    data[index].clicked = true;
    updateScores(currScore + 1, highScore, updateCurrScore, updateHighScore);

    // still need to shuffle the data, here...
    updateDogImages(data);
  };

  return (
    <div className="gameboard">
      {dogImages.map((dog, index) => {
        return (
          <button
            key={index}
            onClick={(e) => {
              clickHandler(e, index);
            }}
          >
            <img className="dog-image" src={dog.image}></img>
            <p>{index}</p>
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

import PropTypes from "prop-types";

export function ScoreBoard({ currScore, highScore }) {
  // will take the curr score, high score
  return (
    <div>
      <p>
        Current Score: <span>{currScore}</span>
      </p>
      <p>
        High Score: <span>{highScore}</span>
      </p>
    </div>
  );
}

ScoreBoard.propTypes = {
  currScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
}
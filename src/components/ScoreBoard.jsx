import PropTypes from "prop-types";
import "../styles/ScoreBoard.css";

export function ScoreBoard({ currScore, highScore }) {
  return (
    <div className="scoreboard">
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
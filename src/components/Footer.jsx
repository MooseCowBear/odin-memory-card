import PropTypes from "prop-types";
import "../styles/Footer.css";

export function Footer({ hardMode, updateHardMode, resetCurrScore }) {
  const modeAsString = (mode) => {
    return mode ? "hard" : "normal";
  };

  return (
    <div className="footer">
      <p>You are currently playing on {modeAsString(hardMode)} mode.</p>
      <button
        onClick={() => {
          updateHardMode(!hardMode);
          resetCurrScore(0);
        }}
      >
        Switch to {modeAsString(!hardMode)} mode
      </button>
    </div>
  );
}

Footer.propTypes = {
  hardMode: PropTypes.bool.isRequired,
  updateHardMode: PropTypes.func.isRequired,
  resetCurrScore: PropTypes.func.isRequired
};

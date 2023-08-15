import PropTypes from "prop-types";
import "../styles/Footer.css";

export function Footer({ hardMode, updateHardMode }) {
  const modeAsString = (mode) => {
    return mode ? "hard" : "normal";
  };

  return (
    <div className="footer">
      <p>You are currently playing on {modeAsString(hardMode)} mode.</p>
      <button
        onClick={() => {
          updateHardMode(!hardMode);
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
};

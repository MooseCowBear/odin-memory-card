export function updateScores(
  newScore,
  highScore,
  currScoreUpdater,
  highScoreUpdater
) {
  currScoreUpdater(newScore);
  if (newScore > highScore) {
    highScoreUpdater(newScore);
  }
}

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

export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

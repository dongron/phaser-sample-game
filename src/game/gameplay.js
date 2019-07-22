export var score = 0;
export var gameOver = false;

export const setScore = newValue => (score = newValue);
export const setGameOver = ({ value, that }) => {
  that.scene.restart();
  gameOver = value;
};

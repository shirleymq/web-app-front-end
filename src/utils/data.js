export const separateChessData = (data) => {
  let lines = data.split("\n");
  lines = lines.filter((line) => line.length > 0);
  if (lines.length < 2) return;

  const [boardSize, obstaclesNumber] = lines[0].split(" ").map(Number);
  const [rowQueen, columnQueen] = lines[1].split(" ").map(Number);
  let obstacles = [];
  if (lines.length > 2) {
    obstacles = lines.slice(2).map((line) => line.split(" ").map(Number));
  }
  return {
    boardSize,
    obstaclesNumber,
    rowQueen,
    columnQueen,
    obstacles,
  };
};

export const validateData = (data, setError, clearErrors) => {
  if (!data) {
    setError("input", {
      type: "manual",
      message: "Debe haber al menos dos líneas de entrada.",
    });
    return false;
  }

  if (
    isNaN(data.boardSize) ||
    data.boardSize <= 0 ||
    data.boardSize > 10 ** 5
  ) {
    setError("input", {
      type: "manual",
      message:
        "El tamaño del tablero debe ser un número entero mayor a 0 y menor o igual a 100000.",
    });
    return false;
  }
  if (
    isNaN(data.obstaclesNumber) ||
    data.obstaclesNumber < 0 ||
    data.obstaclesNumber > 10 ** 5
  ) {
    setError("input", {
      type: "manual",
      message:
        "El numero de obstaculos debe ser un número entero mayor o igual a 0 y menor o igual a 100000.",
    });
    return false;
  }

  if (isNaN(data.rowQueen) || isNaN(data.columnQueen)) {
    setError("input", {
      type: "manual",
      message: "La posicion de la reina deben ser números enteros.",
    });
    return false;
  }

  if (data.obstaclesNumber !== data.obstacles.length) {
    setError("input", {
      type: "manual",
      message: "El número de obstaculos debe coincidir.",
    });
    return false;
  }
  for (let obstacle of data.obstacles) {
    if (obstacle.length !== 2 || isNaN(obstacle[0]) || isNaN(obstacle[1])) {
      setError("input", {
        type: "manual",
        message: "Todos los obstáculos deben ser pares de números enteros.",
      });
      return false;
    }
  }
  clearErrors("input");
  return true;
};

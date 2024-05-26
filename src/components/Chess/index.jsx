import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Chess = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [output, setOutput] = useState("Resultado");
  const [boardSize, setBoardSize] = useState(0);
  const [obstaclesNumber, setObstaclesNumber] = useState(0);
  const [rowQueen, setRowQueen] = useState(0);
  const [columnQueen, setColumnQueen] = useState(0);
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    console.log("componente listo");
  }, []);

  const handleButtonClick = (data) => {
    if (!isValidInput(data.input)) {
      return;
    } else {
      calculateNumberQueenAttacks();
    }
  };
  const calculateNumberQueenAttacks = async (data) => {
    try {
      const queryParams = new URLSearchParams({
        boardSize,
        obstaclesNumber,
        rowQueen,
        columnQueen,
        obstacles: JSON.stringify(obstacles),
      }).toString();
      console.log(queryParams);
      /*const response = await fetch(`http://localhost:8000/api?${queryParams}`);
      const result = await response.json();
      setOutput(result);*/
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const isValidInput = (input) => {
    const lines = input.split("\n");
    if (lines.length < 2) {
      setError("input", {
        type: "manual",
        message: "Debe haber al menos dos líneas de entrada.",
      });
      return false;
    }
    const [boardSize, obstaclesNumber] = lines[0].split(" ").map(Number);
    const [rowQueen, columnQueen] = lines[1].split(" ").map(Number);
    if (isNaN(boardSize) || boardSize <= 0 || boardSize > 10 ** 5) {
      setError("input", {
        type: "manual",
        message:
          "El tamaño del tablero debe ser un número entero mayor a 0 y menor o igual a 100000.",
      });
      return false;
    }
    if (isNaN(obstaclesNumber) || obstaclesNumber < 0 || boardSize > 10 ** 5) {
      setError("input", {
        type: "manual",
        message:
          "El numero de obstaculos debe ser un número entero mayor o igual a 0 y menor o igual a 100000.",
      });
      return false;
    }

    if (isNaN(rowQueen) || isNaN(columnQueen)) {
      setError("input", {
        type: "manual",
        message: "La posicion de la reina deben ser números enteros.",
      });
      return false;
    }

    const obstacles = lines.slice(2).map((line) => line.split(" ").map(Number));
    for (let obstacle of obstacles) {
      if (obstacle.length !== 2 || isNaN(obstacle[0]) || isNaN(obstacle[1])) {
        setError("input", {
          type: "manual",
          message: "Todos los obstáculos deben ser pares de números enteros.",
        });
        return false;
      }
    }
    setBoardSize(boardSize);
    setObstaclesNumber(obstaclesNumber);
    setRowQueen(rowQueen);
    setColumnQueen(columnQueen);
    setObstacles(obstacles);
    clearErrors("input");

    return true;
  };

  console.log("ERROR: ", errors);

  return (
    <div className="container mt-3">
      <p className="h4 mb-3">Chess</p>
      <form onSubmit={handleSubmit(handleButtonClick)}>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="input-1" className="form-label">
              Entrada:
            </label>
            <textarea
              id="input-1"
              rows={4}
              className={`form-control ${errors.input ? "is-invalid" : ""}`}
              {...register("input")}
            />
            {errors.input && (
              <div className="invalid-feedback">{errors.input.message}</div>
            )}
            <div className="d-flex justify-content-end mt-2">
              <button type="submit" className="btn btn-primary">
                Calcular
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="output-1" className="form-label">
              Salida:
            </label>
            <pre
              id="output-1"
              className="bg-light p-3 rounded"
              style={{ width: "100%", overflowX: "auto" }}
            >
              {output}
            </pre>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Chess;

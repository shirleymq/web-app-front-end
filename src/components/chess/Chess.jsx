import { useState } from "react";
import { useForm } from "react-hook-form";
import { ShowResult } from "../ShowResult";
import { InputTextArea } from "../InputTextArea";
import { isChessDataValid, separateChessData } from "../../utils";
import { getQueenAttackableSquares } from "../../services";

const Chess = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [output, setOutput] = useState("");

  const handleButtonClick = async (data) => {
    setOutput("");
    const separatedInput = separateChessData(data.input);
    let result = "";
    if (isChessDataValid(separatedInput, setError, clearErrors)) {
      result = await getQueenAttackableSquares(separatedInput);
      setOutput(result.data);
    }
  };

  return (
    <div className="container mt-3">
      <p className="h4 mb-3">Chess</p>
      <form onSubmit={handleSubmit(handleButtonClick)}>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <InputTextArea id="1" register={register} errors={errors} />
            <div className="d-flex justify-content-end mt-2">
              <button type="submit" className="btn btn-primary">
                Calculate
              </button>
            </div>
          </div>
          <ShowResult id="1" data={output} />
        </div>
      </form>
    </div>
  );
};

export default Chess;

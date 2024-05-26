import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ShowResult } from "../ShowResult";
import { InputTextArea } from "../InputTextArea";
import { validateData, separateData } from "../../utils";
import { calculateNumberQueenAttacks } from "../../services";

const Chess = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [output, setOutput] = useState("");

  useEffect(() => {
    console.log("componente listo");
  }, []);

  const handleButtonClick = async (data) => {
    setOutput("");
    const separatedInput = separateData(data.input);
    let result = "";
    if (validateData(separatedInput, setError, clearErrors)) {
      result = await calculateNumberQueenAttacks(separatedInput);
      setOutput(result.attackable_squares);
    }
  };

  return (
    <div className="container mt-3">
      <p className="h4 mb-3">Chess</p>
      <form onSubmit={handleSubmit(handleButtonClick)}>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <InputTextArea register={register} errors={errors} />
            <div className="d-flex justify-content-end mt-2">
              <button type="submit" className="btn btn-primary">
                Calcular
              </button>
            </div>
          </div>
          <ShowResult data={output} />
        </div>
      </form>
    </div>
  );
};

export default Chess;

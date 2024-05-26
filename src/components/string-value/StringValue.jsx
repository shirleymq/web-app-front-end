import { useState } from "react";
import { useForm } from "react-hook-form";
import { ShowResult } from "../ShowResult";
import { InputTextArea } from "../InputTextArea";
import { isStringValueValid } from "../../utils";
import { getMaximunValueFunction } from "../../services";

const StringValue = () => {
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
    let result = "";
    if (isStringValueValid(data.input, setError, clearErrors)) {
      result = await getMaximunValueFunction(data);
      setOutput(result.data);
    }
  };

  return (
    <div className="container mt-3">
      <p className="h4 mb-3">String Value</p>
      <form onSubmit={handleSubmit(handleButtonClick)}>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <InputTextArea id="2" register={register} errors={errors} />
            <div className="d-flex justify-content-end mt-2">
              <button type="submit" className="btn btn-primary">
                Calculate
              </button>
            </div>
          </div>
          <ShowResult id="2" data={output} />
        </div>
      </form>
    </div>
  );
};
export default StringValue;

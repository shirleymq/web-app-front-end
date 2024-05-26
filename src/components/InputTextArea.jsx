export const InputTextArea = ({ id, register, errors }) => {
  return (
    <div>
      <label htmlFor={`input-${id}`} className="form-label">
        Input:
      </label>
      <textarea
        id={`input-${id}`}
        rows={4}
        className={`form-control ${errors.input ? "is-invalid" : ""}`}
        {...register("input")}
      />
      {errors.input && (
        <div className="invalid-feedback">{errors.input.message}</div>
      )}
    </div>
  );
};

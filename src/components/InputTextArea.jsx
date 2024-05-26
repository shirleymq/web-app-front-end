export const InputTextArea = ({ register, errors }) => {
  return (
    <div>
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
    </div>
  );
};

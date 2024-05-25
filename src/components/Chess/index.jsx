const Chess = () => {
  return (
    <div className="container mt-3">
      <p className="h4 mb-3">Chess</p>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="input-1" className="form-label">
            Entrada:
          </label>
          <textarea
            id="input-1"
            name="input-1"
            rows={4}
            className="form-control"
            style={{ width: "100%" }}
          />
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
            Resultado
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Chess;

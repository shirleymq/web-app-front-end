export const ShowResult = ({ data }) => {
  return (
    <div className="col-12 col-md-6 mb-3">
      <label htmlFor="output-1" className="form-label">
        Salida:
      </label>
      <pre id="output-1" className="bg-light p-3 rounded">
        {data ? data : "No hay resultado"}
      </pre>
    </div>
  );
};

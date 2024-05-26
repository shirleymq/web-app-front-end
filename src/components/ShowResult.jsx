export const ShowResult = ({ id, data }) => {
  return (
    <div className="col-12 col-md-6 mb-3">
      <label htmlFor={`output-${id}`} className="form-label">
        Output:
      </label>
      <pre id={`output-${id}`} className="bg-light p-3 rounded">
        {data ? data : "No hay resultado"}
      </pre>
    </div>
  );
};

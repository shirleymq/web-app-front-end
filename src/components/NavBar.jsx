import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Web App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/problem-1">
                Chess
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/problem-2">
                String Value
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

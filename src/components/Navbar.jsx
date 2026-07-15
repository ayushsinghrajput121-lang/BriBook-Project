import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          🛍 Fake Store
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
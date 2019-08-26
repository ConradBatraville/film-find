import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              FilmFind
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i class="fas fa-film fa-4x"></i>
              <i class="fas fa-search fa-4x"></i>
            </li>
            <li className="nav-item d-inline-block mr-4"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="#home" className="navbar-brand">
          Challenge Hotel
        </a>
        <button
          aria-controls="basic-navbar-nav"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="justify-content-end navbar-collapse collapse"
          id="basic-navbar-nav"
        >
          <div className="me-auto navbar-nav">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/about" className="nav-link">
              Mis Reservaciones
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default Header;

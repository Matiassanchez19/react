import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-text">
        <img
          src="/imagenes/logo byr.jpg"
          alt="Logo Fragancias B&R"
          className="navbar-logo"
        />
        <span className="navbar-text">Fragancias B&R</span>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>
            Galería
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

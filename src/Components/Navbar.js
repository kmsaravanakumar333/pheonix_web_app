import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo192.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink
          className="nav-link navbar-brand"
          to="/"
          style={{ textAlign: "center" }}
        >
          <div className="d-flex header-bar">
            <img src={logo} alt="" className="logo" />
            <p className="navbar-brand">Pheonix Solutions</p>
          </div>
        </NavLink>
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
              <NavLink
                className="nav-link"
                to="/"
                style={{ textAlign: "center" }}
              >
                <p className="tile-name">Home</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about-us"
                style={{ textAlign: "center" }}
              >
                <p className="tile-name">About</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/services"
                style={{ textAlign: "center" }}
              >
                <p className="tile-name">Services</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/portfolio"
                style={{ textAlign: "center" }}
              >
                <p className="tile-name">Portfolio</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact-us"
                style={{ textAlign: "center" }}
              >
                <p className="tile-name">Contact</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

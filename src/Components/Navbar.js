import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md bg-light">
      <div class="container-fluid">
        <NavLink class="nav-link navbar-brand" to="/" style={{ textAlign: 'center' }}>
          <p className='navbar-brand'>Pheonix Solutions</p>
        </NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink class="nav-link" to="/" style={{ textAlign: 'center' }}>
                <p className='tile-name'>Home</p>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/about-us" style={{ textAlign: 'center' }}>
                <p className='tile-name'>About Us</p>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/services" style={{ textAlign: 'center' }}>
                <p className='tile-name'>Services</p>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/portfolio" style={{ textAlign: 'center' }}>
                <p className='tile-name'>Portfolio</p>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/contact-us" style={{ textAlign: 'center' }}>
                <p className='tile-name'>Contact Us</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

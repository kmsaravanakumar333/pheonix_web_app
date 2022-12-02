import React from "react";
import "./Navbar.css";
import "./Footer.css";

import insta from "../Assets/insta.png";
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/linked in.png";
import twitter from "../Assets/twitter.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div class="row align-items-start justify-content-between">
        <div class="col">
          <div
            className="company-title"
            // style={{ fontSize: "30px", fontWeight: "600" }}
          >
            Phoenix Software Solutions
          </div>
          <div className="d-flex mt-3 mb-3 social-div justify-content-between">
            <div className="social">
              <img src={insta} alt="" className="social-icon" />
            </div>
            <div className="social">
              <img src={facebook} alt="" className="social-icon" />
            </div>
            <div className="social">
              <img src={linkedin} alt="" className="social-icon" />
            </div>
            <div className="social">
              <img src={twitter} alt="" className="social-icon" />
            </div>
          </div>
        </div>
        <div class="col footer-col">
          <div className="link-title" style={{ fontSize: "20px" }}>
            Useful Links
          </div>
          <ul className="navbar-nav">
            <li className="link-item">
              <NavLink to="/" style={{ textAlign: "center" }}>
                <p className="link-name">Home</p>
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/about-us" style={{ textAlign: "center" }}>
                <p className="link-name">About Us</p>
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/services" style={{ textAlign: "center" }}>
                <p className="link-name">Services</p>
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/portfolio" style={{ textAlign: "center" }}>
                <p className="link-name">Portfolio</p>
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/contact-us" style={{ textAlign: "center" }}>
                <p className="link-name">Contact Us</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "center", fontSize: "12px" }}>copyrights</div>
      </div>
    </div>
  );
}

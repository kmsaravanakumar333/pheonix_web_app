import React from "react";
import question from "../../Assets/question.jpg";
import fullLogo from "../../Assets/fullLogo.png";
import "./HomePage.css";

import angular from "../../Assets/angular.png";
import flutter from "../../Assets/flutter.png";
import javascript from "../../Assets/javascript.png";
import mongodb from "../../Assets/mongodb.png";
import nodejs from "../../Assets/nodejs.png";
import reacting from "../../Assets/react.png";
import wooCommerce from "../../Assets/woocommerce.png";
import wordpress from "../../Assets/wordpress.png";

import pencil from "../../Assets/pencil.png";
import bulb from "../../Assets/bulb.png";
import clapboard from "../../Assets/clapboard.png";
import growth from "../../Assets/growth.png";
import headphone from "../../Assets/headphone.png";
import mobile from "../../Assets/mobile.png";
import computer from "../../Assets/computer.png";
import analysis from "../../Assets/analysis.png";
import usage from "../../Assets/usage.png";

import mobile1 from "../../Assets/mobile1.png";
import location from "../../Assets/location.png";
import mail from "../../Assets/mail.png";

import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="banner">
        <p className="title">We create creative web apps and mobile apps</p>
        <p className="subtitle">
          We are committed to providing our customers with exceptional service
        </p>
        <NavLink
          className="nav-link navbar-brand"
          to="/contact-us"
          style={{ textAlign: "center" }}
        >
          <button className="btn-contact">contact us</button>
        </NavLink>
      </div>
      <div className="who-we-are">
        <div className="title-1">WHO WE ARE?</div>
        <div class="who-we-are-section">
          <div class="subtitle-1">
            We are Web and Mobile Application development company that started
            off with a vision, to help every organization to grow as a business
            while helping them automate their business processes. Our
            combination of modern and practical designs is what distinguishes us
            from the others.
          </div>
          <div class="who-we-are-img">
            <img className="who-img" src={question} alt="" />
          </div>
        </div>
      </div>
      <div className="title-1 py-3">WE ARE PRO IN</div>
      <div className="we-are-pro-div">
        <div className="we-are-pro">
          <div className="tools">
            <img src={angular} alt="" className="tool-logo" />
            <p className="tool-logo-name">Angular</p>
          </div>
          <div className="tools">
            <img src={flutter} alt="" className="tool-logo" />
            <p className="tool-logo-name">Flutter</p>
          </div>
          <div className="tools">
            <img src={javascript} alt="" className="tool-logo" />
            <p className="tool-logo-name">Javascript</p>
          </div>
          <div className="tools">
            <img src={nodejs} alt="" className="tool-logo" />
            <p className="tool-logo-name">Node JS</p>
          </div>
          <div className="tools">
            <img src={reacting} alt="" className="tool-logo" />
            <p className="tool-logo-name">React JS</p>
          </div>
          <div className="tools">
            <img src={wooCommerce} alt="" className="tool-logo" />
            <p className="tool-logo-name">WooCommerce</p>
          </div>
          <div className="tools">
            <img src={wordpress} alt="" className="tool-logo" />
            <p className="tool-logo-name">Wordpress</p>
          </div>
          <div className="tools">
            <img src={mongodb} alt="" className="tool-logo" />
            <p className="tool-logo-name">Mongo DB</p>
          </div>
        </div>
      </div>
      <div className="title-1 py-3">OUR SERVICES</div>
      <div className="our-services-section">
        <div className="services-section-grid">
          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={mobile} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1 ">Mobile Application Development</p>
            </div>
          </div>
          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={computer} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1">Web Application Development </p>
            </div>
          </div>
          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={analysis} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1">Analysis and Re-engineering</p>
            </div>
          </div>

          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={pencil} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1">UI/UX Design</p>
            </div>
          </div>
          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={clapboard} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1">Branding Identity</p>
            </div>
          </div>
          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={bulb} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1">Creative Idea</p>
            </div>
          </div>

          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={usage} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1">Easy to Use</p>
            </div>
          </div>
          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={growth} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1">Dynamic Growth</p>
            </div>
          </div>
          <div className="service-section-grid-items">
            <div className="service-grid-item-img">
              <img src={headphone} class="card-img-top" alt="" />
            </div>
            <div className="service-grid-item-name-tag">
              <p class="card-text text-1">Friendly Support</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

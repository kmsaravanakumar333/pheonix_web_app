import React from "react";
import question from "../../Assets/question.jpg";
import fullLogo from "../../Assets/fullLogo.png";
import "./HomePage.css";

import angular from "../../Assets/angular.png";
import flutter from "../../Assets/flutter.png";
import javascript from "../../Assets/javascript.png";
import mongodb from "../../Assets/mongodb.png";
import nodejs from "../../Assets/nodejs.png";
import reactimg from "../../Assets/react.png";
import woocommerce from "../../Assets/woocommerce.png";
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
      <div className="who-are-we">
        <div className="title-1">WHO WE ARE?</div>
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-6 px-5 py-3 subtitle-1">
            We are Web and Mobile Application development company that started
            off with a vision, to help every organization to grow as a business
            while helping them automate their business processes. Our
            combination of modern and practical designs is what distinguishes us
            from the others.
          </div>
          <div class="col-sm-12 col-md-6">
            <img className="who-img" src={question} alt="" />
          </div>
        </div>
      </div>
      <div className="title-1 py-3">WE ARE PRO IN</div>
      <div className="we-are-pro container">
        <div className="tools">
          <img src={angular} alt="" className="tool-logo" />
          <p>Angular</p>
        </div>
        <div className="tools">
          <img src={flutter} alt="" className="tool-logo" />
          <p>Flutter</p>
        </div>
        <div className="tools">
          <img src={javascript} alt="" className="tool-logo" />
          <p>Javascript</p>
        </div>
        <div className="tools">
          <img src={nodejs} alt="" className="tool-logo" />
          <p>Node JS</p>
        </div>
        <div className="tools">
          <img src={reactimg} alt="" className="tool-logo" />
          <p>React JS</p>
        </div>
        <div className="tools">
          <img src={woocommerce} alt="" className="tool-logo" />
          <p>WooCommerce</p>
        </div>
        <div className="tools">
          <img src={wordpress} alt="" className="tool-logo" />
          <p>Wordpress</p>
        </div>
        <div className="tools">
          <img src={mongodb} alt="" className="tool-logo" />
          <p>Mongo DB</p>
        </div>
      </div>
      <div className="title-1 py-3">OUR SERVICES</div>
      <div class="container text-center service-container">
        <div class="row align-items-center service">
          <div class="col card-col card-col-1">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={mobile} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1 ">
                    Mobile Application Development
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col card-col card-col-1">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={computer} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">Web Application Development </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col card-col">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={analysis} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">Analysis and Re-engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-start py-5 service-icon service">
          <div class="col card-col card-col-1">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={pencil} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col card-col card-col-1">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={clapboard} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">Branding Identity</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col card-col">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={bulb} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">Creative Idea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-end mb-5 service-icons service">
          <div class="col card-col card-col-1">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={usage} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">Easy to Use</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col card-col card-col-1">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={growth} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">Dynamic Growth</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col card-col">
            <div class="card" style={{ width: "15rem", height: "10rem" }}>
              <div className="card-content">
                <img src={headphone} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">Friendly Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='title-1 py-3'>What Our Clients Say
        About Us.</div> */}
      <div className="title-1 py-3 q-3">HAVE ANY QUESTIONS?</div>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col card-col">
            <div
              class="card card-1"
              style={{ width: "15rem", height: "10rem" }}
            >
              <div className="card-content">
                <img src={mobile1} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">+91 9791770762</p>
                  <p class="card-text text-1">+91 9942027357</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col card-col">
            <div
              class="card card-1"
              style={{ width: "15rem", height: "10rem" }}
            >
              <div className="card-content">
                <img src={location} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1">Kalkurichi - 626 104 </p>
                  <p class="card-text text-1">Virudhunagar </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col card-col">
            <div
              class="card card-1"
              style={{ width: "15rem", height: "10rem" }}
            >
              <div className="card-content">
                <img src={mail} class="card-img-top" alt="" />
                <div class="card-body body-card">
                  <p class="card-text text-1 email">
                    pheonixsoftwaresolutions1009@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ fontWeight: "500", paddingLeft: "3rem", marginBottom: "1rem" }}
      >
        Send us a message!
      </div>
      <div class="row align-self-start">
        <div class="col card-col">
          <div style={{ width: "50rem", margin: "0 3rem" }}>
            <div>
              <div className="d-flex justify-content-between form-input">
                <div
                  class="mb-3 col-md-5 col-sm-12 p-name"
                  style={{ marginRight: "1rem" }}
                >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-3 col-md-6 col-sm-12 p-name">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control email-tag"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <button className="btn-send">Send</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col card-col">
          <img
            src={fullLogo}
            className="image"
            alt=""
            style={{ height: "20rem", marginTop: "-4rem" }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

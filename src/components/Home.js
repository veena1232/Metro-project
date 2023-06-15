import React from "react";
import logo from "./logo.jpg";
import { Outlet, Link } from "react-router-dom";
import "../styles/homestyles.css";
import card1 from "../components/Images/card1.jpg";
import card2 from "../components/Images/card2.jpg";
import card3 from "../components/Images/card3.jpg";
import card4 from "../components/Images/card4.jpg";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="food-munch-logo" alt="Logo" />
          </a>
          <h3 id="title">Go Metro, Explore Extra</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="nav-menu">
              <div className="navbar-nav ml-auto">
                <a className="nav-link active" id="navItem1" href="#wcuSection">
                  About
                  <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link" href="#exploreMenuSection" id="navItem2">
                  Contact
                </a>
                <a className="nav-link" href="#deliveryPaymentSection" id="navItem3">
                  Services
                </a>
                <a className="nav-link" href="#followUsSection" id="navItem4">
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="menu">
        <div className="row">
          <div className="col-12">
            <div className="d-flex">
              <div>
                <Link to="/sdistance">
                  <button type="button" id="btn1">
                    Shortest Route
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/stime">
                  <button type="button" id="btn2">
                    Shortest Time
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/allpaths">
                  <button type="button" id="btn3" >
                    All Paths
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/platforms">
                  <button type="button" id="btn4">
                    Platform Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

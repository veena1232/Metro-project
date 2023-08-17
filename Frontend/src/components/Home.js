import React, { useState, useEffect } from "react";
import logo from "./logo.jpg";
import { Outlet, Link } from "react-router-dom";
import "../styles/homestyles.css";
import logo2 from "../components/Images/logo2.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const history = useNavigate();
  const location = useLocation();
  const userData = location.state && location.state.userData;

  const handleLogout = () => {
    history("/login");
  }
  console.log(userData);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo2} alt="Logo" width={50} height={50} />
          </a>
          <h3 id="title" className="col-5 col-md-3">Y<span className="title-span">our</span> Metro</h3>

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
                <a className="nav-link active col-md-2" id="navItem1" href="#wcuSection">
                  About
                  <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link col-md-2" href="#exploreMenuSection" id="navItem2">
                  Contact
                </a>
                <a className="nav-link" href="#deliveryPaymentSection" id="navItem3">
                  Services
                </a>
                <a className="nav-link" href="#followUsSection" id="navItem4">
                  FollowUs
                </a>

              </div>
            </div>
            <div className="log-div">
              {userData && <p className="username">{userData.email_id}</p>}
              {userData && <a href="/"><button onClick={handleLogout} className="logout-btn">Logout</button></a>}
              {!userData && <a href="/login"><button className="login-btn">Login</button></a>}
            </div>
          </div>
        </div>
      </nav>

      <div className="menu">
        <div className=" main-nav container-fluid">
          <div className="row">
            <div className="col-12 d-md-flex ">
              <div className="col-md-3 mt-md-5">
                <Link to="/sdistance">
                  <button type="button" id="btn1" className="btn btn-primary">
                    Shortest Route
                  </button>
                </Link>
              </div>
              <div className="col-md-3 mt-md-5 col-sm-12">
                <Link to="/stime">
                  <button type="button" id="btn2" className="btn btn-primary">
                    Shortest Time
                  </button>
                </Link>
              </div>
              <div className="col-md-3 mt-md-5 col-sm-12">
                <Link to="/allpaths">
                  <button type="button" id="btn3" className="btn btn-primary">
                    All Paths
                  </button>
                </Link>
              </div>
              <div className="col-md-3 mt-md-5">
                <Link to="/platforms">
                  <button type="button" id="btn4" className="btn btn-primary">
                    Platform Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer-div">
        <div className="footer-div">
          <center className="icons-head">
            <div className="contact-title">
              <h4 className="contact-head">Follow Us</h4>
            </div>
            <div className="contact-icons">
              <FaFacebook className="icon-1" />
              <FaInstagram className="icon-2" />
              <FaTwitter className="icon-3" />
              <FaYoutube className="icon-4" />
            </div>
          </center>
        </div>

        <hr></hr>
        <div className="cr-div">
          <center>
            <p>&#169;2023 OurMetro.LLC, All Rights Reserved</p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Home;

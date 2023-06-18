import React, { useState, useEffect } from "react";
import logo from "./logo.jpg";
import { Outlet, Link } from "react-router-dom";
import "../styles/homestyles.css";
import card1 from "../components/Images/card1.jpg";
import card2 from "../components/Images/card2.jpg";
import card3 from "../components/Images/card3.jpg";
import card4 from "../components/Images/card4.jpg";
import logo2 from "../components/Images/logo2.png";
import { useLocation, useNavigate } from 'react-router-dom';

var a = true;
var b = false;

const Home = () => {
  const history = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(location.state);

  const handleLogin=()=>{
    
  }

  const handleLogout=()=>{
    history("/login");
  }
  console.log(user);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo2} className="food-munch-logo" alt="Logo" />
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
                  FollowUs
                </a>
                
              </div>
            </div>
            <div className="log-div">
            {user && <p className="username">{user.username}</p>}
            {user && <a href="/"><button onClick={handleLogout} className="logout-btn">Logout</button></a>}
            {!user && <a href="/login"><button className="login-btn" onClick={handleLogin}>Login</button></a>}
            </div>
          </div>
        </div>
      </nav>

    
      <div className="menu">
        <div className=" main-nav container-fluid">
          <div className="row">
            <div className="col-12 d-md-flex justify-content-between">
              <div className="col-md-3 mb-3 mb-md-0">
                <Link to="/sdistance">
                  <button type="button" id="btn1" className="btn btn-primary">
                    Shortest Route
                  </button>
                </Link>
              </div>
              <div className="col-md-3 mb-3 mb-md-0">
                <Link to="/stime">
                  <button type="button" id="btn2" className="btn btn-primary">
                    Shortest Time
                  </button>
                </Link>
              </div>
              <div className="col-md-3 mb-3 mb-md-0">
                <Link to="/allpaths">
                  <button type="button" id="btn3" className="btn btn-primary">
                    All Paths
                  </button>
                </Link>
              </div>
              <div className="col-md-3">
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
  </div>
  );
};

export default Home;

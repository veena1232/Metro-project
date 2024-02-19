import React from 'react';
import logo2 from "../components/Images/logo2.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
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
                <a className="nav-link active col-md-2" id="navItem1" href="/about">
                  About
                  <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link col-md-2" href="contact" id="navItem2">
                  Contact
                </a>
                <a className="nav-link" href="/services" id="navItem3">
                  Services
                </a>
                <a className="nav-link" href="/map" id="navItem4">
                  Map
                </a>

              </div>
            </div>
            {/* <div className="log-div">
              {userData && <p className="username">{userData.email_id}</p>}
              {userData && <a href="/"><button onClick={handleLogout} className="logout-btn">Logout</button></a>}
              {!userData && <a href="/login"><button className="login-btn">Login</button></a>}
            </div> */}
          </div>
        </div>
      </nav>
    <div className="container py-4 text-dark mt-100">
      <h2 className="mb-4">Contact Us</h2>
      <p>If you have any questions or feedback about Metro Ride, please feel free to contact us:</p>
      <div className="row">
        <div className="col-md-6">
          <h3 className="mt-4 text-primary">Email</h3>
          <p>Email us at <a className="text-info" href="mailto:contact@metroride.com">contact@metroride.com</a>.</p>
        </div>
        <div className="col-md-6">
          <h3 className="mt-4 text-success">Phone</h3>
          <p>Call us at <span className="text-info">123-456-7890</span>.</p>
        </div>
      </div>
      <h3 className="mt-4 text-danger">Address</h3>
      <p>Visit us at:</p>
      <address>
        <strong>Metro Ride Headquarters</strong><br />
        123 Metro Street<br />
        Gachibowli, Hyderabad<br />
        Zip Code: 12345
      </address>
      <div className="mt-4">
        <h3 className="text-muted">Follow Us</h3>
        <div className="d-flex">
          <a href="#" className="btn btn-primary me-3">Facebook</a>
          <a href="#" className="btn btn-info me-3">Twitter</a>
          <a href="#" className="btn btn-danger">Instagram</a>
        </div>
      </div>
    </div>

    {/* <div className="main-footer-div">
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
      </div> */}

      
    </div>
  );
}

export default Contact;

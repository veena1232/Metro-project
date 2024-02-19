import React from 'react';
import logo2 from "../components/Images/logo2.png"
import map from './Images/map.jpg'

const Map = () => {
  return (
    <div className="container py-4 text-dark mt-70">
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
      <center><img src={map} alt='map' width={500} height={500}/></center>
    </div>
  );
}

export default Map;

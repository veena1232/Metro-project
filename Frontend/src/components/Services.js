import React from 'react';
import logo2 from "../components/Images/logo2.png";

const Services = () => {
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
      <div className="container py-4 text-dark">
      <h2 className="mb-4">Our Services</h2>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-primary">Shortest Path Finder</h3>
            <p className="card-text">Use our advanced algorithm to find the shortest path between metro stations for your convenience. Our path finder takes into account factors such as station connections, transfers, and travel times to provide you with the quickest route.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-success">Distance Calculator</h3>
            <p className="card-text">Calculate the distance between two metro stations to plan your travel more accurately. Whether you're commuting or exploring the city, our distance calculator helps you understand the distances between stations and make informed decisions.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-danger">Travel Time Estimation</h3>
            <p className="card-text">Get an estimate of the travel time between stations so you can manage your time effectively. Our travel time estimation takes into consideration factors such as station stops, waiting times, and average train speeds to provide you with realistic travel durations.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-warning">All Possible Paths</h3>
            <p className="card-text">Explore all possible paths and routes between metro stations to choose the best option for your journey. Our all possible paths service provides you with a comprehensive view of available routes, allowing you to compare alternatives and make informed travel decisions.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;

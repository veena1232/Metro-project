import React from 'react';
import logo2 from "../components/Images/logo2.png"

const About = () => {
  return (
    <div className="container py-4 text-dark mt-100">
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
      <h2 className="mb-4">About Metro Ride</h2>
      <p>This app provides information about the shortest path, distance, time, and platform details for metro rides.</p>
      <p>With Metro Ride, you can plan your metro journeys more efficiently, making use of advanced algorithms to find the quickest and most convenient routes.</p>
      <h3 className="mt-4 text-primary">Features</h3>
      <ul className="list-group">
        <li className="list-group-item">Find the shortest path between metro stations</li>
        <li className="list-group-item">Calculate the distance and estimated travel time for your journey</li>
        <li className="list-group-item">Get platform details for transfers and connections</li>
        <li className="list-group-item">Find all possible paths between any two stations</li>
      </ul>
      <h3 className="mt-4 text-success">Team</h3>
      <p>Metro Ride was developed by a team of passionate software engineers dedicated to enhancing the metro riding experience for passengers. Our team is committed to providing accurate and reliable information to help you navigate the metro system with ease.</p>
      <h3 className="mt-4 text-danger">Contact Us</h3>
      <p>If you have any questions, suggestions, or feedback about Metro Ride, please feel free to reach out to us. We value your input and are here to assist you. You can contact us via email at <a className="text-info" href="mailto:contact@metroride.com">contact@metroride.com</a>.</p>
      <div className="mt-4">
        <h3 className="text-muted">Follow Us</h3>
        <div className="d-flex">
          <a href="#" className="btn btn-primary me-3">Facebook</a>
          <a href="#" className="btn btn-info me-3">Twitter</a>
          <a href="#" className="btn btn-danger">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import logo from './logo.jpg';
import { Outlet, Link } from "react-router-dom";
import '../styles/homestyles.css';

const Home = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="https://cdn.dribbble.com/users/556851/screenshots/6611355/metro_release-04_4x.png?compress=1&resize=400x300&vertical=center" className='logo'/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div className="menu">
            <div class="container">
                <div class="row">
                    <div calss="col-4">
                        <div>
                        <ul>
                            <li><Link to="/sdistance">Shortest Route(Stations)</Link></li><br/><br/>
                            <li><Link to="/stime">Shortest Route(Time)</Link></li><br/><br/>
                            <li><Link to="/allpaths">All possible paths</Link></li><br/><br/>
                            <li><Link to="/platforms">Platform Details</Link></li><br/><br/>
                        </ul>
        
                        </div>                    
                    </div>

                </div>

            </div>
        </div>
        

    
    </div>
  )
}

export default Home
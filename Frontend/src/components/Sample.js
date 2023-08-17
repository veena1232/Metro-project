import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo2 from "../components/Images/logo2.png";

const Sample = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center pb-3 pt-3'>
      
        <div className='col-md-6 col-sm-12 '>
         <div className='row align-items-center'>
          <div className='col-md-1 col-sm-3'>
            <a>
              <img src={logo2} alt="Logo" width={50} height={50}/>
            </a>
          </div>
          <div className='col-md-11 col-sm-8'>
            <h3>Go Metro, Explore Extra</h3>
          </div>
         </div>  
        </div>

        <div className='col-md-6 col-sm-12'>
          <div className='row'>
            <div className='col-2'><a>About</a></div>
            <div className='col-2'><a>Contact</a></div>
            <div className='col-2'><a>Services</a></div>
            <div className='col-2'><a>FollowUs</a></div>
            <div className='col-4 justify-content-center'>
              <button>Login</button>
            </div>
          </div>   
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo2} alt="Logo" width={50} height={50}/>
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
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Sample
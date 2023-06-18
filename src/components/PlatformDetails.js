import React from 'react';
import logo from "./logo.jpg";
import { graph } from './Data/Distance';
import { cities } from './Data/Cities';
import { times } from './Data/Times';
import { useState, useEffect } from 'react';
import logo2 from "../components/Images/logo2.png"
import "../styles/platformstyles.css";



const PlatformDetails = () => {

  const [src, setSrc] = useState("Ameerpet");

  function getPF(){
    let k = cities.indexOf(src);
    if(k==0){
        document.getElementById("p1").innerHTML = "Miyapur(Red line) & Nagole(Blue line)";
        document.getElementById("p2").innerHTML = "LB Nagar(Red line) & Raydurg(Blue line)";
    }
    else if (k==1||k==3||k==4||k==6||k==7||k==9||k==10||k==11||k==15||k==17||
        k==19||k==20||k==21||k==22||k==26||k==30||k==31||k==34||k==36||k==38
        ||k==43||k==50||k==55){
        document.getElementById("p2").innerHTML = "LB Nagar(Red line)";
        document.getElementById("p1").innerHTML = "Miyapur(Red line)";
    }
    else if(k==2||k==8||k==13||k==14||k==18||k==24||k==25||k==27||k==37||
        k==40||k==41||k==42||k==44||k==46||k==48||k==51||k==53||k==54||k==56){
        document.getElementById("p2").innerHTML = "Raydurg(Blue line)";
        document.getElementById("p1").innerHTML = "Nagole(Blue line)";
    }
    else if(k==5||k==12||k==32||k==35||k==52||k==49||k==47){
        document.getElementById("p1").innerHTML = "JBS Parade Ground";
        document.getElementById("p2").innerHTML = "MG Bus Station";
    }
    else if(k==28){
        document.getElementById("p1").innerHTML = "Miyapur(Red line) & Parade Grounds(Green line)";
        document.getElementById("p2").innerHTML = "LBNagar";
    }
    else if(k==16||k==39){
        document.getElementById("p2").innerHTML = "MG Bus station(Green line) & Raydurg(Blue line)";
        document.getElementById("p1").innerHTML = "Nagole(Blue line)"
    }
    else if(k==45){
        document.getElementById("p1").innerHTML = "Raydurg(Blue line)";
    }
    else if(k==29){
        document.getElementById("p2").innerHTML = "LB Nagar(Red line)";
    }
    else if(k==3){
        document.getElementById("p2").innerHTML = "Raydurg(Blue line)";
    }
    else if(k==23){
        document.getElementById("p1").innerHTML = "Miyapur(Red line)";
    }
}


  return (
    <div className='main-div'>
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
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div className='select'>
    <select id="src" onChange={e=>setSrc(e.target.value)}>
        <option>Ameerpet</option>
        <option>Assembly</option>
        <option>Begumpet</option>
        <option>Bharatnagar</option>
        <option>Chaitanyapuri</option>
        <option>Chikkadapally</option>
        <option>Dilsukhnagar</option>
        <option>Dr B.R. Ambedkar Balanagar</option>
        <option>Durgam Cheruvu</option>
        <option>Erragadda</option>
        <option>ESI Hospital</option>
        <option>Gandhi Bhavan</option>
        <option>Gandhi Hospital</option>
        <option>Habsiguda</option>
        <option>Hitech City</option>
        <option>Irrum Manjil</option>
        <option>JBS Parade Ground</option>
        <option>JNTU College</option>
        <option>Jubliee Hills Checkpost</option>
        <option>Khairatabad</option>
        <option>KPHB Colony</option>
        <option>Kukatpally</option>
        <option>Lakdi-ka-pul</option>
        <option>LB Nagar</option>
        <option>Madhapur</option>
        <option>Madhuranagar</option>
        <option>Malakpet</option>
        <option>Mettuguda</option>
        <option>MG Bus Station</option>
        <option>Miyapur</option>
        <option>Musapet</option>
        <option>Musarambagh</option>
        <option>Musheerabad</option>
        <option>Nagole</option>
        <option>Nampally</option>
        <option>Narayanguda</option>
        <option>New Market</option>
        <option>NGRI</option>
        <option>Osmania Medical College</option>
        <option>Parade Ground</option>
        <option>Paradise</option>
        <option>Peddamma Gudi</option>
        <option>Prakash Nagar</option>
        <option>Punjagutta</option>
        <option>Rasoolpura</option>
        <option>Raydurg</option>
        <option>Rd no.5 Jubliee Hills</option>
        <option>RTC X Roads</option>
        <option>Secunderabad East</option>
        <option>Secunderabad West</option>
        <option>SR Nagar</option>
        <option>Stadium</option>
        <option>Sultan Bazar</option>
        <option>Tarnaka</option>
        <option>Uppal</option>
        <option>Victoria Mahal</option>
        <option>Yusufguda</option>
      </select>
      <br/><br/>
      <h4 id="p11">Platform 1: </h4><h4 id="p1"></h4>
      <h4 id="p12">Platform 2: </h4><h4 id="p2"></h4>
      
      <br/><br/><br/>
      <button onClick={getPF}>GETPF</button>
    </div>
    </div>
  )
}

export default PlatformDetails
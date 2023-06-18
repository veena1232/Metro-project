import React from 'react';
import logo from "./logo.jpg";
import { graph } from './Data/Distance';
import { cities } from './Data/Cities';
import { times } from './Data/Times';
import { useState, useEffect } from 'react';
import "../styles/stimestyles.css";
import logo2 from "../components/Images/logo2.png"



const STime = () => {
  const [src, setSrc] = useState("Ameerpet");
  const [dest, setDest] = useState("Ameerpet");
  const [d, setD] = useState(0);

  const [isClicked, setIsClicked] = useState(false);

  const [ss,setSs] = useState(false);

  function dijkstraForTimes(graph, src, dest) {
    const V = graph.length;
    const dist = new Array(V).fill(Number.MAX_VALUE);
    const visited = new Array(V).fill(false);
  
    dist[src] = 0;
  
    for (let count = 0; count < V - 1; count++) {
      const u = minDistance(dist, visited);
      visited[u] = true;
  
      for (let v = 0; v < V; v++) {
        if (
          !visited[v] &&
          graph[u][v] !== 0 &&
          dist[u] !== Number.MAX_VALUE &&
          dist[u] + graph[u][v] < dist[v]
        ) {
          dist[v] = dist[u] + graph[u][v];
        }
      }
    }
  
    return dist[dest];
  }
  function minDistance(dist, visited) {
    let min = Number.MAX_VALUE;
    let minIndex = -1;
  
    for (let v = 0; v < dist.length; v++) {
      if (!visited[v] && dist[v] <= min) {
        min = dist[v];
        minIndex = v;
      }
    }
  
    return minIndex;
  }
  
  function dijkstraTimesAlgo(){
    
    if(src==dest){setSs(true);return;}
    setSs(false);
    setIsClicked(true);
    setD(dijkstraForTimes(times, cities.indexOf(src), cities.indexOf(dest)));
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

    <div className="first-div">
    <p className="title">Know the timings, coz time is most valuable thing in world</p>
  <div className="start">
  <p id="from">From :</p>
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
  </div>
  
  <div className='end'>
  <p id="to">To :</p>
  <div id="to-id">
  <select id="dest" onChange={e=>{setDest(e.target.value)}}>
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
    </div>
        
        
        </div>
        
        </div>

  <button onClick={dijkstraTimesAlgo} className='sub'>Get minimum time</button>
  <br/><br/><br/>

  {isClicked?<h1 className='final-time'>It just takes : {d} minutes</h1>:<p></p>}
  {ss?<h3 className='same-station-msg'>Source and Destination can't be same</h3>:<p></p>}
  
    </div>
  )
}

export default STime
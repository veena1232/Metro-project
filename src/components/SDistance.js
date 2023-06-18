import React from 'react';
import logo from "./logo.jpg";
import { graph } from './Data/Distance';
import { cities } from './Data/Cities';
import { useState, useEffect } from 'react';
import "../styles/sdistancestyles.css";
import { FaArrowDown } from 'react-icons/fa';
import logo2 from "../components/Images/logo2.png"


const ShortDistance = () => {
  const [src, setSrc] = useState("Ameerpet");
  const [dest, setDest] = useState("Ameerpet");
  const [path, setPath] = useState([]);

  const [pg, setPg] = useState("Parade Ground");
  const [ap, setAp] = useState("Ameerpet");
  const [mgbs, setMgbs] = useState("MG Bus Station");

  const [r, setR] = useState(false);

  const [ss, setSs] = useState(false);

  const [blueLine, setBlueLine] = useState(["Raydurg", "Hitech City", "Durgam Cheruvu", "Madhapur", "Peddamma Gudi", "Jubilee Hills Checkpost", "Rd no.5 Jubliee Hills","Yusufguda","Madhuranagar","Begumpet","Prakash Nagar","Rasoolpura ", "Paradise","Secunderabad East", "Mettuguda", "Tarnaka", "Habsiguda", "NGRI", " Stadium", "Uppal", "Nagole"]);
  const [redLine, setRedLine] = useState(["JNTU College", "KPHB Colony", "Kukatpally", "Dr B.R. Ambedkar Balanagar", "Musapet", "Bharatnagar", "Erragadda", "ESI Hospital", "SR Nagar", "Punjagutta", "Irrum Manjil", "Khairatabad", "Lakdi-ka-pul","Assembly", "Gandhi Bhavan", "Osmania Medical College", "Malakpet", "New Market", "Musarambagh", "Dilsukhnagar", "Chaitanyapuri", "Victoria Mahal", "LB Nagar"]);
  const [greenLine, setGreenLine] = useState(["Secunderabad West", "Gandhi Hospital", "Musheerabad", "RTC X Roads", "Chikkadapally", "Narayanguda", "Sultan Bazar"])
 

    function dijkstra(graph, src, dest) {
        const V = graph.length;
        const dist = new Array(V).fill(Number.MAX_VALUE);
        const prev = new Array(V).fill(-1);
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
              prev[v] = u;
            }
          }
        }
      
        return constructPath(prev, src, dest);
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
      
      function constructPath(prev, src, dest) {
        const path = [];
        let current = dest;
      
        while (current !== -1) {
          path.unshift(current);
          current = prev[current];
        }
      
        printData(path, src , dest);
      }

      function printData(path){
        // document.write("Distance from "+cities[src] +" to ");
        setPath([]);
        //document.getElementById("output").innerHTML = "Shortest route from "+cities[src]+" to "+cities[dest]+" is : " ;
        
        for(let i=0;i<path.length;i++){
          setPath(prevPath => [...prevPath, cities[path[i]]]);
        }
        console.log(path)
        //document.getElementById("op").innerHTML = s;
        //document.getElementById("op2").innerHTML = "<h1>"+path.length-1+"</h1>";
        //document.write(cities[dest]+" is : " + shortestDistances[i]);
        
      }
                      
      
      const dijkstraAlgo=()=>{
        
        if(src==dest){
          setSs(true);
          return;
        }
        setSs(false)
        setR(true);
        dijkstra(graph, cities.indexOf(src), cities.indexOf(dest));
      }
      
      






  return (
    <div className="main-div">
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
            <a className="nav-link active" id="navItem1" href="/about">
              About
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="contact" id="navItem2">
              Contact
            </a>
            <a className="nav-link" href="services" id="navItem3">
              Services
            </a>
            <a className="nav-link" href="followus" id="navItem4">
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div className="first-div">
    <p className="title">Get the shortest path here, to reach your destination</p>
  <div className="start">
  <p id="from">From :</p>
  <select id="src" className='' onChange={e=>setSrc(e.target.value)}>
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
        <button onClick={dijkstraAlgo} className="sub">Get shortest path</button>

  
        <br/><br/><br/>
        {path.length > 0 ? (
          <div className='output'>
            <h3></h3>
            <ul>
            {path.map((value, index) => {
              if (value === pg) {
                return (
                  <div key={index}>
                    <li>
                      <h4 id="pg-item" className='value-item'>{value}</h4>
                    </li>
                    <FaArrowDown className="arrow-icon-pg"/>
                  </div>
                );
              } else if (value === ap) {
                return (
                  <div key={index}>
                    <li>
                      <h4 id="ap-item" className='value-item'>{value}</h4>
                    </li>
                    <FaArrowDown className="arrow-icon-ap"/>
                  </div>
                );
              } else if (value === mgbs) {
                return (
                  <div key={index}>
                    <li>
                      <h4 id="mgbs-item" className='value-item'>{value}</h4>
                    </li>
                    <FaArrowDown className="arrow-icon-mgbs"/>
                  </div>
                );
              } else if(blueLine.includes(value)){
                return (
                  <div key={index}>
                    <li>
                      <h4 id="b-item" className='value-item'>{value}</h4>
                    </li>
                    <FaArrowDown className="arrow-icon-blue"/>
                  </div>
                );
              } else if(redLine.includes(value)){
                return (
                  <div key={index}>
                    <li>
                      <h4 id="r-item" className='value-item'>{value}</h4>
                    </li>
                    <FaArrowDown className="arrow-icon-red"/>
                  </div>
                );
              } else if(greenLine.includes(value)){
                return (
                  <div key={index}>
                    <li>
                      <h4 id="g-item" className='value-item'>{value}</h4>
                    </li>
                    <FaArrowDown className="arrow-icon-green"/>
                  </div>
                );
              }
            })}
            </ul>
          </div>
        ) : (
          <p> </p>
        )}

        {r?<h3 className='final-dest'>Destination</h3>:<p></p>}

        {ss?<h3 className='same-station-msg'>Source and Destination can't be same</h3>:<p></p>}
        </div>
  )
}

export default ShortDistance;
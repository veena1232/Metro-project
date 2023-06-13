import React from 'react';
import logo from "./logo.jpg";
import { graph } from './Data/Distance';
import { cities } from './Data/Cities';
import { useState, useEffect } from 'react';

const ShortDistance = () => {
  const [src, setSrc] = useState("Ameerpet");
  const [dest, setDest] = useState("Ameerpet");
  const [path, setPath] = useState([]);

 

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
        
        //document.getElementById("output").innerHTML = "Shortest route from "+cities[src]+" to "+cities[dest]+" is : " ;
        
        for(let i=0;i<path.length-1;i++){
          setPath(prevPath => [...prevPath, cities[path[i]]]);
        }
        console.log(path)
        //document.getElementById("op").innerHTML = s;
        //document.getElementById("op2").innerHTML = "<h1>"+path.length-1+"</h1>";
        //document.write(cities[dest]+" is : " + shortestDistances[i]);
        
      }
                      
      
      const dijkstraAlgo=()=>{
        console.log("s= "+src);
        if(src==dest){
          document.write("Source and Destination can't be same");
        }
        dijkstra(graph, cities.indexOf(src), cities.indexOf(dest));
      }
      
      






  return (
    <div className="main-div">
    <div className="header">
    <img src={logo} id="logo"/>
    <p id="logo-title">YOURS METRO</p>

    <div className="nav">  
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">HydMetro</a>
    </div>
  </div>
  <div className="first-div">
    <p className="title">Get the shortest path here, to reach your destination</p>
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
  <div className="icon-container-1">
    <i className="fa-solid fa-caret-down"></i>
  </div>
  
  <p id="to">To :</p>
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
        <div className="icon-container-2">
            <i className="fa-solid fa-caret-down"></i>
        </div>
        
        </div>
        
        </div>
        <button onClick={dijkstraAlgo} className="sub">Get shortest path</button>

  
        <br/><br/><br/>
        {path.length > 0 ? (
          <div>
            <h3>Path:</h3>
            <ul>
              {path.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p></p>
        )}
        <h3 id="output">OUTPUT</h3>
        <h3 id="op"></h3>
        <h3 id="op2"></h3>
    </div>
  )
}

export default ShortDistance;
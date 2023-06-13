import React from 'react';
import logo from "./logo.jpg";
import { graph } from './Data/Distance';
import { cities } from './Data/Cities';
import { times } from './Data/Times';
import { useState, useEffect } from 'react';

const STime = () => {
  const [src, setSrc] = useState("Ameerpet");
  const [dest, setDest] = useState("Ameerpet");

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
    let d = dijkstraForTimes(times, cities.indexOf(src), cities.indexOf(dest));
    document.getElementById("op").innerHTML = d+" minutes";
  }
  
  


  return (
    <div>
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

  
  <select id="dest" onChange={e=>setDest(e.target.value)}>
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

  <button onClick={dijkstraTimesAlgo}>SUBMIT</button>
  <br/><br/><br/>
  <h3 id="output">Minimum time : </h3>
  <h3 id="op"></h3>
    </div>
  )
}

export default STime
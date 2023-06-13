import React from 'react';
import logo from "./logo.jpg";
import { graph } from './Data/Distance';
import { cities } from './Data/Cities';
import { times } from './Data/Times';
import { useState, useEffect } from 'react';

const AllPaths = () => {
  const [src, setSrc] = useState("Ameerpet");
  const [dest, setDest] = useState("Ameerpet");


  function dijkstraAllPaths(graph, src, dest) {
    const V = graph.length;
    const paths = []; // Array to store all possible paths
    const path = [src]; // Current path being explored
  
    dijkstraHelper(graph, src, dest, path, paths);
  
    return paths;
  }
  
  function dijkstraHelper(graph, u, dest, path, paths) {
    if (u === dest) {
      // Reached the destination vertex
      paths.push([...path]); // Store a copy of the current path
    } else {
      const V = graph.length;
  
      for (let v = 0; v < V; v++) {
        if (graph[u][v] !== 0 && !path.includes(v)) {
          // Explore unvisited neighbors
          path.push(v);
          dijkstraHelper(graph, v, dest, path, paths);
          path.pop(); // Backtrack
        }
      }
    }
  }
  

  
function dijkstraAllPathsAlgo(){
    const paths = dijkstraAllPaths(graph, cities.indexOf(src), cities.indexOf(dest));
    let s ="";
    for(let i=0;i<paths.length;i++){
        //s=s+cities[paths[i]];
        s=s+"\nPath "+(i+1)+" : ";
        for(let j=0;j<paths[i].length;j++){
            if(j!=paths[i].length-1)
                s=s+cities[paths[i][j]]+"--->";
            else
                s=s+cities[paths[i][j]];
        }
        
    }
    document.getElementById("op").innerHTML = s;
    console.log("All possible paths:", paths);
    // const source = 0;
    // const destination = 4;
    
    // const paths = dijkstraAllPaths(graph, source, destination);
    // console.log(paths)
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

  <button onClick={dijkstraAllPathsAlgo}>SUBMIT</button>
  <br/><br/><br/>
  <h3 id="output">OUTPUT</h3>
  <h3 id="op"></h3>
  <h3 id="op2"></h3>
  </div>
  )
}

export default AllPaths
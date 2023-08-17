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

  const [ss, setSs] = useState(false);

  const [blueLine, setBlueLine] = useState(["Raydurg", "Hitech City", "Durgam Cheruvu", "Madhapur", "Peddamma Gudi", "Jubilee Hills Checkpost", "Rd no.5 Jubliee Hills","Yusufguda","Madhuranagar","Begumpet","Prakash Nagar","Rasoolpura", "Paradise","Secunderabad East", "Mettuguda", "Tarnaka", "Habsiguda", "NGRI", "Stadium", "Uppal", "Nagole"]);
  const [redLine, setRedLine] = useState(["JNTU College", "KPHB Colony", "Kukatpally", "Dr B.R. Ambedkar Balanagar", "Musapet", "Bharatnagar", "Erragadda", "ESI Hospital", "SR Nagar", "Punjagutta", "Irrum Manjil", "Khairatabad", "Lakdi-ka-pul","Assembly", "Gandhi Bhavan", "Osmania Medical College", "Malakpet", "New Market", "Musarambagh", "Dilsukhnagar", "Chaitanyapuri", "Victoria Mahal", "LB Nagar", "Miyapur"]);
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
        console.log(src)
        console.log(blueLine.includes("Rasoolpura"))
        if(src==dest){
          setSs(true);
          return;
        }
        setSs(false)
        dijkstra(graph, cities.indexOf(src), cities.indexOf(dest));
      }

  return (
    <div className="main-div">
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo2} alt="Logo" width={50} height={50} />
          </a>
          <h3 id="title" className="col-8 col-md-12">Y<span className="title-span">our</span> Metro</h3>
          
        </div>
      </nav>
  <div className='content-div'>
  <div className="first-div">
  <center><p className="title"><marquee>Get the shortest path here, to reach your destination</marquee></p></center>
  <center className="start">
  <p id="from" className=''>From :</p>
  <select id="src" className='' onChange={e=>setSrc(e.target.value)}>
    <option>Select source station</option>
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
  </center>
  
  <center className='end'>
  <p id="to">To :</p>
  <div id="to-id">
  <select id="dest" onChange={e=>{setDest(e.target.value)}}>
    <option>Select destination station</option>
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
    </center>
  </div>
  </div>
        <center><button onClick={dijkstraAlgo} className="sub">Get shortest path</button></center>

  
        <br/><br/><br/>
        {path.length > 0 ? (
          <center className='output'>
            <h3></h3>
            <ul>
            {path.map((value, index) => {
              if (value === pg) {
                return (
                  <div key={index}>
                    <center>
                    {index==0 && blueLine.includes(path[index+1]) &&<p className='pg-blue'>[Get into blue line]</p>}
                    {index==0 && greenLine.includes(path[index+1]) &&<p className='pg-green'>[Get into green line]</p>}
                    
                    <li>
                      <p id="pg-item" className='value-item'>{value}</p>
                    </li>
                    {blueLine.includes(path[index-1]) && greenLine.includes(path[index+1]) &&
                       <p className='pg-green'>[Change here for green line]</p>}
                    {blueLine.includes(path[index+1]) && greenLine.includes(path[index-1]) &&
                        <p className='pg-blue'>[Change here for blue line]</p>}
                    {index!==path.length-1 &&<center><FaArrowDown className="arrow-icon-pg"/></center>}
                    </center>
                  </div>
                );
              } else if (value === ap) {
                return (
                  <div key={index}>
                  <center>
                    {index==0 && blueLine.includes(path[index+1]) &&<p className='ap-blue'>[Get into blue line]</p>}
                    {index==0 && redLine.includes(path[index+1]) &&<p className='ap-red'>[Get into red line]</p>}
                    
                    <li>
                      <p id="ap-item" className='value-item'>{value}</p>
                    </li>
                    {blueLine.includes(path[index-1]) && redLine.includes(path[index+1]) &&
                      <p className='ap-red'>[Change here for red line]</p>}
                    {blueLine.includes(path[index+1]) && redLine.includes(path[index-1]) &&
                        <p className='ap-blue'>[Change here for blue line]</p>}
                    {index!==path.length-1 &&<FaArrowDown className="arrow-icon-ap"/>}
                    </center>
                  </div>
                );
              } else if (value === mgbs) {
                return (
                  <div key={index}>
                  <center>
                    {index==0 && redLine.includes(path[index+1]) &&<p className='mgbs-red'>[Get into red line]</p>}
                    {index==0 && greenLine.includes(path[index+1]) &&<p className='mgbs-green'>[Get into green line]</p>}
                   
                    <li>
                      <p id="mgbs-item" className='value-item'>{value}</p>
                    </li>
                    {greenLine.includes(path[index-1]) && redLine.includes(path[index+1]) &&
                      <p className='mgbs-red'>[Change here for red line]</p>}
                    {greenLine.includes(path[index+1]) && redLine.includes(path[index-1]) &&
                        <p className='mgbs-green'>[Change here for green line]</p>}
                    {index!==path.length-1 &&<FaArrowDown className="arrow-icon-mgbs"/>}
                    </center>
                  </div>
                );
              } else if(blueLine.includes(value)){
                return (
                  <div key={index}>
                  <center>
                  {index==0 &&<p className='pg-blue'>[Get into blue line]</p>}
                    <li>
                      <p id="b-item" className='value-item'>{value}</p>
                    </li>
                    {index!==path.length-1 &&<FaArrowDown className="arrow-icon-blue"/>}
                  </center>
                  </div>
                );
              } else if(redLine.includes(value)){
                return (
                  <div key={index}>
                  <center>
                  {index==0 &&<p className='ap-red'>[Get into red line]</p>}
                    <li>
                      <p id="r-item" className='value-item'>{value}</p>
                    </li>
                    {index!==path.length-1 &&<FaArrowDown className="arrow-icon-red"/>}
                  </center>
                  </div>
                );
              } else if(greenLine.includes(value)){
                return (
                  <div key={index}>
                  <center>
                  {index==0 &&<p className='pg-green'>[Get into green line]</p>}
                    <li>
                      <p id="g-item" className='value-item'>{value}</p>
                    </li>
                    {index!==path.length-1 &&<FaArrowDown className="arrow-icon-green"/>}
                  </center>
                  </div>
                );
              }
            })}
            </ul>
          </center>
        ) : (
          <p> </p>
        )}
        {ss?<center><h3 className="sdc">Source and Destination can't be same</h3></center>:<p></p>}
        <a href='/raydurg' className='mr-0'>Click here to more know about your destination</a>
        </div>
  )
}

export default ShortDistance;
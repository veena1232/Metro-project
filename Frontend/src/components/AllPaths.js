  import React from 'react';
  import logo from "./logo.jpg";
  import { graph } from './Data/Distance';
  import { cities } from './Data/Cities';
  import { times } from './Data/Times';
  import { useState, useEffect } from 'react';
  import { FaArrowDown } from 'react-icons/fa';
  import logo2 from "../components/Images/logo2.png";
  import "../styles/sdistancestyles.css";


  const AllPaths = () => {
    const [src, setSrc] = useState("Ameerpet");
    const [dest, setDest] = useState("Ameerpet");
    const [result, setResult] = useState([]);

    const [pg, setPg] = useState("Parade Ground");
    const [ap, setAp] = useState("Ameerpet");
    const [mgbs, setMgbs] = useState("MG Bus Station");

    const [r, setR] = useState(false);

    const [ss, setSs] = useState(false);

    const [blueLine, setBlueLine] = useState(["Raydurg", "Hitech City", "Durgam Cheruvu", "Madhapur", "Peddamma Gudi", "Jubilee Hills Checkpost", "Rd no.5 Jubliee Hills","Yusufguda","Madhuranagar","Begumpet","Prakash Nagar","Rasoolpura", "Paradise","Secunderabad East", "Mettuguda", "Tarnaka", "Habsiguda", "NGRI", "Stadium", "Uppal", "Nagole"]);
    const [redLine, setRedLine] = useState(["JNTU College", "KPHB Colony", "Kukatpally", "Dr B.R. Ambedkar Balanagar", "Musapet", "Bharatnagar", "Erragadda", "ESI Hospital", "SR Nagar", "Punjagutta", "Irrum Manjil", "Khairatabad", "Lakdi-ka-pul","Assembly", "Gandhi Bhavan", "Osmania Medical College", "Malakpet", "New Market", "Musarambagh", "Dilsukhnagar", "Chaitanyapuri", "Victoria Mahal", "LB Nagar"]);
    const [greenLine, setGreenLine] = useState(["Secunderabad West", "Gandhi Hospital", "Musheerabad", "RTC X Roads", "Chikkadapally", "Narayanguda", "Sultan Bazar"])


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
  
    setResult([]);
      const paths = dijkstraAllPaths(graph, cities.indexOf(src), cities.indexOf(dest));
      const s =[];
      const res=[];
      for(let i=0;i<paths.length;i++){
          //s=s+cities[paths[i]];
          let s=[];
          for(let j=0;j<paths[i].length;j++){
            s.push(cities[paths[i][j]]);
          }
          res.push(s);  
      }
      console.log(res);
      setResult(res)
      // const source = 0;
      // const destination = 4;
      
      // const paths = dijkstraAllPaths(graph, source, destination);
      // console.log(paths)
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
  <center><p className="title"><marquee>There could be multiple ways to solve a problem</marquee></p></center>
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
  <option>Select destination station </option>
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
    <center><button onClick={dijkstraAllPathsAlgo} className='sub'>Get All Paths</button></center>
    <br/><br/><br/>

    

    <div>
    
    {result.length > 0 && (
      <div>
      <center><h3 className='noofpaths'>Possible Paths : {result.length}</h3></center>
      <div className='output-paths'>
      
        {result.map((path, index) => (
          <h4 className='output-h4' key={index}>
            <center className='path-no'>Path {index + 1}:</center> {path.map((city, cityIndex) => {
              if(city==pg){
                return(
                  <center>
                    {cityIndex==0 && blueLine.includes(path[cityIndex+1]) &&<p className='pg-blue'>[Get into blue line]</p>}
                    {cityIndex==0 && greenLine.includes(path[cityIndex+1]) &&<p className='pg-green'>[Get into green line]</p>}
                    
                    <React.Fragment key={cityIndex}>
                      <p  id="pg-item" className='value-item'>{city}<br/></p>
                      {blueLine.includes(path[cityIndex-1]) && greenLine.includes(path[cityIndex+1]) &&
                        <p className='pg-green'>[Change here for green line]</p>}
                     {blueLine.includes(path[cityIndex+1]) && greenLine.includes(path[cityIndex-1]) &&
                         <p className='pg-blue'>[Change here for blue line]</p>}
                      {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                    </React.Fragment>
                  </center>
                )
              }else if(city==ap){
                return(
                  <center>
                  {cityIndex==0 && blueLine.includes(path[cityIndex+1]) &&<p className='ap-blue'>[Get into blue line]</p>}
                    {cityIndex==0 && redLine.includes(path[cityIndex+1]) &&<p className='ap-red'>[Get into red line]</p>}
                  <React.Fragment key={cityIndex}>
                  <p id="ap-item" className='value-item'>{city}<br/></p>
                  {blueLine.includes(path[cityIndex-1]) && redLine.includes(path[cityIndex+1]) &&
                    <p className='ap-red'>[Change here for red line]</p>}
                  {blueLine.includes(path[cityIndex+1]) && redLine.includes(path[cityIndex-1]) &&
                      <p className='ap-blue'>[Change here for blue line]</p>}
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  
                  </center>
                )
              } else if(city==mgbs){
                return(
                  <center>
                  {cityIndex==0 && redLine.includes(path[cityIndex+1]) &&<p className='mgbs-red'>[Get into red line]</p>}
                    {cityIndex==0 && greenLine.includes(path[cityIndex+1]) &&<p className='mgbs-green'>[Get into green line]</p>}
                  <React.Fragment key={cityIndex}>
                  <p id="mgbs-item" className='value-item'>{city}<br/></p>
                    {greenLine.includes(path[cityIndex-1]) && redLine.includes(path[cityIndex+1]) &&
                      <p className='mgbs-red'>[Change here for red line]</p>}
                    {greenLine.includes(path[cityIndex+1]) && redLine.includes(path[cityIndex-1]) &&
                        <p className='mgbs-green'>[Change here for green line]</p>}
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </center>
                )
              }
              else if(blueLine.includes(city)){
                return(
                  <center>
                  {cityIndex==0 &&<p className='pg-blue'>[Get into blue line]</p>}
                  <React.Fragment key={cityIndex}>
                  <p id="b-item" className='value-item'>{city}<br/></p>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </center>
                )
              }else if(redLine.includes(city)){
                return(
                  <center>
                  {cityIndex==0 &&<p className='ap-red'>[Get into red line]</p>}
                  <React.Fragment key={cityIndex}>
                  <p id="r-item" className='value-item'>{city}<br/></p>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </center>
                )
              } else if(greenLine.includes(city)){
                return(
                  <center>
                  {cityIndex==0 &&<p className='pg-green'>[Get into green line]</p>}
                  <React.Fragment key={cityIndex}>
                  <p id="g-item" className='value-item'>{city}<br/></p>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </center>
                )
              }
              // <center>
              // <React.Fragment key={cityIndex}>
              // <p id="g-item" className='value-item'>{city}<br/></p>
              //   {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
              // </React.Fragment>
              // </center>
            })}
          </h4>
        ))}
      </div>
      </div>
    )}
      </div>
    </div>
    )
  }

  export default AllPaths
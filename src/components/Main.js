import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import STime from "./STime";
import AllPaths from "./AllPaths";
import PlatformDetails from "./PlatformDetails";
import ShortDistance from './SDistance';
import Home from './Home';

const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/stime" element={<STime/>}></Route>
            <Route path="/sdistance" element={<ShortDistance/>}></Route>
            <Route path="/allpaths" element={<AllPaths/>}></Route>
            <Route path="/platforms" element={<PlatformDetails/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Main
// <div className="menu">
//             <div class="container">
//                 <div class="row">
//                     <div calss="col-4">
//                         <div>
//                         <ul>
//                             <li><Link to="/sdistance">Shortest Route(Stations)</Link></li><br/><br/>
//                             <li><Link to="/stime">Shortest Route(Time)</Link></li><br/><br/>
//                             <li><Link to="/allpaths">All possible paths</Link></li><br/><br/>
//                             <li><Link to="/platforms">Platform Details</Link></li><br/><br/>
//                         </ul>
        
//                         </div>                    
//                     </div>

//                 </div>

//             </div>
//         </div>
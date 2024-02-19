import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import STime from "./STime";
import AllPaths from "./AllPaths";
import PlatformDetails from "./PlatformDetails";
import ShortDistance from './SDistance';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Sample from './Sample';
import Nearby from './Nearby';
import Raydurg from './Raydurg';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Map from './Map'
const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/map" element={<Map/>}></Route>
            <Route path="/stime" element={<STime/>}></Route>
            <Route path="/sdistance" element={<ShortDistance/>}></Route>
            <Route path="/allpaths" element={<AllPaths/>}></Route>
            <Route path="/platforms" element={<PlatformDetails/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/sample' element={<Sample/>}></Route>
            <Route path='/nearbyplaces' element={<Nearby/>}></Route>
            <Route path='/raydurg' element={<Raydurg/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Main

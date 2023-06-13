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

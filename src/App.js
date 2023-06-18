import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <Main/>
  );
}

export default App;

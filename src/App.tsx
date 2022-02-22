import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './Routes';

function App() {
  return(
    <Router>
      <Navbar />
        <Routes />
    </Router>
  )
 
}

export default App;

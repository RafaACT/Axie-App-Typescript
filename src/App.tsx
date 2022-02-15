import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { Rout as Routes } from './Routes';

function App() {
  return(
    <div>
      <Router>
        <Navbar />
          <Routes />
      </Router>
    </div>
  )
 
}

export default App;

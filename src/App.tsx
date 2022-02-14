import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Rout from './Routes';

function App() {
  return(
    <div>
      <Router>
        <Navbar />
          <Rout />
      </Router>
    </div>
  )
 
}

export default App;

import React from "react";
import Dullgrip from './assets/Dullgrip.png'
import Choreto from './assets/Choreto.png'
import Shieldbreak from './assets/Shieldbreak.png'
import Peludito from './assets/Peludito.png'
import Termi from './assets/Termi.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <div className="topnav">
                <a href='http://localhost:3000/'><img className='axie' src={Dullgrip} /></a>
                <a href='http://localhost:3000/'><img className='axie' src={Choreto} /></a>
                <a href='http://localhost:3000/'><img className='axie' src={Termi} /></a>
                <a href='http://localhost:3000/'><img className='axie' src={Peludito} /></a>
                <a href='http://localhost:3000/'><img className='axie' src={Shieldbreak} /></a>
            </div>
            <div className="container">
                <div className="btn-group">
                    <Link to='/MMR' className="btn btn-dark btn-lg m-5">
                        MMR tool
                    </Link>
                    <Link to='/axietool' className="btn btn-dark btn-lg m-5">
                        Axie tool
                    </Link>
                    <Link to='/cryptos' className="btn btn-dark btn-lg m-5">
                        Cryptos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

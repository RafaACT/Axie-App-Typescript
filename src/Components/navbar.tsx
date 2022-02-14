import React from "react";
import Dullgrip from './img/Dullgrip.png'
import Choreto from './img/Choreto.png'
import Shieldbreak from './img/Shieldbreak.png'
import Peludito from './img/Peludito.png'
import Termi from './img/Termi.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <div>
            <div className="topnav">
                <img className='axie' src={Dullgrip} />
                <img className='axie' src={Choreto} />
                <img className='axie' src={Termi} />
                <img className='axie' src={Peludito} />
                <img className='axie' src={Shieldbreak} />
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
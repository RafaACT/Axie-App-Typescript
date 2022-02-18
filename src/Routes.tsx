import React from "react";
import { Routes, Route } from "react-router-dom";
import MMR from './modules/axie/mmr/MMR'
import Cryptos from "./modules/crypto/Cryptos";
import AxieTool from "./modules/axie/axieTool/AxieTool";
import Welcome from "./modules/welcome/Welcome";

export function Rout() {
    return(
        <div>
            <Routes>
                <Route path="/MMR" element={<MMR />}/>
                <Route path='axietool' element={<AxieTool />}/>
                <Route path='cryptos' element={<Cryptos />}/>
                <Route path="" element={<Welcome />} />
            </Routes>
        </div>
    )
}
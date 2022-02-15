import React from "react";
import { Routes, Route } from "react-router-dom";
import MMR from './modules/axie/mmr/MMR'
import AxieTool from './modules/axie/axieTool/AxieTool';
import Cryptos from "./modules/crypto/Cryptos";

export function Rout() {
    return(
        <div>
            <Routes>
                <Route path="/MMR" element={<MMR />}/>
                <Route path='axietool' element={<AxieTool />}/>
                <Route path='cryptos' element={<Cryptos />}/>
            </Routes>
        </div>
    )
}
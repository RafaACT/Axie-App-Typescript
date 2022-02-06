import React from "react";
import { Routes, Route } from "react-router-dom";
import MMR from './MMR/MMR'
import AxieTool from './AxieTool/AxieTool';
import Cryptos from "./Cryptos/Cryptos";

export default function Rout() {
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
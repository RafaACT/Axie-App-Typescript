import React from "react";
import { Routes, Route } from "react-router-dom";
import MMR from './MMR'
import AxieTool from './AxieTool';

export default function Rout() {
    return(
        <div>
            <Routes>
                <Route path="/MMR" element={<MMR />}/>
                <Route path='axietool' element={<AxieTool />}/>
            </Routes>
        </div>
    )
}
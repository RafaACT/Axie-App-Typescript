import React, { lazy, Suspense } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Welcome from "./modules/welcome/ExportWelcome";
import ReactLoading from 'react-loading';

const Cryptos = lazy(() => import('./modules/crypto/ExportCryptos'))
const AxieTool = lazy(() => import('./modules/axie/axieTool/ExportAxieTool'))
const MMR = lazy(() => import('./modules/axie/mmr/ExportMMR'))

export function Routes() {
    return(
        <Suspense fallback={<div>                
            <h1>LOADING...</h1>
            <ReactLoading type="balls" color="black" 
            height={1000} width={500} className='charging'/>
            </div>}>
            <Switch>
                <Route path="/MMR" element={<MMR />}/>
                <Route path='axietool' element={<AxieTool />}/>
                <Route path='cryptos' element={<Cryptos />}/>
                <Route path="/" element={<Welcome />} />
            </Switch>
        </Suspense>
    )
}
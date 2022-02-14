import React, { useState } from "react";
import ReactLoading from 'react-loading';
import Cards from "./Cards";
import './axieTool.css'
import FetchData from "../../../api/api";

function AxieTool() {

    const [Axienumber, setAxienumber] = useState<number>()
    const [axieIMG, setAxieIMG] = useState<string>()
    const [axieInfo, setAxieInfo] = useState<string[]>()
    const [info, setInfo] = useState<boolean>(false)
    const [charging, setCharging] = useState<boolean>(false)

    function getAxie(event: any){
        event.preventDefault()
        setCharging(true)
        const URLaxieNumber = 'https://assets.axieinfinity.com/axies/'
        const URLaxieNumberEnd = '/axie/axie-full-transparent.png'
        const AxieInfo = 'https://api.axie.technology/getaxies/'

        const linkIMG = URLaxieNumber + Axienumber + URLaxieNumberEnd
        const Info = AxieInfo + Axienumber
        
        const data = FetchData(Info)
            .then(data => { 
            setAxieInfo(data)
            setAxieIMG(linkIMG)
            setCharging(false)
            setInfo(true)
        })
    }

    function AxieNumber(event: any){
        setAxienumber(event.target.value)
      }

      return(
          <div>
            <input 
            className='box'
            type='number'
            name='AxieNumber'
            placeholder='Place Axie #'
            value={Axienumber}
            onChange={AxieNumber}
            />
            <button onClick={getAxie}>Get Axie</button>
              {charging === false ? null:
                <div>
                    <h1>LOADING...</h1>
                    <ReactLoading type="balls" color="black" 
                    height={1000} width={500} className='charging'/>
                </div>}
              {info === false ? null : 
              <div>
                  <Cards axieIMG={axieIMG} axieInfo={axieInfo}/>
              </div>
              }
          </div>
      )
}

export default AxieTool
import React, { useState } from "react";
import ReactLoading from 'react-loading';
import Cards from "./cards";

function AxieTool() {

    const [Axienumber, setAxienumber] = useState<number>()
    const [axieIMG, setAxieIMG] = useState<string>()
    const [axieInfo, setAxieInfo] = useState<any>()
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
        fetch(Info)
            .then(response => response.json())
            .then (response => {
                setAxieInfo(response)
                setAxieIMG(linkIMG)
                setInfo(true)
                setCharging(false)
            })
    }

    function AxieNumber(event: any){
        const {value} = event.target
        setAxienumber(value)
      }

      return(
          <div>
              <form onSubmit={getAxie}>
                  <input 
                    className='box'
                    type='number'
                    name='AxieNumber'
                    placeholder='Place Axie #'
                    value={Axienumber}
                    onChange={AxieNumber}
                  />
                  <button>Get Axie</button>
              </form>
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
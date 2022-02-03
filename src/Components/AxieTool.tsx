import React, { useState } from "react";
import ReactLoading from 'react-loading';

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
                  <img src={axieIMG} className="BigAxie" />
                    <h1 className="name">{axieInfo.name}</h1>
                    <div className="container">
                        <div className="row">
                            {axieInfo.parts.map((part:any) =>
                            part.type == 'Ears' || part.type == 'Eyes' ? null :
                                <div className="col-sm">
                                    <p className='partname'>{part.name}</p>
                                    <div className="inside">
                                        <img src={part.abilities[0].backgroundUrl} className="card"/>
                                        <p className='n'>{part.abilities[0].energy}</p>
                                        <p className='nameability'>{part.abilities[0].name}</p>
                                        <div className='circulo'>
                                            <img className='espada' src='https://i.pinimg.com/originals/77/e4/46/77e446ae25e6ced855c46a0b9500abe1.png' />
                                            <p className='attack'>{part.abilities[0].attack}</p>
                                        </div>
                                        <div className='circulo2'>
                                            <img className='escudo' src='http://assets.stickpng.com/thumbs/580b585b2edbce24c47b290c.png' />
                                            <p className='defense'>{part.abilities[0].defense}</p>
                                        </div>
                                        <p className='description'>{part.abilities[0].description}</p>
                                    </div>
                                </div>
                                )}
                        </div>
                    </div>
              </div>
              }
          </div>
      )
}

export default AxieTool
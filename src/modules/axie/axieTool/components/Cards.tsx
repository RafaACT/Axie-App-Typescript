import React from 'react'
import { Part, Axie } from '../interfaces/Interfaces'

export const Cards = (props: Axie) => {
    return(
    <div>
        <div className='container'>
            <div className='containBigAxie'>
                <img src={props.axieIMG} className="BigAxie" />
            </div>
        </div>
        <h1 className="name">{props.axieInfo?.name}</h1>
        <div className="container">
            <div className="row">
                {props.axieInfo?.parts.map((part:Part) =>
                part.type == 'Ears' || part.type == 'Eyes' ? null :
                    <div className="col-sm">
                        <p className='partname'>{part.name}</p>
                        <div className="inside">
                            <img src={part.abilities[0].backgroundUrl} className="card"/>
                            <p className='energy'>{part.abilities[0].energy}</p>
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
    )}


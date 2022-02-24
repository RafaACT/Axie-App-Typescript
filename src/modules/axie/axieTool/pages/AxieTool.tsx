import React, { useState, useReducer } from "react";
import ReactLoading from 'react-loading';
import { Cards } from "../components/Cards";
import '../css/AxieTool.css'
import { useFetchData } from "../../../../api/useFetch";
import { Data, Action } from "../interfaces/Interfaces";

export const AxieTool =  () => {

    const initialState:Data = {
        axieIMG: '',
        axieInfo: [],
        info: false,
        loading: false,
        error: false
    }

    const reducer = (state: Data, action:Action<any>) => {
        switch (action.type) {
            default:
                return state
    
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    axieInfo: action.payload,
                    axieIMG: action.payload2,
                    info: true,
                    error: false
                }
    
            case 'FETCH_PENDING':
                return {
                    ...state,
                    loading: true,
                    info: false,
                    error: false
                }
            case 'FETCH_ERROR':
                return {
                    ...state,
                    loading: false,
                    info: false,
                    error: true
                }
        }
    }

    const HandleAxieNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAxieNumber(parseInt (event.target.value))
      }

    const[axieNumber, setAxieNumber] = useState<number>()
    const[state, dispatch] = useReducer(reducer, initialState)

    const getAxie = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const URLaxieNumber = 'https://assets.axieinfinity.com/axies/'
        const URLaxieNumberEnd = '/axie/axie-full-transparent.png'
        const AxieInfo = 'https://api.axie.technology/getaxies/'

        const linkIMG = URLaxieNumber + axieNumber + URLaxieNumberEnd
        const Info = AxieInfo + axieNumber

        const data = async() => {
            dispatch({type: 'FETCH_PENDING'})
            const data = await useFetchData(Info)
            if (data === 'error') {
                dispatch({type: 'FETCH_ERROR'})
                throw('ERROR')
            }
            dispatch({...state, type: 'FETCH_SUCCESS', payload: data, payload2: linkIMG})
        } 
        data()
    }
    return(
        <div>
        <input 
        className='box'
        type='number'
        name='AxieNumber'
        placeholder='Place Axie #'
        value={axieNumber}
        onChange={HandleAxieNumber}
        />
        <button onClick={getAxie}>Get Axie</button>
            {state.loading === false ? null:
            <div>
                <h1>LOADING...</h1>
                <ReactLoading type="balls" color="black" 
                height={1000} width={500} className='charging'/>
            </div>}
            {state.info === false ? null : 
            <div>
                <Cards axieIMG={state.axieIMG} axieInfo={state.axieInfo}/>
            </div>
            }
            {state.error === false ? null :
            <div>
                <h1>Invalid Axie</h1>
            </div>
            }
        </div>
    )
}
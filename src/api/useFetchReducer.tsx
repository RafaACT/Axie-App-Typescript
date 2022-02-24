import React, { useEffect, useReducer } from "react";

interface Data {
    loading: boolean,
    error: boolean,
    data: string[],
    info: boolean
}

export type Action<T> =
|   { type: 'FETCH_SUCCESS'; payload: T}
|   { type: 'FETCH_PENDING' }
|   { type: 'FETCH_ERROR' }

const reducer = (state:Data, action:Action<any>) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: false,
                info: true
            }
        
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: true,
                info: false
            }
        case 'FETCH_PENDING':
                return{
                    ...state,
                    loading: true,
                    error: false,
                    info:false
                }

        default:
            return state
    }
}

export const useFetch = (endpoint:string) => {
    const initialState:Data = {
        loading: true,
        error:false,
        data: [],
        info: false
    }

    const[state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const FetchData = async(): Promise<any> => {
            dispatch({type: 'FETCH_PENDING'})
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    dispatch({type: 'FETCH_ERROR'})
                    throw ('API not working')
                }
                const data = await response.json();
                dispatch({type: 'FETCH_SUCCESS', payload: data})
            }catch {
                dispatch({type: 'FETCH_ERROR'})
                throw('API is not working')
            }
          }
        FetchData()
    }, [])

    return state
}
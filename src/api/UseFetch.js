import React, { useEffect, useReducer } from "react";

const createInitialState = (initialState) => ({
    loading: true,
    error:false,
    data: [],
    info: false
})

const reducer = (state, action) => {
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

const UseFetch = (endpoint, initialState) => {
    const[state, dispatch] = useReducer(reducer, createInitialState(initialState))

    useEffect(() => {
        const FetchData = async() => {
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

export default UseFetch
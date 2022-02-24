import React, { useState } from "react";
import { Currency } from "../components/AxieCurrency";
import { Currency2 } from "../components/FilteredCurrency";
import '../css/Cryptos.css'
import ReactLoading from 'react-loading';
import { useFetch } from "../../../api/useFetchReducer";
import { Cryptos as crypto } from "../interfaces/Interfaces";

export const Cryptos = () => {
    const [search, setSearch] = useState<string>('')

    const { loading, data, error} = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=249&page=1&sparkline=false')

    const filteredCoins =
        data?.filter((coin: crypto) => 
        coin.name.toLowerCase().includes(search?.toLowerCase()))

    const HandleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }   
    
    if (loading) {
        return(
            <div>
                <h1>LOADING...</h1>
                <ReactLoading type="balls" color="black" 
                height={1000} width={500} className='charging'/>
            </div>
        )
    }

    if (error) {
        return(
            <h1>There was an error</h1>
        )
    }

    return(
        <div>
            <Currency coins={data}/>
            <h1 className="search">Search for a different Currency</h1>
            <input 
            type='text'
            placeholder="Search"
            className="box"
            value={search}
            onChange={HandleSearch}
            />

            {search === '' ? null : 
            <Currency2 coins={filteredCoins} />}
        </div>
    )
}
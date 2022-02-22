import { type } from "os";
import React, { useEffect, useState } from "react";
import FetchData from "../../../api/Api";
import Currency from "../components/AxieCurrency";
import '../css/Cryptos.css'
import ReactLoading from 'react-loading';
import Currency2 from "../components/FilteredCurrency";

export const Cryptos = () => {
    const [coins, setCoins] = useState<string[]>()
    const [data, setData] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')


    useEffect(() => {
        const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=249&page=1&sparkline=false'

        const data = FetchData(api)
            .then(data =>  {
                setCoins(data)
                setData(true)
            })
        }, [])

    const filteredCoins =
        coins?.filter((coin: any) => 
        coin.name.toLowerCase().includes(search?.toLowerCase()))

    function HandleSearch(event: React.ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value)
    }   
    

    return(
        <div>
            {data === false ? 
            <div>
                <h1>LOADING...</h1>
                <ReactLoading type="balls" color="black" 
                height={1000} width={500} className='charging'/>
            </div>:
            <Currency coins={coins}/>}
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
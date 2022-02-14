import { type } from "os";
import React, { useEffect, useState } from "react";
import FetchData from "../../api/api";
import Currency from "./Currency";
import './Cryptos.css'

export default function Cryptos() {
    const [coins, setCoins] = useState<string[]>()
    const [data, setData] = useState<boolean>(false)


    useEffect(() => {
        const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=249&page=1&sparkline=false'

        const data = FetchData(api)
            .then(data =>  {
                setCoins(data)
                setData(true)
            })
        }, [])

    return(
        <div>
            {data === false ? null :
        
            <Currency coins={coins}/>
            }
        </div>
    )
}
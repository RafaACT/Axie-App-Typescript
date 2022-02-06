import { type } from "os";
import React, { useEffect, useState } from "react";
import './Cryptos.css'

export default function Cryptos() {
    const [coins, setCoins] = useState<any>()
    const [data, setData] = useState<boolean>(false)


    useEffect(() => {
        const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=249&page=1&sparkline=false'

        fetch(api)
            .then(response => response.json())
            .then(response => {
                setCoins(response)
                setData(true)
            })
    }, [])

    return(
        <div>
            {data === false ? null :
        
            coins.map((part: any) => 
                part.id !== 'bitcoin' && part.id !== 'ethereum' && part.id !== 'smooth-love-potion' && part.id !== 'axie-infinity' && part.id !=='ronin' ? null : 
                <div className="coin-container">
                    <div className="coin-row">
                        <div className="coin">
                            <img src={part.image} />
                            <h1>{part.name}</h1>
                            <p className="coin-symbol">{part.symbol}</p>
                        </div>
                        <div className="coin-data">
                            <p className="coin-price">${part.current_price}</p>
                            <p className="coin-volume">${part.total_volume.toLocaleString()}</p>
                            {part.price_change_percentage_24h < 0 ? 
                                <p className="coin-porcent red">{part.price_change_percentage_24h.toFixed(2)}</p> :
                                <p className="coin-porcent green">{part.price_change_percentage_24h.toFixed(2)}</p>
                            }
                            <p className="coin-marketcap">MKT Cap: $ {part.market_cap.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}
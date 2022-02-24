import React from "react";
import { Cryptos } from "../interfaces/Interfaces";

export const Currency2 = (props:any) => {
    return(
        <div>
            {props.coins.map((part: Cryptos) => 
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
                )}
        </div>
    )
}
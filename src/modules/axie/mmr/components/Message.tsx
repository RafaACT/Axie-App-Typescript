import React from "react";
import { MMRinterface } from "../interfaces/Interfaces";

export const message = (MMR:MMRinterface | undefined) => {
    const message = ''
    if(MMR!.items[1].elo >= 1500){
        const message = 'Que crack'
        return message
    } else if (MMR!.items[1].elo >= 1100 && MMR!.items[1].elo < 1500){
        const message = 'Vas por buen camino'
        return message
    } else {
        const message = 'Manco'
        return message
    }

}
import React from "react";

export interface Data {
    axieIMG: string,
    axieInfo: string[],
    info: boolean,
    loading:boolean
}

export type Action<T> =
|   { type: 'FETCH_SUCCESS'; payload: T; payload2: T }
|   { type: 'FETCH_PENDING' }
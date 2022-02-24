export interface Data {
    axieIMG: string,
    axieInfo: RootObject[],
    info: boolean,
    loading:boolean,
    error: boolean
}

export interface Axie {
    axieIMG: string | undefined,
    axieInfo: RootObject
}

export type Action<T> =
|   { type: 'FETCH_SUCCESS'; payload: T; payload2: T }
|   { type: 'FETCH_PENDING' }
|   { type: 'FETCH_ERROR' }

export interface Figure {
    atlas: string;
    model: string;
    image: string;
    __typename: string;
}

export interface Ability {
    id: string;
    name: string;
    attack: number;
    defense: number;
    energy: number;
    description: string;
    backgroundUrl: string;
    effectIconUrl: string;
    __typename: string;
}

export interface Part {
    id: string;
    name: string;
    class: string;
    type: string;
    stage: number;
    abilities: Ability[];
    __typename: string;
}

export interface Stats {
    hp: number;
    speed: number;
    skill: number;
    morale: number;
    __typename: string;
}

export interface OwnerProfile {
    name: string;
    __typename: string;
}

export interface Child {
    id: string;
    name: string;
    class: string;
    image: string;
    title: string;
    stage: number;
    __typename: string;
}

export interface RootObject {
    id: string;
    name: string;
    genes: string;
    owner: string;
    birthDate: number;
    bodyShape: string;
    class: string;
    sireId: number;
    sireClass: string;
    matronId: number;
    matronClass: string;
    stage: number;
    title: string;
    breedCount: number;
    level: number;
    figure: Figure;
    parts: Part[];
    stats: Stats;
    auction?: any;
    ownerProfile: OwnerProfile;
    children: Child[];
    __typename: string;
}

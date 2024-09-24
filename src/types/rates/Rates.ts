import { ECoinName } from "shared/types";

export enum ERateNA {
    NotAvaliable = 'N/A',
}

export interface ICoin {
    name: ECoinName;
    rate: number | ERateNA.NotAvaliable,
    ask: number | ERateNA.NotAvaliable,
    bid: number | ERateNA.NotAvaliable,
    diff24h: number | ERateNA.NotAvaliable
}

export type ICoinList = ICoin[];
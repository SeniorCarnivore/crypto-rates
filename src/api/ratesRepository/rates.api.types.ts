import { ECoinName, } from "shared/types";

export interface IFetchRatesRequestDTO { }

interface ICoinDTO {
    rate: number | string,
    ask: number,
    bid: number,
    diff24h: number
}

type TRatioDTO = {
    [key in ECoinName]: ICoinDTO
}

export type TFetchRatesResponseDTO = {
    [key in ECoinName]: TRatioDTO;
}
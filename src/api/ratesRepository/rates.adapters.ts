import { ERateNA, ICoinList } from "types/rates/Rates";
import { ECoinName } from "shared/types";
import { ONE_INCH } from "shared/constants";

import { TFetchRatesResponseDTO } from "./rates.api.types";

export const mapRates = (data: TFetchRatesResponseDTO): ICoinList => {
    const keys = Object.keys(data) as ECoinName[];

    return keys.map(name => {

        return ({
            rate: data[name][ECoinName.usd] ? Number(data[name].usd.rate) : ERateNA.NotAvaliable,
            ask: data[name][ECoinName.usd] ? Number(data[name].usd.ask) : ERateNA.NotAvaliable,
            bid: data[name][ECoinName.usd] ? Number(data[name].usd.bid) : ERateNA.NotAvaliable,
            diff24h: data[name][ECoinName.usd] ? Number(data[name].usd.diff24h) : ERateNA.NotAvaliable,
            name: name === ONE_INCH ? ECoinName.inch : name,
        });
    });
}
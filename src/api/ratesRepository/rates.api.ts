import { AxiosRequestConfig } from 'axios';

import { request, IRequest } from 'shared/services/request';

import { ratesEndpoints } from './rates.api.endpoints';
import {
    IFetchRatesRequestDTO,
    TFetchRatesResponseDTO,
} from './rates.api.types';


export const fetchRates: IRequest<IFetchRatesRequestDTO, TFetchRatesResponseDTO> = (
    options
) => {
    const { ...rest } = options;
    const requestParams: AxiosRequestConfig = {
        method: 'get',
        ...rest
    };

    return request(ratesEndpoints.ratesExtended, requestParams);
};
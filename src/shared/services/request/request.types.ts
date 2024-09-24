import { AxiosResponse, AxiosRequestConfig } from 'axios';

export interface IRequest<P, R> {
    (params: (P | null) & Partial<AxiosRequestConfig>): Promise<AxiosResponse<R>>;
}

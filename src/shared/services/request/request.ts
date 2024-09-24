import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';

import { EMPTY_STRING } from 'shared/constants';

const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json'
};

/**
 * Create a new Axios instance with a custom config.
 */
const request: AxiosInstance = axios.create({
    baseURL: EMPTY_STRING,
    responseType: 'json',
    headers: defaultHeaders,
});

/**
 * Create request, response & error handlers
 */
const requestHandler = (requestConfig: InternalAxiosRequestConfig) => {
    return requestConfig;
};

const responseHandler = (response: AxiosResponse) => {
    return response;
};

const errorHandler = (error: AxiosError) => {
    throw error;
};

/**
 * Configure interceptors from Axios
 */
request.interceptors.request.use(requestHandler, errorHandler);

request.interceptors.response.use(responseHandler, errorHandler);

/**
 * Export the newly created Axios instance to be used in different locations
 */
export { request };

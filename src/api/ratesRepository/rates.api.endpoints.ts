import { appConstants } from 'config/appConstants';

const RATES_BASE_URL = `${appConstants.apiBaseUrl}/rates`;

export const ratesEndpoints = {
    ratesExtended: `${RATES_BASE_URL}/extended`,
};

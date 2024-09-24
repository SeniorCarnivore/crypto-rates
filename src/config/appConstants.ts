import { getEnvVariable, sanitizeUrl } from 'shared/utils/envUtils';

const appConstants = {
    apiBaseUrl: sanitizeUrl(getEnvVariable('REACT_APP_API_BASE_URL')),
};

export { appConstants };
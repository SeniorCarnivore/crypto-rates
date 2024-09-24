export const getEnvVariable = (key: string): string => {
    const value = process.env[key];
    if (typeof value === 'undefined') {
        console.error(`Missing environment variable: ${key}`);
        return '';
    }
    return value;
};

const removeTrailingSlash = (url: string) => {
    return url.endsWith('/') ? url.substr(0, url.length - 1) : url;
};

const removeLeadingSlash = (url: string) => {
    return url.startsWith('/') ? url.substr(1, url.length) : url;
};

/**
 * Makes relative urls absolute.
 * Removes trailing slashes, if any.
 * If empty parameter, returns location.origin.
 */
export const sanitizeUrl = (url = '') => {
    const protocolPattern = new RegExp('^(?:[a-z]+:)?//', 'i');
    if (!url) {
        return window.location.origin;
    }
    if (protocolPattern.test(url)) {
        return removeTrailingSlash(url);
    }
    return removeTrailingSlash(`${window.location.origin}/${removeLeadingSlash(url)}`);
};
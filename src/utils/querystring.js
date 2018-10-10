import querystring from 'querystring';

export const serializer = params => {
    for (const key of Object.keys(params)) {
        if (!params[key] || params[key] === '') {
            delete params[key];
        }
    }

    return querystring.stringify(params);
};

export const parse = location =>
    querystring.parse(location.search && location.search.slice(1));

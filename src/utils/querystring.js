import querystring from 'querystring';

export const serializer = params => {
    for (const { key, value } of Object.entries(params)) {
        if (!value || value === '') {
            delete params[key];
        }
    }

    return querystring.stringify(params);
};

export const parse = ({ search }) =>
    querystring.parse(search && search.slice(1));

import http from '../http';

export const getToken = model =>
    http({
        url: '/token',
        method: 'POST',
        data: model
    });

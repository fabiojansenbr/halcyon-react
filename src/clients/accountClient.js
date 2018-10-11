import http from '../http';

export const register = model =>
    http({
        url: '/account/register',
        method: 'POST',
        data: model
    });

export const registerExternal = model =>
    http({
        url: '/account/registerexternal',
        method: 'POST',
        data: model
    });

export const forgotPassword = model =>
    http({
        url: '/account/forgotpassword',
        method: 'PUT',
        data: model
    });

export const resetPassword = model =>
    http({
        url: '/account/resetpassword',
        method: 'PUT',
        data: model
    });

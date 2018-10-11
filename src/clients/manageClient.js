import http from '../http';

export const getProfile = () =>
    http({
        url: '/manage',
        method: 'GET',
        authenticate: true
    });

export const updateProfile = model =>
    http({
        url: '/manage',
        method: 'PUT',
        authenticate: true,
        data: model
    });

export const changePassword = model =>
    http({
        url: '/manage/changepassword',
        method: 'PUT',
        authenticate: true,
        data: model
    });

export const setPassword = model =>
    http({
        url: '/manage/setpassword',
        method: 'PUT',
        authenticate: true,
        data: model
    });

export const verifyEmail = () =>
    http({
        url: '/manage/verifyemail',
        method: 'PUT',
        authenticate: true
    });

export const confirmEmail = model =>
    http({
        url: '/manage/confirmemail',
        method: 'PUT',
        authenticate: true,
        data: model
    });

export const addLogin = model =>
    http({
        url: '/manage/login',
        method: 'POST',
        authenticate: true,
        data: model
    });

export const removeLogin = model =>
    http({
        url: '/manage/login',
        method: 'DELETE',
        authenticate: true,
        data: model
    });

export const getAuthenticatorSettings = () =>
    http({
        url: '/manage/authenticator',
        method: 'GET',
        authenticate: true
    });

export const configureAuthenticator = model =>
    http({
        url: '/manage/authenticator',
        method: 'POST',
        authenticate: true,
        data: model
    });

export const disableAuthenticator = () =>
    http({
        url: '/manage/authenticator',
        method: 'DELETE',
        authenticate: true
    });

export const resetRecoveryCodes = () =>
    http({
        url: '/manage/resetrecoverycodes',
        method: 'PUT',
        authenticate: true
    });

export const deleteAccount = () =>
    http({
        url: '/manage',
        method: 'DELETE',
        authenticate: true
    });

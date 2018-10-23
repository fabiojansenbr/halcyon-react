import axios from 'axios';
import moment from 'moment';
import iziToast from 'izitoast';
import { context } from '../context';
import history from './history';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

iziToast.settings({
    layout: 2,
    progressBar: false,
    animateInside: false,
    icon: false,
    close: false,
    drag: false
});

const http = async request => {
    context.startLoading();

    const valid = await validateRequest(request);
    if (!valid) {
        context.stopLoading();
        return;
    }

    let result;
    try {
        const response = await client(request);
        result = processSuccess(response);
    } catch (error) {
        result = processError(error);
    }

    context.stopLoading();

    return result;
};

const validateRequest = async request => {
    if (!request.authenticate) {
        return true;
    }

    if (!context.user) {
        return false;
    }

    const remainingSeconds = moment
        .unix(context.user.exp)
        .diff(moment(Date.now()), 'seconds');

    if (remainingSeconds >= 30) {
        request.headers.Authorization = `Bearer ${context.user.accessToken}`;
        return true;
    }

    let response;
    try {
        response = await http({
            url: '/token',
            method: 'POST',
            data: {
                grantType: 'RefreshToken',
                refreshToken: context.user.refreshToken
            }
        });
    } catch {
        return false;
    }

    context.updateUser(response.data.data);
    request.headers.Authorization = `Bearer ${response.data.data.accessToken}`;

    return true;
};

const processSuccess = response => {
    const data = response.data.data;
    const messages = response.data.messages;

    if (!data) {
        for (const message of messages) {
            iziToast.success({ message });
        }
    }

    return { success: false, ...data };
};

const processError = error => {
    const response = error.response;
    const status = response.status;
    const data = response.data.data;
    const messages = response.data.messages;

    switch (status) {
        case 401:
            context.removeUser();
            iziToast.warn({
                message: 'Sorry, you do not have access to this resource.'
            });
            history.push('/');
            break;

        case 403:
            history.push('/');
            iziToast.warn({
                message: 'Sorry, you do not have access to this resource.'
            });
            break;

        case 404:
            history.push('/');
            break;

        default:
            break;
    }

    if (!data) {
        for (const message of messages || ['An unknown error has occurred.']) {
            iziToast.error({ message });
        }
    }

    return { success: false, ...data };
};

export default http;

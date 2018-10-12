import moment from 'moment';
import { context } from '../context';
import { getToken } from '../api/tokenClient';

const request = async request => {
    if (!request.authenticate) {
        return request;
    }

    if (!context.user) {
        return request;
    }

    if (!isExpired(context.user.exp)) {
        request.headers.Authorization = `Bearer ${context.user.accessToken}`;
        return request;
    }

    const result = await getToken({
        grantType: 'RefreshToken',
        refreshToken: context.user.refreshToken
    });

    if (result.error) {
        return Promise.reject({
            response: {
                status: 401
            }
        });
    }

    context.updateUser(result.data);
    request.headers.Authorization = `Bearer ${context.user.accessToken}`;

    return request;
};

const isExpired = exp => {
    const remainingSeconds = moment
        .unix(exp)
        .diff(moment(Date.now()), 'seconds');

    return remainingSeconds < 30;
};

export default {
    request
};

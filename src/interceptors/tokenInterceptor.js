import moment from 'moment';
import { context } from '../context';
import { getToken } from '../api/tokenClient';

const tokenInterceptor = async request => {
    if (!request.authenticate) {
        return request;
    }

    const jwt = context.user && context.user.jwt;
    if (!jwt) {
        return request;
    }

    if (!isExpired(context.user.exp)) {
        request.headers.Authorization = `Bearer ${jwt.accessToken}`;
        return request;
    }

    const result = await getToken({
        grantType: 'RefreshToken',
        refreshToken: jwt.refreshToken
    });

    if (result.error) {
        return Promise.reject({
            response: {
                status: 401
            }
        });
    }

    context.updateUser(result.data.data);
    request.headers.Authorization = `Bearer ${context.user.accessToken}`;

    return request;
};

const isExpired = exp => {
    const remainingSeconds = moment
        .unix(exp)
        .diff(moment(Date.now()), 'seconds');

    return remainingSeconds < 30;
};

export default tokenInterceptor;

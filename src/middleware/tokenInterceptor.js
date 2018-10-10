import moment from 'moment';
import { refreshToken } from '../actions/tokenActions';

const tokenInterceptor = async ({ getState, dispatch }, request) => {
    if (!request.authenticate) {
        return request;
    }

    const token = getState().token;

    const jwt = token && token.jwt;
    if (!jwt) {
        return request;
    }

    const currentUser = token && token.currentUser;
    if (!isExpired(currentUser.exp)) {
        request.headers.Authorization = `Bearer ${jwt.accessToken}`;
        return request;
    }

    const result = await dispatch(refreshToken());
    if (result.error) {
        return Promise.reject({
            response: {
                status: 401
            }
        });
    }

    request.headers.Authorization = `Bearer ${
        result.payload.data.data.accessToken
    }`;

    return request;
};

const isExpired = exp => {
    const remainingSeconds = moment
        .unix(exp)
        .diff(moment(Date.now()), 'seconds');

    return remainingSeconds < 30;
};

export default tokenInterceptor;

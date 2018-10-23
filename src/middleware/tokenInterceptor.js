import moment from 'moment';
import { refreshToken } from '../actions/tokenActions';

const request = async ({ getState, dispatch }, request) => {
    if (!request.authenticate) {
        return request;
    }

    const token = getState().token;

    const jwt = token && token.jwt;
    if (!jwt) {
        return request;
    }

    const currentUser = token && token.currentUser;

    const remainingSeconds = moment
        .unix(currentUser.exp)
        .diff(moment(Date.now()), 'seconds');

    if (remainingSeconds >= 30) {
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

export default request;

import moment from 'moment';
import { AppContext } from '../context';
import { getToken } from '../clients/tokenClient';

const tokenInterceptor = async request => {
    if (!request.authenticate) {
        return request;
    }

    const token = AppContext.user;
    console.log('token', token);

    const jwt = token && token.jwt;
    if (!jwt) {
        return request;
    }

    const currentUser = token && token.currentUser;
    if (!isExpired(currentUser.exp)) {
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

    AppContext.updateUser(result.data.data);
    request.headers.Authorization = `Bearer ${AppContext.user.accessToken}`;

    return request;
};

const isExpired = exp => {
    const remainingSeconds = moment
        .unix(exp)
        .diff(moment(Date.now()), 'seconds');

    return remainingSeconds < 30;
};

export default tokenInterceptor;

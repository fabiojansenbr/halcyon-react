import history from '../utils/history';
import { context } from '../context';

const error = error => {
    const response = error.response;
    const status = response && response.status;

    switch (status) {
        case 401:
            context.removeUser();
            history.push('/');
            break;

        case 404:
        case 403:
            history.push('/');
            break;

        default:
            break;
    }

    return Promise.reject(error);
};

export default {
    error
};

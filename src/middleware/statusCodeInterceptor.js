import history from '../utils/history';
import { removeToken } from '../actions/tokenActions';

const errorStatusCodeInterceptor = ({ dispatch }, error) => {
    const response = error.response;
    const status = response && response.status;

    switch (status) {
        case 401:
            dispatch(removeToken());
            history.push('/');
            break;

        case 403:
            history.push('/');
            break;

        default:
            break;
    }

    return Promise.reject(error);
};

export default { error: errorStatusCodeInterceptor };

import history from '../utils/history';
import { AppContext } from '../context';

const errorStatusCodeInterceptor = ({ dispatch }, error) => {
    const response = error.response;
    const status = response && response.status;

    switch (status) {
        case 401:
            AppContext.updateUser(undefined);
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

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import tokenInterceptor from './tokenInterceptor';
import statusCodeInterceptor from './statusCodeInterceptor';
import toastrInterceptor from './toastrInterceptor';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const options = {
    interceptors: {
        request: [tokenInterceptor],
        response: [toastrInterceptor, statusCodeInterceptor]
    }
};

export default axiosMiddleware(client, options);

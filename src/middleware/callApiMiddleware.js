import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import tokenInterceptor from './tokenInterceptor';
import statusCodeInterceptor from './statusCodeInterceptor';
import toastrInterceptor from './toastrInterceptor';
import { serializer } from '../utils/querystring';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    paramsSerializer: serializer
});

const options = {
    interceptors: {
        request: [tokenInterceptor],
        response: [toastrInterceptor, statusCodeInterceptor]
    }
};

export default axiosMiddleware(client, options);

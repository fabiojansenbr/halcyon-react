import axios from 'axios';
import { serializer } from '../utils/querystring';
import tokenInterceptor from './tokenInterceptor';
import statusCodeInterceptor from './statusCodeInterceptor';
import toastrInterceptor from './toastrInterceptor';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    paramsSerializer: serializer
});

client.interceptors.request.use(tokenInterceptor);

client.interceptors.response.use(undefined, statusCodeInterceptor.error);

client.interceptors.response.use(
    toastrInterceptor.success,
    toastrInterceptor.error
);

export default client;

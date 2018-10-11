import axios from 'axios';
import { serializer } from './querystring';
import tokenInterceptor from '../interceptors/tokenInterceptor';
import statusCodeInterceptor from '../interceptors/statusCodeInterceptor';
import toastrInterceptor from '../interceptors/toastrInterceptor';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    paramsSerializer: serializer
});

client.interceptors.request.use(tokenInterceptor);
client.interceptors.response.use(undefined, statusCodeInterceptor);
client.interceptors.response.use(
    toastrInterceptor.success,
    toastrInterceptor.error
);

const http = async request => {
    try {
        return await client(request);
    } catch (error) {
        return {
            error
        };
    }
};

export default http;

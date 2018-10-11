import axios from 'axios';
import { serializer } from './querystring';
import toastrInterceptor from '../interceptors/toastrInterceptor';
// import tokenInterceptor from '../interceptors/tokenInterceptor';
// import statusCodeInterceptor from '../interceptors/statusCodeInterceptor';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    paramsSerializer: serializer
});

client.interceptors.response.use(
    toastrInterceptor.success,
    toastrInterceptor.error
);
// client.interceptors.request.use(tokenInterceptor);
// client.interceptors.response.use(statusCodeInterceptor);

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

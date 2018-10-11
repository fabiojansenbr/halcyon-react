import axios from 'axios';
import { serializer } from './querystring';
// import tokenInterceptor from '../interceptors/tokenInterceptor';
// import statusCodeInterceptor from '../interceptors/statusCodeInterceptor';
// import toastrInterceptor from '../interceptors/toastrInterceptor';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    paramsSerializer: serializer
});

// client.interceptors.request.use(tokenInterceptor);
// client.interceptors.response.use(toastrInterceptor);
// client.interceptors.response.use(statusCodeInterceptor);

export default client;

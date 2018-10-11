import { context } from '../context';

const request = request => {
    console.log('request');
    context.loading(1);
    return request;
};

const response = response => {
    console.log('response');
    context.loading(-1);
    return response;
};

export default {
    request,
    response
};

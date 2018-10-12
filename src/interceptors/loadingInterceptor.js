import { context } from '../context';

const request = request => {
    context.startLoading();
    return request;
};

const response = response => {
    context.stopLoading();
    return response;
};

export default {
    request,
    response
};

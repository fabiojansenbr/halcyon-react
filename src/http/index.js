import client from './client';

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

import iziToast from 'izitoast';

iziToast.settings({
    layout: 2,
    progressBar: false,
    animateInside: false,
    icon: false,
    close: false,
    drag: false
});

const success = (config, response) => {
    const result = response.data;
    const messages = (result && result.messages) || [];

    for (const message of messages) {
        iziToast.success({ message });
    }

    return response;
};

const error = (config, error) => {
    const response = error.response;
    const status = response && response.status;

    switch (status) {
        case 401:
        case 403:
            iziToast.warning({
                message: 'Sorry, you do not have access to this resource.'
            });
            break;

        default:
            const result = response && response.data;
            const data = result && result.data;
            const messages = (result && result.messages) || [
                'An unknown error has occurred.'
            ];

            if (!data) {
                for (const message of messages) {
                    iziToast.error({ message });
                }
            }
            break;
    }

    return Promise.reject(error);
};

export default {
    success,
    error
};

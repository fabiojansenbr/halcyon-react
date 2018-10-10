export const register = model => ({
    type: 'REGISTER',
    payload: {
        request: {
            url: '/account/register',
            method: 'POST',
            data: model
        }
    }
});

export const registerExternal = model => ({
    type: 'REGISTER_EXTERNAL',
    payload: {
        request: {
            url: '/account/registerexternal',
            method: 'POST',
            data: model
        }
    }
});

export const forgotPassword = model => ({
    type: 'FORGOT_PASSWORD',
    payload: {
        request: {
            url: '/account/forgotpassword',
            method: 'PUT',
            data: model
        }
    }
});

export const resetPassword = model => ({
    type: 'RESET_PASSWORD',
    payload: {
        request: {
            url: '/account/resetpassword',
            method: 'PUT',
            data: model
        }
    }
});

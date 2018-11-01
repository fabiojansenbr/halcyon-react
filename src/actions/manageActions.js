export const getProfile = () => ({
    type: 'GET_PROFILE',
    payload: {
        request: {
            url: '/manage',
            method: 'GET',
            authenticate: true
        }
    }
});

export const updateProfile = model => ({
    type: 'UPDATE_PROFILE',
    payload: {
        request: {
            url: '/manage',
            method: 'PUT',
            authenticate: true,
            data: model
        }
    }
});

export const changePassword = model => ({
    type: 'CHANGE_PASSWORD',
    payload: {
        request: {
            url: '/manage/changepassword',
            method: 'PUT',
            authenticate: true,
            data: model
        }
    }
});

export const setPassword = model => ({
    type: 'SET_PASSWORD',
    payload: {
        request: {
            url: '/manage/setpassword',
            method: 'PUT',
            authenticate: true,
            data: model
        }
    }
});

export const verifyEmail = () => ({
    type: 'VERIFY_EMAIL',
    payload: {
        request: {
            url: '/manage/verifyemail',
            method: 'PUT',
            authenticate: true
        }
    }
});

export const confirmEmail = model => ({
    type: 'CONFIRM_EMAIL',
    payload: {
        request: {
            url: '/manage/confirmemail',
            method: 'PUT',
            authenticate: true,
            data: model
        }
    }
});

export const addLogin = model => ({
    type: 'ADD_LOGIN',
    payload: {
        request: {
            url: '/manage/login',
            method: 'POST',
            authenticate: true,
            data: model
        }
    }
});

export const removeLogin = model => ({
    type: 'REMOVE_LOGIN',
    payload: {
        request: {
            url: '/manage/login',
            method: 'DELETE',
            authenticate: true,
            data: model
        }
    }
});

export const getTwoFactorConfig = () => ({
    type: 'GET_TWO_FACTOR_CONFIG',
    payload: {
        request: {
            url: '/manage/twofactor',
            method: 'GET',
            authenticate: true
        }
    }
});

export const enableTwoFactor = model => ({
    type: 'ENABLE_TWO_FACTOR',
    payload: {
        request: {
            url: '/manage/twofactor',
            method: 'POST',
            authenticate: true,
            data: model
        }
    }
});

export const disableTwoFactor = () => ({
    type: 'DISABLE_TWO_FACTOR',
    payload: {
        request: {
            url: '/manage/twofactor',
            method: 'DELETE',
            authenticate: true
        }
    }
});

export const deleteAccount = () => ({
    type: 'DELETE_ACCOUNT',
    payload: {
        request: {
            url: '/manage',
            method: 'DELETE',
            authenticate: true
        }
    }
});

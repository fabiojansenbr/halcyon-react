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

export const getAuthenticatorSettings = () => ({
    type: 'GET_AUTHENTICATOR_SETTINGS',
    payload: {
        request: {
            url: '/manage/authenticator',
            method: 'GET',
            authenticate: true
        }
    }
});

export const configureAuthenticator = model => ({
    type: 'CONFIGURE_AUTHENTICATOR',
    payload: {
        request: {
            url: '/manage/authenticator',
            method: 'POST',
            authenticate: true,
            data: model
        }
    }
});

export const disableAuthenticator = () => ({
    type: 'DISABLE_AUTHENTICATOR',
    payload: {
        request: {
            url: '/manage/authenticator',
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

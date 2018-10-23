export const loadToken = () => ({ type: 'TOKEN_LOAD' });
export const removeToken = () => ({ type: 'TOKEN_REMOVE' });

export const getToken = model => ({
    type: 'GET_TOKEN',
    persist: model.rememberMe,
    payload: {
        request: {
            url: '/token',
            method: 'POST',
            data: model
        }
    }
});

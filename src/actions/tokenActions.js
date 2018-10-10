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

export const refreshToken = () => (dispatch, getState) => {
    const token = getState().token;
    const rft = token && token.jwt && token.jwt.refreshToken;

    return dispatch({
        type: 'REFRESH_TOKEN',
        payload: {
            request: {
                url: '/token',
                method: 'POST',
                data: {
                    grantType: 'RefreshToken',
                    refreshToken: rft
                }
            }
        }
    });
};

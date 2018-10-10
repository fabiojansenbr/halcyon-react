const initialState = {
    profile: undefined,
    authenticatorSettings: undefined
};

const manageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return {
                profile: undefined
            };

        case 'GET_PROFILE_SUCCESS':
            const profile =
                action.payload &&
                action.payload.data &&
                action.payload.data.data;

            return {
                profile
            };

        case 'GET_AUTHENTICATOR_SETTINGS_SUCCESS':
            const authenticatorSettings =
                action.payload &&
                action.payload.data &&
                action.payload.data.data;

            return {
                authenticatorSettings
            };

        default:
            return state;
    }
};

export default manageReducer;

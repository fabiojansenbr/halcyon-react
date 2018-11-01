const initialState = {
    profile: undefined,
    twoFactorConfig: undefined
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

        case 'GET_TWO_FACTOR_CONFIG_SUCCESS':
            const twoFactorConfig =
                action.payload &&
                action.payload.data &&
                action.payload.data.data;

            return {
                twoFactorConfig
            };

        default:
            return state;
    }
};

export default manageReducer;

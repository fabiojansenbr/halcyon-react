const initialState = {
    users: undefined,
    user: undefined
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                users: undefined
            };

        case 'GET_USERS_SUCCESS':
            const users =
                action.payload &&
                action.payload.data &&
                action.payload.data.data;

            return {
                users
            };

        case 'GET_USER':
            return {
                user: undefined
            };

        case 'GET_USER_SUCCESS':
            const user =
                action.payload &&
                action.payload.data &&
                action.payload.data.data;

            return {
                user
            };

        default:
            return state;
    }
};

export default userReducer;

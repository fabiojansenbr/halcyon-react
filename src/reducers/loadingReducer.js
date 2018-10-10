const initialState = {
    inProgress: 0
};

const loadingReducer = (state = initialState, action) => {
    if (!action.payload && !action.error) {
        return state;
    }

    if (action.type.endsWith('SUCCESS') || action.type.endsWith('FAIL')) {
        return {
            inProgress: Math.max(0, state.inProgress - 1)
        };
    }

    return {
        inProgress: state.inProgress + 1
    };
};

export default loadingReducer;

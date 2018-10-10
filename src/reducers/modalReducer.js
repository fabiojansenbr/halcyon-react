const initialState = {
    show: false,
    title: undefined,
    message: undefined,
    action: undefined
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                show: true,
                ...action.modal
            };

        case 'MODAL_CLOSE':
            return { show: false };

        default:
            return state;
    }
};

export default modalReducer;

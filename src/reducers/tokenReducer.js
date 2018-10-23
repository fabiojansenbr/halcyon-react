import jwtDecode from 'jwt-decode';
import { getItem, setItem, removeItem } from '../utils/storage';

export const STORAGE_KEY = 'session.token';

const initialState = {
    jwt: undefined,
    currentUser: undefined
};

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOKEN_LOAD':
            const storedJwt = getItem(STORAGE_KEY);
            return {
                jwt: storedJwt,
                currentUser: storedJwt && jwtDecode(storedJwt.accessToken)
            };

        case 'GET_TOKEN_SUCCESS':
            const jwt =
                action.payload &&
                action.payload.data &&
                action.payload.data.data;

            const persist =
                action.meta &&
                action.meta.previousAction &&
                action.meta.previousAction.persist;

            setItem(STORAGE_KEY, jwt, persist);

            return {
                jwt,
                currentUser: jwt && jwtDecode(jwt.accessToken)
            };

        case 'TOKEN_REMOVE':
        case 'DELETE_ACCOUNT_SUCCESS':
            removeItem(STORAGE_KEY);
            return {
                jwt: undefined,
                currentUser: undefined
            };

        default:
            return state;
    }
};

export default tokenReducer;

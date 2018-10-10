import { combineReducers } from 'redux';
import loading from './loadingReducer';
import modal from './modalReducer';
import manage from './manageReducer';
import token from './tokenReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    loading,
    modal,
    manage,
    token,
    user
});

export default rootReducer;

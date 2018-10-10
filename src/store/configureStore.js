import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import callApiMiddleware from '../middleware/callApiMiddleware';
import rootReducer from '../reducers/rootReducer';

const middleware = [thunk, callApiMiddleware];

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const configureStore = () =>
    createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default configureStore;

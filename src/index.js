import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import history from './utils/history';
import configureStore from './store/configureStore';
import { loadToken } from './actions/tokenActions';

import 'bootswatch/dist/yeti/bootstrap.css';
import 'izitoast/dist/css/iziToast.css';
import './index.css';

const store = configureStore();
store.dispatch(loadToken());

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>,
    document.getElementById('root')
);

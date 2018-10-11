import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';
import history from './utils/history';
import { ContextProvider } from './context';

import 'bootswatch/dist/yeti/bootstrap.css';
import 'izitoast/dist/css/iziToast.css';
import './index.css';

ReactDOM.render(
    <ContextProvider>
        <Router history={history}>{routes}</Router>
    </ContextProvider>,
    document.getElementById('root')
);

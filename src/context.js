import React from 'react';
import jwtDecode from 'jwt-decode';
import { getItem, setItem } from './utils/storage';

const STORAGE_KEY = 'session.token';

export const context = {
    user: undefined,
    modal: undefined,
    loadUser: function() {
        const value = getItem(STORAGE_KEY);

        let newUser = undefined;
        if (value) {
            newUser = {
                ...value,
                ...jwtDecode(value.accessToken)
            };
        }

        this.user = newUser;
    },
    updateUser: function(value, persist) {
        setItem(STORAGE_KEY, value, persist);

        let newUser = undefined;
        if (value) {
            newUser = {
                ...value,
                ...jwtDecode(value.accessToken)
            };
        }

        this.user = newUser;
    },
    showModal: function(value) {
        this.modal = { ...value, show: true };
    },

    closeModal: function() {
        this.modal = { ...this.modal, show: false };
    }
};

// export const AppContext = React.createContext(null);

// export const ContextProvider = props => (
//     <AppContext.Provider value={context}>
//         {props.children}
//     </AppContext.Provider>
// );

export const ContextProvider = props => (
    <React.Fragment>{props.children}</React.Fragment>
);

// export const withContext = Component => props => (
//     <AppContext.Consumer>
//         {context => {
//             console.log('context', context);
//             return <Component {...props} context={context} />;
//         }}
//     </AppContext.Consumer>
// );

export const withContext = Component => props => {
    console.log('context', context);
    return <Component {...props} context={context} />;
};

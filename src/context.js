import React from 'react';
import jwtDecode from 'jwt-decode';
import { getItem, setItem, removeItem } from './utils/storage';

const STORAGE_KEY = 'session.token';

class Context {
    constructor() {
        this.loadUser();
        this.modal = undefined;
        this.loading = 0;
    }

    loadUser() {
        const value = getItem(STORAGE_KEY);

        let user = undefined;
        if (value) {
            user = {
                ...value,
                ...jwtDecode(value.accessToken)
            };
        }

        this.user = user;
    }

    updateUser(value, persist) {
        setItem(STORAGE_KEY, value, persist);

        this.user = {
            ...value,
            ...jwtDecode(value.accessToken)
        };
    }

    removeUser() {
        removeItem(STORAGE_KEY);
        this.user = undefined;
    }

    showModal(value) {
        this.modal = value;
    }

    closeModal() {
        this.modal = undefined;
    }

    startLoading() {
        this.loading = this.loading + 1;
    }

    stopLoading() {
        this.loading = Math.max(0, this.loading - 1);
    }
}

export const context = new Context();

export const ContextProvider = props => (
    <React.Fragment>{props.children}</React.Fragment>
);

export const withContext = Component => props => (
    <Component {...props} context={context} />
);

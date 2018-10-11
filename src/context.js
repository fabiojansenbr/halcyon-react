import React from 'react';
import jwtDecode from 'jwt-decode';
import { getItem, setItem } from './utils/storage';

class Context {
    storageKey = 'session.token';

    constructor() {
        const value = getItem(this.storgageKey);

        let newUser = undefined;
        if (value) {
            newUser = {
                ...value,
                ...jwtDecode(value.accessToken)
            };
        }

        this.user = newUser;
        this.modal = undefined;
        this.loading = 0;
    }

    updateUser(value, persist) {
        setItem(this.storgageKey, value, persist);

        let newUser = undefined;
        if (value) {
            newUser = {
                ...value,
                ...jwtDecode(value.accessToken)
            };
        }

        this.user = newUser;
    }

    showModal(value) {
        this.modal = { ...value, show: true };
    }

    closeModal() {
        this.modal = { show: false };
    }

    loading(value) {
        this.loading = Math.max(0, this.loading + value);
    }
}

export const context = new Context();

export const ContextProvider = props => (
    <React.Fragment>{props.children}</React.Fragment>
);

export const withContext = Component => props => (
    <Component {...props} context={context} />
);

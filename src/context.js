import React from 'react';
import jwtDecode from 'jwt-decode';
import { getItem, setItem, removeItem } from './utils/storage';
import { Provider, Subscribe, Container } from 'unstated';

const STORAGE_KEY = 'session.token';

class ContextContainer extends Container {
    constructor() {
        super();

        this.state = {
            loading: 0,
            modal: undefined,
            user: undefined
        };

        this.loadUser();
        this.modal = undefined;
        this.loading = 0;
    }

    loadUser() {
        console.log('loadUser');
        const value = getItem(STORAGE_KEY);

        let user = undefined;
        if (value) {
            user = {
                ...value,
                ...jwtDecode(value.accessToken)
            };
        }

        this.setState({ user });
    }

    updateUser(value, persist) {
        console.log('updateUser', value);
        setItem(STORAGE_KEY, value, persist);

        const user = (this.user = {
            ...value,
            ...jwtDecode(value.accessToken)
        });

        this.setState({ user });
    }

    removeUser() {
        console.log('removeUser');
        removeItem(STORAGE_KEY);
        this.setState({ user: undefined });
    }

    showModal(modal) {
        console.log('showModal', modal);
        this.setState({ modal });
    }

    closeModal() {
        console.log('closeModal');
        this.setState({ modal: undefined });
    }

    startLoading() {
        console.log('startLoading', this.state.loading + 1);
        this.setState({ loading: this.state.loading + 1 });
    }

    stopLoading() {
        console.log('stopLoading', Math.max(0, this.state.loading - 1));
        this.setState({ loading: Math.max(0, this.state.loading - 1) });
    }
}

export const context = new ContextContainer();

export const ContextProvider = props => (
    <Provider inject={[context]}>{props.children}</Provider>
);

export const withContext = Component => props => (
    <Subscribe to={[context]}>
        {context => <Component {...props} context={context} />}
    </Subscribe>
);

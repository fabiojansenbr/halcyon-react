import React from 'react';

class Context {
    constructor() {
        this.user = undefined;
        this.modal = undefined;
    }

    updateUser(value) {
        this.user = value;
    }

    showModal(value) {
        this.modal = { ...value, show: true };
    }

    closeModal() {
        this.modal = { ...this.modal, show: false };
    }
}

export const AppContext = React.createContext(null);

export class ContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.context = new Context();
    }

    render() {
        return (
            <AppContext.Provider value={this.context}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const withContext = Component => props => (
    <AppContext.Consumer>
        {context => {
            console.log('context', context);
            return <Component {...props} context={context} />;
        }}
    </AppContext.Consumer>
);

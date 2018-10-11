import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import ErrorPage from './home/ErrorPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ModalDialog from './layout/ModalDialog';
import Spinner from './layout/Spinner';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />;
        }

        return (
            <React.Fragment>
                <Header />
                <Container>
                    {this.props.children}
                    <ModalDialog />
                    <Spinner />
                    <Footer />
                </Container>
            </React.Fragment>
        );
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired
};

export default App;

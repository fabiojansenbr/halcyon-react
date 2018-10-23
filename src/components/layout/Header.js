import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withContext } from '../../context';
import {
    Navbar,
    Container,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav
} from 'reactstrap';
import { Link } from 'react-router-dom';
import BaseOptions from '../menu/BaseOptions';
import AdminOptions from '../menu/AdminOptions';
import UserOptions from '../menu/UserOptions';
import LoginOptions from '../menu/LoginOptions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.onToggle = this.onToggle.bind(this);
        this.onRouteChange = this.onRouteChange.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    componentDidMount() {
        this.props.history.listen(this.onRouteChange);
    }

    onToggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onRouteChange() {
        this.setState({ isOpen: false });
    }

    onLogout() {
        this.props.context.removeUser();
        this.props.history.push('/');
    }

    render() {
        const { isOpen } = this.state;

        return (
            <Navbar color="dark" dark expand="lg" fixed="top">
                <Container>
                    <NavbarBrand to="/" tag={Link}>
                        Halcyon
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={this.onToggle}
                        aria-label="Toggle navigation"
                    />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <BaseOptions />
                            <AdminOptions user={this.props.context.user} />
                        </Nav>
                        <UserOptions
                            history={this.props.history}
                            user={this.props.context.user}
                            onLogout={this.onLogout}
                        />
                        <LoginOptions user={this.props.context.user} />
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

UserOptions.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object.isRequired
};

export default withRouter(withContext(Header));

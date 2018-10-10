import React, { Component } from 'react';
import {
    Navbar,
    Container,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav
} from 'reactstrap';
import { Link } from 'react-router-dom';
import history from '../../../utils/history';
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
    }

    componentDidMount() {
        history.listen(this.onRouteChange);
    }

    onToggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onRouteChange() {
        this.setState({ isOpen: false });
    }

    render() {
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
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <BaseOptions />
                            <AdminOptions />
                        </Nav>
                        <UserOptions />
                        <LoginOptions />
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;

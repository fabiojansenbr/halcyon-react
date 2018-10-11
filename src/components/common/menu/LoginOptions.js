import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginOptions = ({ currentUser }) => {
    if (currentUser) {
        return null;
    }

    return (
        <Nav navbar>
            <NavItem>
                <NavLink to="/account/login" tag={Link}>
                    Login
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/account/register" tag={Link}>
                    Register
                </NavLink>
            </NavItem>
        </Nav>
    );
};

LoginOptions.propTypes = {
    currentUser: PropTypes.object
};

export default LoginOptions;

import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginOptions = ({ user }) => {
    if (user) {
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
    user: PropTypes.object
};

export default LoginOptions;

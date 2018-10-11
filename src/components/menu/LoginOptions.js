import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginOptions = ({ context }) => {
    if (context.user) {
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
    context: PropTypes.object.required
};

export default withContext(LoginOptions);

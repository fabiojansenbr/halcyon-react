import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const BaseOptions = () => (
    <React.Fragment>
        <NavItem>
            <NavLink to="/" tag={Link}>
                Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/about" tag={Link}>
                About
            </NavLink>
        </NavItem>
    </React.Fragment>
);

export default BaseOptions;

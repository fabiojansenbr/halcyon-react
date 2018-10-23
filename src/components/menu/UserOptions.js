import React from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const UserOptions = ({
    user: { given_name, family_name, picture } = {},
    onLogout
}) => {
    if (!given_name) {
        return null;
    }

    return (
        <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    <img
                        src={picture}
                        alt={`${given_name} ${family_name}`}
                        className="rounded-circle mr-2"
                    />{' '}
                    <span className="text-truncate">
                        {given_name} {family_name}
                    </span>{' '}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem to="/manage" tag={Link}>
                        My Account
                    </DropdownItem>
                    <DropdownItem onClick={onLogout}>Log Off</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    );
};

UserOptions.propTypes = {
    user: PropTypes.object
};

export default UserOptions;

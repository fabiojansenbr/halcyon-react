import React from 'react';
import PropTypes from 'prop-types';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const AdminOptions = ({ user }) => {
    if (!user || !user.role) {
        return null;
    }

    if (
        !user.role.includes('User Administrator') &&
        !user.role.includes('System Administrator')
    ) {
        return null;
    }

    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Admin{' '}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem to="/user" tag={Link}>
                    Users
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

AdminOptions.propTypes = {
    user: PropTypes.object
};

export default AdminOptions;

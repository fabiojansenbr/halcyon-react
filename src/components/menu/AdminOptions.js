import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const AdminOptions = ({ context }) => {
    if (!context.user || !context.user.role) {
        return null;
    }

    if (
        !context.user.role.includes('User Administrator') &&
        !context.user.role.includes('System Administrator')
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
    context: PropTypes.object.required
};

export default withContext(AdminOptions);

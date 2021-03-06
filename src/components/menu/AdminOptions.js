import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const AdminOptions = ({ currentUser }) => {
    if (!currentUser || !currentUser.role) {
        return null;
    }

    if (
        !currentUser.role.includes('User Administrator') &&
        !currentUser.role.includes('System Administrator')
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

const mapStateToProps = state => ({
    currentUser: state.token.currentUser
});

AdminOptions.propTypes = {
    currentUser: PropTypes.object
};

export default connect(mapStateToProps)(AdminOptions);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { removeToken } from '../../../clients/tokenClient';
import history from '../../../utils/history';
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class UserOptions extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        removeToken();
        history.push('/');
    }

    render() {
        const { currentUser } = this.props;

        if (!currentUser) {
            return null;
        }

        return (
            <Nav navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <img
                            src={currentUser.picture}
                            alt={`${currentUser.given_name} ${
                                currentUser.family_name
                            }`}
                            className="rounded-circle mr-2"
                        />{' '}
                        {currentUser.given_name} {currentUser.family_name}{' '}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem to="/manage" tag={Link}>
                            My Account
                        </DropdownItem>
                        <DropdownItem onClick={this.onLogout}>
                            Log Off
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        );
    }
}

UserOptions.propTypes = {
    removeToken: PropTypes.func.isRequired,
    currentUser: PropTypes.object
};

export default UserOptions;

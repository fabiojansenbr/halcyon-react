import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        this.props.context.removeUser();
        this.props.history.push('/');
    }

    render() {
        const user = this.props.context.user;
        if (!user) {
            return null;
        }

        return (
            <Nav navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <img
                            src={user.picture}
                            alt={`${user.given_name} ${user.family_name}`}
                            className="rounded-circle mr-2"
                        />{' '}
                        <span className="text-truncate">
                            {user.given_name} {user.family_name}
                        </span>{' '}
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
    context: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default UserOptions;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withContext } from '../../context';
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
        if (!this.props.context.user) {
            return null;
        }

        return (
            <Nav navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <img
                            src={this.props.context.user.picture}
                            alt={`${this.props.context.user.given_name} ${
                                this.props.context.user.family_name
                            }`}
                            className="rounded-circle mr-2"
                        />{' '}
                        {this.props.context.user.given_name}{' '}
                        {this.props.context.user.family_name}{' '}
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
    history: PropTypes.object.isRequired,
    context: PropTypes.object
};

export default withRouter(withContext(UserOptions));

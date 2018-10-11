import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { removeToken } from '../../actions/tokenActions';
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
        this.props.removeToken();
        this.props.history.push('/');
    }

    render() {
        if (!this.props.currentUser) {
            return null;
        }

        return (
            <Nav navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <img
                            src={this.props.currentUser.picture}
                            alt={`${this.props.currentUser.given_name} ${
                                this.props.currentUser.family_name
                            }`}
                            className="rounded-circle mr-2"
                        />{' '}
                        {this.props.currentUser.given_name}{' '}
                        {this.props.currentUser.family_name}{' '}
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

const mapStateToProps = state => ({
    currentUser: state.token.currentUser
});

const mapDispatchToProps = dispatch => ({
    removeToken: () => dispatch(removeToken())
});

UserOptions.propTypes = {
    removeToken: PropTypes.func.isRequired,
    currentUser: PropTypes.object,
    history: PropTypes.object.isRequired
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(UserOptions)
);

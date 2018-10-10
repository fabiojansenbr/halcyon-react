import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/userActions';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import Summary from './Summary';
import Pager from '../common/layout/Pager';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: {
                page: 1,
                size: 5,
                search: '',
                sort: ''
            }
        };

        this.onSortChange = this.onSortChange.bind(this);
        this.onPreviousPage = this.onPreviousPage.bind(this);
        this.onNextPage = this.onNextPage.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        this.props.getUsers(this.state.filter);
    }

    onSortChange(value) {
        this.setState(
            previousState => ({
                filter: {
                    ...previousState.filter,
                    sort: value
                }
            }),
            () => this.props.getUsers(this.state.filter)
        );
    }

    onPreviousPage() {
        this.setState(
            previousState => ({
                filter: {
                    ...previousState.filter,
                    page: previousState.filter.page - 1
                }
            }),
            () => this.props.getUsers(this.state.filter)
        );
    }

    onNextPage() {
        this.setState(
            previousState => ({
                filter: {
                    ...previousState.filter,
                    page: previousState.filter.page + 1
                }
            }),
            () => this.props.getUsers(this.state.filter)
        );
    }

    onSearch(event, values) {
        this.setState(
            previousState => ({
                filter: {
                    ...previousState.filter,
                    search: values.search,
                    page: 1
                }
            }),
            () => this.props.getUsers(this.state.filter)
        );
    }

    render() {
        const { users } = this.props;
        const hasUsers = users && users.items && users.items.length > 0;

        return (
            <React.Fragment>
                <div className="d-flex">
                    <h1>Users</h1>
                    <Link
                        to="/user/create"
                        className="btn btn-primary ml-auto align-self-start"
                    >
                        Create New
                    </Link>
                </div>
                <hr />

                <SearchForm
                    onSearch={this.onSearch}
                    onSortChange={this.onSortChange}
                />

                {!hasUsers && (
                    <Alert color="info">No users could be found.</Alert>
                )}

                {hasUsers && (
                    <React.Fragment>
                        {users.items.map(user => (
                            <Summary key={user.id} user={user} />
                        ))}

                        <Pager
                            {...users}
                            onNextPage={this.onNextPage}
                            onPreviousPage={this.onPreviousPage}
                        />
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user.users
});

const mapDispatchToProps = dispatch => ({
    getUsers: model => dispatch(getUsers(model))
});

UserPage.propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);
import React, { Component } from 'react';
import { getUsers } from '../../api/userClient';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/user/SearchForm';
import Summary from '../../components/user/Summary';
import Pager from '../../components/layout/Pager';

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
        getUsers(this.state.filter);
    }

    onSortChange(value) {
        this.setState(
            previousState => ({
                filter: {
                    ...previousState.filter,
                    sort: value
                }
            }),
            () => getUsers(this.state.filter)
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
            () => getUsers(this.state.filter)
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
            () => getUsers(this.state.filter)
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
            () => getUsers(this.state.filter)
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

export default UserPage;

import React, { Component } from 'react';
import { getUsers } from '../../clients/userClient';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/user/SearchForm';
import Summary from '../../components/user/Summary';
import Pager from '../../components/layout/Pager';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined,
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

    async componentDidMount() {
        await this.loadData();
    }

    async loadData() {
        const result = await getUsers(this.state.filter);
        if (!result.success) {
            return;
        }

        this.setState({ data: result });
    }

    onSortChange(value) {
        this.setState(
            previousState => ({
                filter: {
                    ...previousState.filter,
                    sort: value
                }
            }),
            () => this.loadData()
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
            () => this.loadData()
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
            () => this.loadData()
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
            () => this.loadData()
        );
    }

    render() {
        const { items } = this.state.data;

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

                {items &&
                    items.length === 0 && (
                        <Alert color="info">No users could be found.</Alert>
                    )}

                {items &&
                    items.length > 0 && (
                        <React.Fragment>
                            {items.map(user => (
                                <Summary key={user.id} user={user} />
                            ))}

                            <Pager
                                {...this.state.data}
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

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
            data: undefined
        };

        this.onSortChange = this.onSortChange.bind(this);
        this.onPreviousPage = this.onPreviousPage.bind(this);
        this.onNextPage = this.onNextPage.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    async componentDidMount() {
        await this.loadData();
    }

    async loadData(filter) {
        const result = await getUsers(filter);
        if (!result.success) {
            return;
        }

        this.setState({ data: result });
    }

    onSortChange(value) {
        this.loadData({
            page: this.state.data.page,
            search: this.state.data.search,
            sort: value
        });
    }

    onPreviousPage() {
        this.loadData({
            search: this.state.data.search,
            sort: this.state.data.sort,
            page: this.state.data.page - 1
        });
    }

    onNextPage() {
        this.loadData({
            search: this.state.data.search,
            sort: this.state.data.sort,
            page: this.state.data.page + 1
        });
    }

    onSearch(event, values) {
        this.loadData({
            search: values.search,
            sort: this.state.data.sort,
            page: 1
        });
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

import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <Jumbotron>
        <h1 className="display-3">Page Not Found</h1>
        <p className="lead">
            Sorry, the Page you were looking for could not be found.
        </p>
        <p className="text-right">
            <Link to="/" className="btn btn-primary btn-lg">
                Home
            </Link>
        </p>
    </Jumbotron>
);

export default NotFoundPage;

import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const AccessDeniedPage = () => (
    <Jumbotron>
        <h1 className="display-3">Access Denied</h1>
        <p className="lead">Sorry, you do not have access to this resource.</p>
        <p className="text-right">
            <Link to="/" className="btn btn-primary btn-lg">
                Home
            </Link>
        </p>
    </Jumbotron>
);

export default AccessDeniedPage;

import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const ErrorPage = () => (
    <Container>
        <Jumbotron>
            <h1 className="display-3">Error</h1>
            <p className="lead">
                Sorry, an error has occurred during your request. Please try
                again later.
            </p>
            <p className="text-right">
                <a href="/" className="btn btn-primary btn-lg">
                    Home
                </a>
            </p>
        </Jumbotron>
    </Container>
);

export default ErrorPage;

import React from 'react';
import PropTypes from 'prop-types';
import { CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Status from './Status';

const Summary = ({ user }) => (
    <Link to={`/user/update/${user.id}`} className="card mb-3">
        <CardBody>
            <div className="d-flex flex-wrap">
                <img
                    src={user.gravatarUrl}
                    alt={user.emailAddress}
                    className="img-thumbnail rounded-circle mr-3 mb-2"
                />
                <h4 className="mb-2 text-truncate">
                    {user.firstName} {user.lastName}
                    <br />
                    <small className="text-muted">{user.emailAddress}</small>
                </h4>
                <div className="ml-auto">
                    <Status user={user} />
                </div>
            </div>
        </CardBody>
    </Link>
);

Summary.propTypes = {
    user: PropTypes.object.isRequired
};

export default Summary;

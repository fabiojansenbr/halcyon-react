import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const Options = ({ user, currentUser, onUnlock, onLock, onDelete }) => (
    <React.Fragment>
        {user.isLockedOut && (
            <React.Fragment>
                <Button color="warning" onClick={() => onUnlock(user)}>
                    Unlock
                </Button>{' '}
            </React.Fragment>
        )}

        {user.emailAddress !== currentUser.name && (
            <React.Fragment>
                {!user.isLockedOut && (
                    <React.Fragment>
                        <Button color="warning" onClick={() => onLock(user)}>
                            Lock
                        </Button>{' '}
                    </React.Fragment>
                )}
                <Button color="danger" onClick={() => onDelete(user)}>
                    Delete
                </Button>{' '}
            </React.Fragment>
        )}
    </React.Fragment>
);

Options.propTypes = {
    user: PropTypes.object.isRequired,
    currentUser: PropTypes.object,
    onUnlock: PropTypes.func.isRequired,
    onLock: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Options;

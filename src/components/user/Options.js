import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import { Button } from 'reactstrap';

const Options = ({ user, context, onUnlock, onLock, onDelete }) => (
    <React.Fragment>
        {user.isLockedOut && (
            <React.Fragment>
                <Button color="warning" onClick={() => onUnlock(user)}>
                    Unlock
                </Button>{' '}
            </React.Fragment>
        )}

        {user.emailAddress !== context.user.emailAddress && (
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
    context: PropTypes.object,
    onUnlock: PropTypes.func.isRequired,
    onLock: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default withContext(Options);

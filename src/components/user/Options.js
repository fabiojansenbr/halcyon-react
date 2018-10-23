import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import { Button } from 'reactstrap';

const Options = ({
    user,
    user: { id, isLockedOut },
    context,
    onUnlock,
    onLock,
    onDelete
}) => (
    <React.Fragment>
        {isLockedOut && (
            <React.Fragment>
                <Button color="warning" onClick={() => onUnlock(user)}>
                    Unlock
                </Button>{' '}
            </React.Fragment>
        )}

        {id !== context.user.id && (
            <React.Fragment>
                {!isLockedOut && (
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
    context: PropTypes.object.isRequired,
    onUnlock: PropTypes.func.isRequired,
    onLock: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default withContext(Options);

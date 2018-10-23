import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = ({ context: { loading } }) => {
    if (!loading) {
        return null;
    }

    return (
        <div className="spinner">
            <div className="modal show d-block">
                <div className="modal-dialog text-center">
                    <FontAwesomeIcon icon={faSpinner} fixedWidth pulse />{' '}
                    Loading...
                </div>
            </div>
            <div className="modal-backdrop show" />
        </div>
    );
};

Spinner.propTypes = {
    context: PropTypes.object.isRequired
};

export default withContext(Spinner);

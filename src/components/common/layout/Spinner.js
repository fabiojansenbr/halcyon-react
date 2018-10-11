import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = ({ isLoading }) => {
    if (!isLoading) {
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
    isLoading: PropTypes.bool.isRequired
};

export default Spinner;

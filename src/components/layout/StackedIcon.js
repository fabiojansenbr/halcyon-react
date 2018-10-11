import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const StackedIcon = ({ title, icon, disabled }) => (
    <span title={title} className="fa-stack">
        <FontAwesomeIcon icon={icon} className="fa-stack-1x" />
        {disabled && (
            <FontAwesomeIcon icon={faBan} className="fa-stack-2x text-danger" />
        )}
    </span>
);

StackedIcon.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    disabled: PropTypes.bool
};

export default StackedIcon;

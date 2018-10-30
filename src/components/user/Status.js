import React from 'react';
import PropTypes from 'prop-types';
import {
    faUnlock,
    faEnvelope,
    faKey,
    faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import StackedIcon from '../layout/StackedIcon';

const Status = ({ user }) => (
    <>
        <StackedIcon
            title="Unlocked"
            icon={faUnlock}
            disabled={user.isLockedOut}
        />
        <StackedIcon
            title="Email Verified"
            icon={faEnvelope}
            disabled={!user.emailConfirmed}
        />
        <StackedIcon
            title="Password Set"
            icon={faKey}
            disabled={!user.hasPassword}
        />
        <StackedIcon
            title="Two Factor Authentication"
            icon={faMobileAlt}
            disabled={!user.twoFactorEnabled}
        />
    </>
);

Status.propTypes = {
    user: PropTypes.object.isRequired
};

export default Status;

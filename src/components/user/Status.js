import React from 'react';
import PropTypes from 'prop-types';
import {
    faUnlock,
    faEnvelope,
    faKey,
    faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import StackedIcon from '../layout/StackedIcon';

const Status = ({
    user: { isLockedOut, emailConfirmed, hasPassword, twoFactorEnabled }
}) => (
    <React.Fragment>
        <StackedIcon title="Unlocked" icon={faUnlock} disabled={isLockedOut} />
        <StackedIcon
            title="Email Verified"
            icon={faEnvelope}
            disabled={!emailConfirmed}
        />
        <StackedIcon
            title="Password Set"
            icon={faKey}
            disabled={!hasPassword}
        />
        <StackedIcon
            title="Two Factor Authentication"
            icon={faMobileAlt}
            disabled={!twoFactorEnabled}
        />
    </React.Fragment>
);

Status.propTypes = {
    user: PropTypes.object.isRequired
};

export default Status;

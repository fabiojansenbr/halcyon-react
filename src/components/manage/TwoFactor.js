import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const TwoFactor = ({
    profile,
    onDisableAuthenticator,
    onResetRecoveryCodes
}) => (
    <React.Fragment>
        <h4>Two Factor Authentication</h4>
        <hr />

        <p>
            <Link
                to="/manage/configureauthenticator"
                className="btn btn-secondary mb-2"
            >
                Configure Authenticator App
            </Link>{' '}
            {profile.twoFactorEnabled && (
                <React.Fragment>
                    <Button
                        color="secondary"
                        onClick={onDisableAuthenticator}
                        className="mb-2"
                    >
                        Disable Authenticator App
                    </Button>{' '}
                    <Button
                        color="secondary"
                        onClick={onResetRecoveryCodes}
                        className="mb-2"
                    >
                        Reset Recovery Codes
                    </Button>
                </React.Fragment>
            )}
        </p>
    </React.Fragment>
);

TwoFactor.propTypes = {
    profile: PropTypes.object.isRequired,
    onDisableAuthenticator: PropTypes.func.isRequired,
    onResetRecoveryCodes: PropTypes.func.isRequired
};

export default TwoFactor;

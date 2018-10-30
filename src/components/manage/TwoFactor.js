import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const TwoFactor = ({ profile, onDisableAuthenticator }) => (
    <>
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
                <>
                    <Button
                        color="secondary"
                        onClick={onDisableAuthenticator}
                        className="mb-2"
                    >
                        Disable Authenticator App
                    </Button>{' '}
                </>
            )}
        </p>
    </>
);

TwoFactor.propTypes = {
    profile: PropTypes.object.isRequired,
    onDisableAuthenticator: PropTypes.func.isRequired
};

export default TwoFactor;

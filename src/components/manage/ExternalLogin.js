import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialButton from '../layout/SocialButton';
import providers from '../../providers';

const ExternalLogin = ({ profile, onAddLogin, onRemoveLogin }) => (
    <React.Fragment>
        <h4>External Logins</h4>
        <hr />

        {providers.map(provider => {
            const userLogin = profile.logins.filter(
                a => a.provider === provider.provider
            )[0];

            return (
                <div key={provider.type} className="d-flex mb-2">
                    <div className="mr-auto">
                        <FontAwesomeIcon icon={provider.icon} fixedWidth />{' '}
                        {provider.provider}
                    </div>
                    {!userLogin && (
                        <SocialButton
                            color="primary"
                            provider={provider.type}
                            appId={provider.appId}
                            onLoginSuccess={user =>
                                onAddLogin(provider.provider, user, undefined)
                            }
                        >
                            Connect
                        </SocialButton>
                    )}
                    {userLogin && (
                        <Button
                            color="secondary"
                            onClick={() => onRemoveLogin(userLogin)}
                        >
                            Disconnect
                        </Button>
                    )}
                </div>
            );
        })}
    </React.Fragment>
);

ExternalLogin.propTypes = {
    profile: PropTypes.object.isRequired,
    onAddLogin: PropTypes.func.isRequired,
    onRemoveLogin: PropTypes.func.isRequired,
    onClick: PropTypes.func
};

export default ExternalLogin;

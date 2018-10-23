import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialButton from '../layout/SocialButton';
import providers from '../../providers';

const ExternalLogin = ({ onResponse }) => (
    <React.Fragment>
        {providers.map(({ type, provider, appId, icon }) => (
            <SocialButton
                key={type}
                provider={type}
                appId={appId}
                color="secondary"
                block
                onLoginSuccess={user => onResponse(provider, user)}
            >
                <FontAwesomeIcon icon={icon} fixedWidth /> Connect with{' '}
                {provider}
            </SocialButton>
        ))}
    </React.Fragment>
);

ExternalLogin.propTypes = {
    onResponse: PropTypes.func.isRequired,
    onClick: PropTypes.func
};

export default ExternalLogin;

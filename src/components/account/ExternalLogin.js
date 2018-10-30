import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialButton from '../layout/SocialButton';
import providers from '../../providers';

const ExternalLogin = ({ onResponse }) => (
    <>
        {providers.map(provider => (
            <SocialButton
                key={provider.type}
                provider={provider.type}
                appId={provider.appId}
                color="secondary"
                block
                onLoginSuccess={user => onResponse(provider.provider, user)}
            >
                <FontAwesomeIcon icon={provider.icon} fixedWidth /> Connect with{' '}
                {provider.provider}
            </SocialButton>
        ))}
    </>
);

ExternalLogin.propTypes = {
    onResponse: PropTypes.func.isRequired,
    onClick: PropTypes.func
};

export default ExternalLogin;

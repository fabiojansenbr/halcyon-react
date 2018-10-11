import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';
import { Button } from 'reactstrap';

const SocialButton = ({ children, triggerLogin, ...props }) => (
    <Button onClick={triggerLogin} {...props}>
        {children}
    </Button>
);

SocialButton.propTypes = {
    children: PropTypes.node.isRequired,
    triggerLogin: PropTypes.func.isRequired
};

export default SocialLogin(SocialButton);

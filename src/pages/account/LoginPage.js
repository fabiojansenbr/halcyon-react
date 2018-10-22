import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import { getToken } from '../../clients/tokenClient';
import { registerExternal } from '../../clients/accountClient';
import PasswordForm from '../../components/account/PasswordForm';
import RegisterExternalForm from '../../components/account/RegisterExternalForm';
import TwoFactorForm from '../../components/account/TwoFactorForm';
import RecoveryCodeForm from '../../components/account/RecoveryCodeForm';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: 'Password',
            from: (props.location.state && props.location.state.from) || '/'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onExternalResponse = this.onExternalResponse.bind(this);
        this.onStageChange = this.onStageChange.bind(this);
    }

    async onSubmit(event, values) {
        let result;

        switch (this.state.stage) {
            case 'TwoFactor':
                result = await getToken({
                    grantType: 'TwoFactor',
                    emailAddress: this.state.emailAddress,
                    password: this.state.password,
                    verificationCode: values.verificationCode
                });

                if (result.error) {
                    return null;
                }

                this.props.context.updateUser(result, this.state.rememberMe);
                return this.props.history.push(this.state.from);

            case 'RecoveryCode':
                result = await getToken({
                    grantType: 'RecoveryCode',
                    emailAddress: this.state.emailAddress,
                    password: this.state.password,
                    recoveryCode: values.recoveryCode
                });

                if (result.error) {
                    return null;
                }

                this.props.context.updateUser(result, this.state.rememberMe);
                return this.props.history.push(this.state.from);

            case 'RegisterExternal':
                result = await registerExternal({
                    emailAddress: values.emailAddress,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    dateOfBirth: values.dateOfBirth,
                    provider: this.state.provider,
                    accessToken: this.state.accessToken
                });

                if (result.error) {
                    return null;
                }

                result = await getToken({
                    grantType: 'External',
                    provider: this.state.provider,
                    accessToken: this.state.accessToken
                });

                if (result.error) {
                    return null;
                }

                this.props.context.updateUser(result);
                return this.props.history.push(this.state.from);

            default:
                result = await getToken({
                    grantType: 'Password',
                    emailAddress: values.emailAddress,
                    password: values.password
                });

                if (result.requiresTwoFactor) {
                    this.setState({
                        stage: 'TwoFactor',
                        emailAddress: values.emailAddress,
                        password: values.password
                    });

                    return null;
                }

                if (result.error) {
                    return null;
                }

                this.props.context.updateUser(result, this.state.rememberMe);
                return this.props.history.push(this.state.from);
        }
    }

    async onExternalResponse(provider, response) {
        const accessToken =
            response && response._token && response._token.accessToken;

        if (!accessToken) {
            return null;
        }

        const result = await getToken({
            grantType: 'External',
            provider,
            accessToken
        });

        if (result.requiresExternal) {
            this.setState({
                stage: 'RegisterExternal',
                provider,
                accessToken
            });

            return null;
        }

        if (result.error) {
            return null;
        }

        this.props.context.updateUser(result);
        return this.props.history.push(this.state.from);
    }

    onStageChange(stage) {
        this.setState({ stage });
    }

    render() {
        switch (this.state.stage) {
            case 'RegisterExternal':
                return (
                    <RegisterExternalForm
                        provider={this.state.provider}
                        onSubmit={this.onSubmit}
                        onStageChange={this.onStageChange}
                    />
                );

            case 'TwoFactor':
                return (
                    <TwoFactorForm
                        onSubmit={this.onSubmit}
                        onStageChange={this.onStageChange}
                    />
                );

            case 'RecoveryCode':
                return (
                    <RecoveryCodeForm
                        onSubmit={this.onSubmit}
                        onStageChange={this.onStageChange}
                    />
                );

            default:
                return (
                    <PasswordForm
                        from={this.state.from}
                        onSubmit={this.onSubmit}
                        onExternalResponse={this.onExternalResponse}
                    />
                );
        }
    }
}

LoginPage.propTypes = {
    context: PropTypes.object,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withContext(LoginPage);

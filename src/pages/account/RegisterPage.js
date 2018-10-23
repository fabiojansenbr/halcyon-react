import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import { register, registerExternal } from '../../clients/accountClient';
import { getToken } from '../../clients/tokenClient';
import RegisterForm from '../../components/account/RegisterForm';
import RegisterExternalForm from '../../components/account/RegisterExternalForm';

class RegisterPage extends Component {
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
            case 'RegisterExternal':
                result = await registerExternal({
                    provider: this.state.provider,
                    accessToken: this.state.accessToken,
                    ...values
                });

                if (result.error) {
                    return;
                }

                result = await getToken({
                    grantType: 'External',
                    provider: this.state.provider,
                    accessToken: this.state.accessToken
                });

                if (result.error) {
                    return;
                }

                this.props.context.updateUser(result);
                return this.props.history.push(this.state.from);

            default:
                result = await register(...values);

                if (result.error) {
                    return;
                }

                result = await getToken({
                    grantType: 'Password',
                    ...values
                });

                if (result.error) {
                    return;
                }

                this.props.context.updateUser(result);
                return this.props.history.push(this.state.from);
        }
    }

    async onExternalResponse(provider, response) {
        const accessToken =
            response && response._token && response._token.accessToken;

        if (!accessToken) {
            return;
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

            return;
        }

        if (result.error) {
            return;
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

            default:
                return (
                    <RegisterForm
                        from={this.state.from}
                        onSubmit={this.onSubmit}
                        onExternalResponse={this.onExternalResponse}
                    />
                );
        }
    }
}

RegisterPage.propTypes = {
    context: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withContext(RegisterPage);

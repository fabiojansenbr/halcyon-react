import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register, registerExternal } from '../../actions/accountActions';
import { getToken } from '../../actions/tokenActions';
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
                result = await this.props.registerExternal({
                    emailAddress: values.emailAddress,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    dateOfBirth: values.dateOfBirth,
                    provider: this.state.provider,
                    accessToken: this.state.accessToken
                });

                if (result.error) {
                    return;
                }

                result = await this.props.getToken({
                    grantType: 'External',
                    provider: this.state.provider,
                    accessToken: this.state.accessToken
                });

                if (result.error) {
                    return;
                }

                return this.props.history.push(this.state.from);

            default:
                result = await this.props.register({
                    emailAddress: values.emailAddress,
                    password: values.password,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    dateOfBirth: values.dateOfBirth
                });

                if (result.error) {
                    return;
                }

                result = await this.props.getToken({
                    grantType: 'Password',
                    emailAddress: values.emailAddress,
                    password: values.password
                });

                if (result.error) {
                    return;
                }

                return this.props.history.push(this.state.from);
        }
    }

    async onExternalResponse(provider, response) {
        const accessToken =
            response && response._token && response._token.accessToken;

        if (!accessToken) {
            return;
        }

        const result = await this.props.getToken({
            grantType: 'External',
            provider,
            accessToken
        });

        if (result.error) {
            const requiresExternal =
                result.error.response &&
                result.error.response.data &&
                result.error.response.data.data &&
                result.error.response.data.data.requiresExternal;

            if (requiresExternal) {
                this.setState({
                    stage: 'RegisterExternal',
                    provider,
                    accessToken
                });
            }

            return;
        }

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

const mapDispatchToProps = dispatch => ({
    register: model => dispatch(register(model)),
    registerExternal: model => dispatch(registerExternal(model)),
    getToken: model => dispatch(getToken(model))
});

RegisterPage.propTypes = {
    register: PropTypes.func.isRequired,
    registerExternal: PropTypes.func.isRequired,
    getToken: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(
    undefined,
    mapDispatchToProps
)(RegisterPage);

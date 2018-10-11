import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    getProfile,
    verifyEmail,
    addLogin,
    removeLogin,
    disableAuthenticator,
    resetRecoveryCodes,
    deleteAccount
} from '../../clients/manageClient';
import { openModal } from '../../clients/modalClient';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Profile from './Profile';
import Picture from './Picture';
import ExternalLogin from './ExternalLogin';
import TwoFactor from './TwoFactor';
import Settings from './Settings';

class ManagePage extends Component {
    constructor(props) {
        super(props);

        this.onVerifyEmail = this.onVerifyEmail.bind(this);
        this.onAddLogin = this.onAddLogin.bind(this);
        this.onRemoveLogin = this.onRemoveLogin.bind(this);
        this.onDisableAuthenticator = this.onDisableAuthenticator.bind(this);
        this.onResetRecoveryCodes = this.onResetRecoveryCodes.bind(this);
        this.onDeleteAccount = this.onDeleteAccount.bind(this);
        this.onDownloadData = this.onDownloadData.bind(this);
    }

    componentDidMount() {
        getProfile();
    }

    async onVerifyEmail() {
        await verifyEmail();
    }

    async onAddLogin(provider, response) {
        const accessToken =
            response && response._token && response._token.accessToken;

        if (!accessToken) {
            return;
        }

        const result = await addLogin({ provider, accessToken });
        if (!result.error) {
            getProfile();
        }
    }

    async onRemoveLogin(login) {
        const result = await removeLogin(login);
        if (!result.error) {
            getProfile();
        }
    }

    async onDisableAuthenticator() {
        const result = await disableAuthenticator();
        if (!result.error) {
            getProfile();
        }
    }

    async onResetRecoveryCodes() {
        await resetRecoveryCodes();
    }

    onDeleteAccount() {
        openModal({
            title: 'Confirm',
            message: 'Are you sure you want to delete your account?',
            onOk: async () => {
                const result = await deleteAccount();
                if (!result.error) {
                    this.props.history.push('/');
                }
            }
        });
    }

    onDownloadData() {
        const link = document.createElement('a');
        link.setAttribute('download', 'personal-data.json');
        link.setAttribute('type', 'application/json');

        link.href = window.URL.createObjectURL(
            new Blob([JSON.stringify(this.props.profile)])
        );

        document.body.appendChild(link);
        link.click();
    }

    render() {
        if (!this.props.profile) {
            return null;
        }

        return (
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <h1>My Account</h1>
                            <hr />

                            <Profile
                                profile={this.props.profile}
                                onVerifyEmail={this.onVerifyEmail}
                            />

                            <Picture profile={this.props.profile} />

                            <ExternalLogin
                                profile={this.props.profile}
                                onAddLogin={this.onAddLogin}
                                onRemoveLogin={this.onRemoveLogin}
                            />

                            <TwoFactor
                                profile={this.props.profile}
                                onDisableAuthenticator={
                                    this.onDisableAuthenticator
                                }
                                onResetRecoveryCodes={this.onResetRecoveryCodes}
                            />

                            <Settings
                                onDeleteAccount={this.onDeleteAccount}
                                onDownloadData={this.onDownloadData}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

ManagePage.propTypes = {
    profile: PropTypes.object,
    getProfile: PropTypes.func.isRequired,
    verifyEmail: PropTypes.func.isRequired,
    addLogin: PropTypes.func.isRequired,
    removeLogin: PropTypes.func.isRequired,
    disableAuthenticator: PropTypes.func.isRequired,
    resetRecoveryCodes: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default ManagePage;

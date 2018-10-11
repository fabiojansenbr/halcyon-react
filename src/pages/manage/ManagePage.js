import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import {
    getProfile,
    verifyEmail,
    addLogin,
    removeLogin,
    disableAuthenticator,
    resetRecoveryCodes,
    deleteAccount
} from '../../api/manageClient';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Profile from '../../components/manage/Profile';
import Picture from '../../components/manage/Picture';
import ExternalLogin from '../../components/manage/ExternalLogin';
import TwoFactor from '../../components/manage/TwoFactor';
import Settings from '../../components/manage/Settings';

class ManagePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined
        };

        this.onVerifyEmail = this.onVerifyEmail.bind(this);
        this.onAddLogin = this.onAddLogin.bind(this);
        this.onRemoveLogin = this.onRemoveLogin.bind(this);
        this.onDisableAuthenticator = this.onDisableAuthenticator.bind(this);
        this.onResetRecoveryCodes = this.onResetRecoveryCodes.bind(this);
        this.onDeleteAccount = this.onDeleteAccount.bind(this);
        this.onDownloadData = this.onDownloadData.bind(this);
    }

    async componentDidMount() {
        await this.loadData();
    }

    async loadData() {
        const result = getProfile();
        if (!result.error) {
            this.setState({ data: result.data.data });
        }
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
            await this.loadData();
        }
    }

    async onRemoveLogin(login) {
        const result = await removeLogin(login);
        if (!result.error) {
            await this.loadData();
        }
    }

    async onDisableAuthenticator() {
        const result = await disableAuthenticator();
        if (!result.error) {
            await this.loadData();
        }
    }

    async onResetRecoveryCodes() {
        await resetRecoveryCodes();
    }

    onDeleteAccount() {
        this.props.context.showModal({
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
            new Blob([JSON.stringify(this.state.data)])
        );

        document.body.appendChild(link);
        link.click();
    }

    render() {
        if (!this.state.data) {
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
                                profile={this.state.data}
                                onVerifyEmail={this.onVerifyEmail}
                            />

                            <Picture profile={this.state.data} />

                            <ExternalLogin
                                profile={this.state.data}
                                onAddLogin={this.onAddLogin}
                                onRemoveLogin={this.onRemoveLogin}
                            />

                            <TwoFactor
                                profile={this.state.data}
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
    context: PropTypes.object,
    history: PropTypes.object.isRequired
};

export default withContext(ManagePage);

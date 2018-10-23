import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    getAuthenticatorSettings,
    configureAuthenticator
} from '../../clients/manageClient';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

class ConfigureAuthenticatorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        await this.loadData();
    }

    async loadData() {
        const result = await getAuthenticatorSettings();
        if (!result.success) {
            return;
        }

        this.setState({ data: result });
    }

    async onSubmit(event, values) {
        const result = await configureAuthenticator(values);
        if (!result.success) {
            return;
        }

        this.props.history.push('/manage');
    }

    render() {
        const { authenticatorUri, secret } = this.state.data;
        if (!authenticatorUri) {
            return null;
        }

        return (
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <h1>Configure Authenticator App</h1>
                            <p>
                                To use an authenticator app go through the
                                following steps.
                            </p>
                            <hr />

                            <ol>
                                <li>
                                    <p>
                                        Download a two-factor authenticator app
                                        like Google Authenticator for{' '}
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=en"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Android
                                        </a>{' '}
                                        or{' '}
                                        <a
                                            href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            iOS
                                        </a>
                                        .
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Scan the QR Code or enter this key{' '}
                                        <kbd>{secret}</kbd> into your two factor
                                        authenticator app. Spaces and casing do
                                        not matter.
                                    </p>
                                    <p>
                                        <QRCode
                                            value={authenticatorUri}
                                            size={150}
                                        />
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Once you have scanned the QR code or
                                        input the key above, your two factor
                                        authentication app will provide you with
                                        a unique code. Enter the code in the
                                        confirmation box below.
                                    </p>
                                </li>
                            </ol>

                            <AvForm onValidSubmit={this.onSubmit}>
                                <AvField
                                    name="verificationCode"
                                    label="Verification Code"
                                    autoComplete="off"
                                    required
                                />
                                <FormGroup className="text-right">
                                    <Link
                                        to="/manage"
                                        className="btn btn-secondary"
                                    >
                                        Cancel
                                    </Link>{' '}
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </FormGroup>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

ConfigureAuthenticatorPage.propTypes = {
    history: PropTypes.object.isRequired
};

export default ConfigureAuthenticatorPage;

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

const TwoFactorForm = ({ onSubmit, onStageChange }) => (
    <Row className="justify-content-md-center">
        <Col lg={8}>
            <Card className="mb-3">
                <CardBody>
                    <h1>Two Factor Authentication</h1>
                    <p>
                        Your login is protected with an authenticator app. Enter
                        your authenticator code below.
                    </p>
                    <hr />

                    <AvForm onValidSubmit={onSubmit}>
                        <AvField
                            name="verificationCode"
                            label="Authenticator Code"
                            autoComplete="off"
                            required
                        />

                        <FormGroup className="text-right">
                            <Button
                                color="secondary"
                                onClick={() => onStageChange('Password')}
                            >
                                Cancel
                            </Button>{' '}
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </FormGroup>
                    </AvForm>

                    <hr />

                    <p>
                        Don&#39;t have access to your authenticator device?{' '}
                        <Link to="/account/forgotpassword">Request reset</Link>
                    </p>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

TwoFactorForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onStageChange: PropTypes.func.isRequired
};

export default TwoFactorForm;

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const RecoveryCodeForm = ({ onSubmit, onStageChange }) => (
    <Row className="justify-content-md-center">
        <Col lg={8}>
            <Card className="mb-3">
                <CardBody>
                    <h1>Recovery Code Verification</h1>
                    <p>
                        You have requested to log in with a recovery code. This
                        login will not be remembered until you provide an
                        authenticator app code at log in or disable two factor
                        authentication and log in again.
                    </p>
                    <hr />

                    <AvForm onValidSubmit={onSubmit}>
                        <AvField
                            name="recoveryCode"
                            label="Recovery Code"
                            autoComplete="off"
                            required
                        />

                        <FormGroup className="text-right">
                            <Button
                                color="secondary"
                                onClick={() => onStageChange('TwoFactor')}
                            >
                                Cancel
                            </Button>{' '}
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

RecoveryCodeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onStageChange: PropTypes.func.isRequired
};

export default RecoveryCodeForm;

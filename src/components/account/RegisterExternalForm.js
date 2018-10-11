import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import ProfileForm from '../form/ProfileForm';

const RegisterExternalForm = ({ provider, onSubmit, onStageChange }) => (
    <Row className="justify-content-md-center">
        <Col lg={8}>
            <Card className="mb-3">
                <CardBody>
                    <h1>Associate Your Account</h1>
                    <p>
                        You&#39;ve successfully authenticated with{' '}
                        <strong>{provider}</strong>. Please complete your site
                        registration.
                    </p>
                    <hr />

                    <AvForm onValidSubmit={onSubmit}>
                        <AvField
                            name="emailAddress"
                            type="email"
                            label="Email Address"
                            required
                        />

                        <ProfileForm />

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
                </CardBody>
            </Card>
        </Col>
    </Row>
);

RegisterExternalForm.propTypes = {
    provider: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onStageChange: PropTypes.func.isRequired
};

export default RegisterExternalForm;

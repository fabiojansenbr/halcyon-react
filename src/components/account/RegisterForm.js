import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import ExternalLogin from './ExternalLogin';
import ProfileForm from '../form/ProfileForm';

const RegisterForm = ({ from, onSubmit, onExternalResponse }) => (
    <Row className="justify-content-md-center">
        <Col lg={6}>
            <Card className="mb-3">
                <CardBody>
                    <h1>Register</h1>
                    <hr />

                    <AvForm onValidSubmit={onSubmit}>
                        <AvField
                            name="emailAddress"
                            type="email"
                            label="Email Address"
                            required
                        />
                        <AvField
                            name="password"
                            type="password"
                            label="Password"
                            required
                        />
                        <AvField
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            required
                            validate={{ match: { value: 'password' } }}
                        />

                        <ProfileForm />

                        <FormGroup className="text-right">
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </FormGroup>
                    </AvForm>

                    <hr />

                    <p>
                        Already have an account?{' '}
                        <Link
                            to={{
                                pathname: '/account/login',
                                state: { from }
                            }}
                        >
                            Log in now
                        </Link>
                    </p>
                </CardBody>
            </Card>
        </Col>
        <Col lg={4}>
            <ExternalLogin onResponse={onExternalResponse} />
        </Col>
    </Row>
);

RegisterForm.propTypes = {
    from: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onExternalResponse: PropTypes.func.isRequired
};

export default RegisterForm;

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, FormGroup, Button, Label } from 'reactstrap';
import {
    AvForm,
    AvField,
    AvGroup,
    AvInput
} from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import ExternalLogin from './ExternalLogin';

const PasswordForm = ({ from, onSubmit, onExternalResponse }) => (
    <Row className="justify-content-md-center">
        <Col lg={6}>
            <Card className="mb-3">
                <CardBody>
                    <h1>Login</h1>
                    <hr />

                    <AvForm
                        onValidSubmit={onSubmit}
                        model={{ rememberMe: true }}
                    >
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

                        <AvGroup>
                            <AvGroup check>
                                <Label check>
                                    <AvInput
                                        type="checkbox"
                                        name="rememberMe"
                                    />{' '}
                                    Remember my password on this computer
                                </Label>
                            </AvGroup>
                        </AvGroup>

                        <FormGroup className="text-right">
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </FormGroup>
                    </AvForm>

                    <hr />

                    <p>
                        Not already a member?{' '}
                        <Link
                            to={{
                                pathname: '/account/register',
                                state: { from }
                            }}
                        >
                            Register now
                        </Link>
                    </p>
                    <p>
                        Forgotten your password?{' '}
                        <Link to="/account/forgotpassword">Request reset</Link>
                    </p>
                </CardBody>
            </Card>
        </Col>
        <Col lg={4}>
            <ExternalLogin onResponse={onExternalResponse} />
        </Col>
    </Row>
);

PasswordForm.propTypes = {
    from: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onExternalResponse: PropTypes.func.isRequired
};

export default PasswordForm;

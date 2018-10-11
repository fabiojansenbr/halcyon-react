import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { resetPassword } from '../../api/accountClient';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { parse } from '../../utils/querystring';

class ResetPasswordPage extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event, values) {
        const qs = parse(this.props.location);
        const result = await resetPassword({
            ...values,
            code: qs.code
        });

        if (!result.error) {
            this.props.history.push('/account/login');
        }
    }

    render() {
        return (
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <h1>Reset Password</h1>
                            <hr />

                            <AvForm onValidSubmit={this.onSubmit}>
                                <AvField
                                    name="emailAddress"
                                    type="email"
                                    label="Email Address"
                                    required
                                />
                                <AvField
                                    name="newPassword"
                                    type="password"
                                    label="New Password"
                                    required
                                />
                                <AvField
                                    name="confirmNewPassword"
                                    type="password"
                                    label="Confirm New Password"
                                    required
                                    validate={{
                                        match: { value: 'newPassword' }
                                    }}
                                />

                                <FormGroup className="text-right">
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

ResetPasswordPage.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default ResetPasswordPage;
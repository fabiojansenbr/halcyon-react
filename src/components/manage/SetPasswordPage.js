import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setPassword } from '../../clients/manageClient';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

class SetPasswordPage extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event, values) {
        const result = await setPassword(values);
        if (!result.error) {
            this.props.history.push('/manage');
        }
    }

    render() {
        return (
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <h1>Set Password</h1>
                            <hr />

                            <AvForm onValidSubmit={this.onSubmit}>
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

SetPasswordPage.propTypes = {
    setPassword: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default SetPasswordPage;

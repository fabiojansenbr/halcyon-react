import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../../clients/userClient';
import { toUserDataModel } from '../../mappers/userMapper';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import ProfileForm from '../../components/form/ProfileForm';
import RoleForm from '../../components/form/RoleForm';

class CreateUserPage extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event, values) {
        const model = toUserDataModel(values);
        const result = await createUser(model);
        if (!result.success) {
            return;
        }

        this.props.history.push('/user');
    }

    render() {
        return (
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <h1>
                                User
                                <br />
                                <small className="text-muted">Create</small>
                            </h1>
                            <hr />

                            <AvForm onValidSubmit={this.onSubmit}>
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
                                <RoleForm />

                                <FormGroup className="text-right">
                                    <Link
                                        to="/user"
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

CreateUserPage.propTypes = {
    history: PropTypes.object.isRequired
};

export default CreateUserPage;

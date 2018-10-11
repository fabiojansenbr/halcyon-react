import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import {
    getUser,
    updateUser,
    unlockUser,
    lockUser,
    deleteUser
} from '../../api/userClient';
import { toUserDataModel } from '../../mappers/userMapper';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import ProfileForm from '../../components/form/ProfileForm';
import RoleForm from '../../components/form/RoleForm';
import Status from '../../components/user/Status';
import Options from '../../components/user/Options';

class UpdateUserPage extends Component {
    constructor(props) {
        super(props);

        this.onUnlock = this.onUnlock.bind(this);
        this.onLock = this.onLock.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        getUser(this.props.match.params.id);
    }

    onUnlock(user) {
        this.props.context.showModal({
            title: 'Confirm',
            message: `Are you sure you want to unlock <strong>${
                user.firstName
            } ${user.lastName}</strong>?`,
            onOk: async () => {
                const id = this.props.match.params.id;
                const result = await unlockUser(id);
                if (!result.error) {
                    getUser(this.props.match.params.id);
                }
            }
        });
    }

    onLock(user) {
        this.props.context.showModal({
            title: 'Confirm',
            message: `Are you sure you want to lock out <strong>${
                user.firstName
            } ${user.lastName}</strong>?`,
            onOk: async () => {
                const id = this.props.match.params.id;
                const result = await lockUser(id);
                if (!result.error) {
                    getUser(this.props.match.params.id);
                }
            }
        });
    }

    onDelete(user) {
        this.props.context.showModal({
            title: 'Confirm',
            message: `Are you sure you want to delete <strong>${
                user.firstName
            } ${user.lastName}</strong>?`,
            onOk: async () => {
                const id = this.props.match.params.id;
                const result = await deleteUser(id);
                if (!result.error) {
                    this.props.history.push('/user');
                }
            }
        });
    }

    async onSubmit(event, values) {
        const id = this.props.match.params.id;
        const model = toUserDataModel(values);
        const result = await updateUser(id, model);
        if (!result.error) {
            this.props.history.push('/user');
        }
    }

    render() {
        if (!this.props.user) {
            return null;
        }

        return (
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex flex-wrap">
                                <img
                                    src={this.props.user.gravatarUrl}
                                    alt={this.props.user.emailAddress}
                                    className="img-thumbnail rounded-circle mr-3 mb-2"
                                />
                                <h2 className="mb-2 text-truncate">
                                    {this.props.user.firstName}{' '}
                                    {this.props.user.lastName}
                                    <br />
                                    <small className="text-muted">
                                        {this.props.user.emailAddress}
                                    </small>
                                </h2>
                                <div className="ml-auto">
                                    <Status user={this.props.user} />
                                </div>
                            </div>
                            <hr />

                            <AvForm
                                onValidSubmit={this.onSubmit}
                                model={this.props.user}
                            >
                                <AvField
                                    name="emailAddress"
                                    type="email"
                                    label="Email Address"
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
                                    <Options
                                        user={this.props.user}
                                        onUnlock={this.onUnlock}
                                        onLock={this.onLock}
                                        onDelete={this.onDelete}
                                    />
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

UpdateUserPage.propTypes = {
    context: PropTypes.object.required,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withContext(UpdateUserPage);

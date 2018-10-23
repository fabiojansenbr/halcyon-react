import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import { getProfile, updateProfile } from '../../clients/manageClient';
import { getToken } from '../../clients/tokenClient';
import { toUpdateProfileViewModel } from '../../mappers/manageMapper';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import ProfileForm from '../../components/form/ProfileForm';

class UpdateProfilePage extends Component {
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
        const result = await getProfile();
        if (!result.success) {
            return;
        }

        this.setState({ data: toUpdateProfileViewModel(result) });
    }

    async onSubmit(event, values) {
        let result = await updateProfile(values);
        if (!result.success) {
            return;
        }

        result = await getToken({
            grantType: 'RefreshToken',
            refreshToken: this.props.context.user.refreshToken
        });

        if (!result.success) {
            return;
        }

        this.props.context.updateUser(result);
        this.props.history.push('/manage');
    }

    render() {
        if (!this.state.data) {
            return null;
        }

        return (
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <h1>Update Profile</h1>
                            <hr />

                            <AvForm
                                onValidSubmit={this.onSubmit}
                                model={this.state.data}
                            >
                                <AvField
                                    name="emailAddress"
                                    type="email"
                                    label="Email Address"
                                    required
                                />

                                <ProfileForm />

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

UpdateProfilePage.propTypes = {
    context: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withContext(UpdateProfilePage);

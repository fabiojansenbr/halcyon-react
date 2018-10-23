import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../actions/manageActions';
import { refreshToken } from '../../actions/tokenActions';
import { toUpdateProfileModel } from '../../mappers/manageMapper';
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import ProfileForm from '../../components/form/ProfileForm';

class UpdateProfilePage extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getProfile();
    }

    async onSubmit(event, values) {
        let result = await this.props.updateProfile(values);
        if (result.error) {
            return;
        }

        result = await this.props.refreshToken();
        if (result.error) {
            return;
        }

        this.props.history.push('/manage');
    }

    render() {
        if (!this.props.profile) {
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
                                model={this.props.profile}
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

const mapStateToProps = state => ({
    profile: toUpdateProfileModel(state.manage.profile)
});

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(getProfile()),
    updateProfile: model => dispatch(updateProfile(model)),
    refreshToken: () => dispatch(refreshToken())
});

UpdateProfilePage.propTypes = {
    profile: PropTypes.object,
    getProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    refreshToken: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateProfilePage);

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Profile = ({ profile, onVerifyEmail }) => (
    <React.Fragment>
        <div className="d-flex">
            <h4>Profile</h4>
            <Link
                to="/manage/updateprofile"
                className="btn btn-secondary ml-auto"
            >
                Update
            </Link>
        </div>
        <hr />

        <FormGroup>
            <Label>Email Address</Label>
            <Input plaintext>
                {profile.emailAddress}
                <br />
                {profile.emailConfirmed && (
                    <span className="text-success">Verified</span>
                )}
                {!profile.emailConfirmed && (
                    <React.Fragment>
                        <span className="text-danger">Unverified</span>
                        <br />
                        <Button color="link" onClick={onVerifyEmail}>
                            Send verification email...
                        </Button>
                    </React.Fragment>
                )}
            </Input>
        </FormGroup>

        <FormGroup>
            <Label>Password</Label>
            <Input plaintext>
                {profile.hasPassword && (
                    <React.Fragment>
                        ********
                        <br />
                        <Link to="/manage/changepassword">
                            Change your password...
                        </Link>
                    </React.Fragment>
                )}
                {!profile.hasPassword && (
                    <Link to="/manage/setpassword">Set your password...</Link>
                )}
            </Input>
        </FormGroup>

        <FormGroup>
            <Label>Name</Label>
            <Input plaintext>
                {profile.firstName} {profile.lastName}
            </Input>
        </FormGroup>

        <FormGroup>
            <Label>Date of Birth</Label>
            <Input plaintext>{profile.dateOfBirth}</Input>
        </FormGroup>
    </React.Fragment>
);

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    onVerifyEmail: PropTypes.func.isRequired
};

export default Profile;

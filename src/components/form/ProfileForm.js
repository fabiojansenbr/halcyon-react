import React from 'react';
import { FormGroup } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';

const ProfileForm = () => (
    <>
        <FormGroup row>
            <AvField
                name="firstName"
                label="First Name"
                required
                groupAttrs={{ className: 'col-lg-6' }}
            />
            <AvField
                name="lastName"
                label="Last Name"
                required
                groupAttrs={{ className: 'col-lg-6' }}
            />
        </FormGroup>

        <AvField
            name="dateOfBirth"
            type="date"
            label="Date Of Birth"
            required
        />
    </>
);

export default ProfileForm;

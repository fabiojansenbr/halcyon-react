import React from 'react';
import { Label } from 'reactstrap';
import { AvGroup, AvInput } from 'availity-reactstrap-validation';

const roles = ['System Administrator', 'User Administrator'];

const RoleForm = () => (
    <React.Fragment>
        <h4>Roles</h4>
        <hr />

        {roles.map(value => (
            <AvGroup key={value}>
                <AvGroup check>
                    <Label check>
                        <AvInput type="checkbox" name={`roles.${value}`} />{' '}
                        {value}
                    </Label>
                </AvGroup>
            </AvGroup>
        ))}
    </React.Fragment>
);

export default RoleForm;

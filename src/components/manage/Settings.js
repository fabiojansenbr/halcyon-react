import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const Settings = ({ onDeleteAccount, onDownloadData }) => (
    <>
        <h4>Settings</h4>
        <hr />

        <p>
            Once you delete your account all of your data and settings will be
            removed. Please be certain.
        </p>
        <p>
            <Button color="secondary" onClick={onDownloadData}>
                Download Data
            </Button>{' '}
            <Button color="danger" onClick={onDeleteAccount}>
                Delete Account
            </Button>
        </p>
    </>
);

Settings.propTypes = {
    onDeleteAccount: PropTypes.func.isRequired,
    onDownloadData: PropTypes.func.isRequired
};

export default Settings;

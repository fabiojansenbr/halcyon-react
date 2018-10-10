import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ profile }) => (
    <React.Fragment>
        <h4>Picture</h4>
        <hr />

        <div className="d-flex mb-3">
            <img
                src={profile.gravatarUrl}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="img-thumbnail rounded-circle mr-3"
            />{' '}
            <div>
                Powered by <strong>Gravatar</strong>
                <br />
                <a
                    href="http://en.gravatar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Change your picture...
                </a>
            </div>
        </div>
    </React.Fragment>
);

Picture.propTypes = {
    profile: PropTypes.object.isRequired
};

export default Picture;

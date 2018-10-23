import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ profile: { firstName, lastName, gravatarUrl } }) => (
    <React.Fragment>
        <h4>Picture</h4>
        <hr />

        <div className="d-flex mb-3">
            <img
                src={gravatarUrl}
                alt={`${firstName} ${lastName}`}
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

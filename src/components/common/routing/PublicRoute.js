import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

const PublicRoute = ({ component: Component, title, ...rest }) => {
    document.title = title ? `${title} // Halcyon` : 'Halcyon';
    return <Route {...rest} render={props => <Component {...props} />} />;
};

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default PublicRoute;

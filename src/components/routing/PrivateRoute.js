import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const PrivateRoute = ({
    component: Component,
    currentUser,
    requiredRoles,
    ...rest
}) => {
    if (!currentUser) {
        return (
            <Redirect
                to={{
                    pathname: '/account/login',
                    state: {
                        from: `${rest.location.pathname}${rest.location.search}`
                    }
                }}
            />
        );
    }

    if (
        requiredRoles &&
        (!currentUser.role ||
            !requiredRoles.some(value => currentUser.role.includes(value)))
    ) {
        return <Redirect to="/account/accessdenied" />;
    }

    return (
        <PublicRoute
            component={Component}
            {...rest}
            render={props => <Component {...props} />}
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    currentUser: PropTypes.object,
    requiredRoles: PropTypes.array,
    title: PropTypes.string
};

export default PrivateRoute;

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withContext } from '../../context';
import PublicRoute from './PublicRoute';

const PrivateRoute = ({
    component: Component,
    context,
    requiredRoles,
    ...rest
}) => {
    const user = context.user;
    if (!user) {
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
        (!user.role || !requiredRoles.some(value => user.role.includes(value)))
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
    context: PropTypes.object.isRequired,
    component: PropTypes.func.isRequired,
    requiredRoles: PropTypes.array,
    title: PropTypes.string
};

export default withContext(PrivateRoute);

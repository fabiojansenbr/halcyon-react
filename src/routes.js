import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './components/routing/PublicRoute';
import PrivateRoute from './components/routing/PrivateRoute';

import App from './components/App';

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/home/AboutPage';
import NotFoundPage from './pages/home/NotFoundPage';

import LoginPage from './pages/account/LoginPage';
import RegisterPage from './pages/account/RegisterPage';
import ForgotPasswordPage from './pages/account/ForgotPasswordPage';
import ResetPasswordPage from './pages/account/ResetPasswordPage';
import AccessDeniedPage from './pages/account/AccessDeniedPage';

import ManagePage from './pages/manage/ManagePage';
import UpdateProfilePage from './pages/manage/UpdateProfilePage';
import ConfirmEmailPage from './pages/manage/ConfirmEmailPage';
import ChangePasswordPage from './pages/manage/ChangePasswordPage';
import SetPasswordPage from './pages/manage/SetPasswordPage';
import ConfigureAuthenticatorPage from './pages/manage/ConfigureAuthenticatorPage';

import UserPage from './pages/user/UserPage';
import CreateUserPage from './pages/user/CreateUserPage';
import UpdateUserPage from './pages/user/UpdateUserPage';

const routes = (
    <App>
        <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute path="/about" title="About" component={AboutPage} />

            <PublicRoute
                path="/account/login"
                title="Login"
                component={LoginPage}
            />
            <PublicRoute
                path="/account/register"
                title="Register"
                component={RegisterPage}
            />
            <PublicRoute
                path="/account/forgotpassword"
                title="Forgot Password"
                component={ForgotPasswordPage}
            />
            <PublicRoute
                path="/account/resetpassword/:code"
                title="Reset Password"
                component={ResetPasswordPage}
            />
            <PublicRoute
                path="/account/accessdenied"
                title="Access Denied"
                component={AccessDeniedPage}
            />

            <PrivateRoute
                exact
                path="/manage"
                title="My Account"
                component={ManagePage}
            />
            <PrivateRoute
                path="/manage/updateprofile"
                title="Update Profile"
                component={UpdateProfilePage}
            />
            <PrivateRoute
                path="/manage/confirmemail/:code"
                component={ConfirmEmailPage}
            />
            <PrivateRoute
                path="/manage/changepassword"
                title="Change Password"
                component={ChangePasswordPage}
            />
            <PrivateRoute
                path="/manage/setpassword"
                title="Set Password"
                component={SetPasswordPage}
            />
            <PrivateRoute
                path="/manage/configureauthenticator"
                title="Configure Authenticator App"
                component={ConfigureAuthenticatorPage}
            />

            <PrivateRoute
                exact
                path="/user"
                title="Users"
                requiredRoles={['System Administrator', 'User Administrator']}
                component={UserPage}
            />
            <PrivateRoute
                path="/user/create"
                title="Create User"
                requiredRoles={['System Administrator', 'User Administrator']}
                component={CreateUserPage}
            />
            <PrivateRoute
                path="/user/update/:id"
                title="Update User"
                requiredRoles={['System Administrator', 'User Administrator']}
                component={UpdateUserPage}
            />

            <PublicRoute component={NotFoundPage} />
        </Switch>
    </App>
);

export default routes;

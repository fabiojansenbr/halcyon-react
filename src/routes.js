import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './components/common/routing/PublicRoute';
import PrivateRoute from './components/common/routing/PrivateRoute';

import App from './components/App';

import HomePage from './components/home/HomePage';
import AboutPage from './components/home/AboutPage';
import NotFoundPage from './components/home/NotFoundPage';

import LoginPage from './components/account/LoginPage';
import RegisterPage from './components/account/RegisterPage';
import ForgotPasswordPage from './components/account/ForgotPasswordPage';
import ResetPasswordPage from './components/account/ResetPasswordPage';
import AccessDeniedPage from './components/account/AccessDeniedPage';

import ManagePage from './components/manage/ManagePage';
import UpdateProfilePage from './components/manage/UpdateProfilePage';
import ConfirmEmailPage from './components/manage/ConfirmEmailPage';
import ChangePasswordPage from './components/manage/ChangePasswordPage';
import SetPasswordPage from './components/manage/SetPasswordPage';
import ConfigureAuthenticatorPage from './components/manage/ConfigureAuthenticatorPage';

import UserPage from './components/user/UserPage';
import CreateUserPage from './components/user/CreateUserPage';
import UpdateUserPage from './components/user/UpdateUserPage';

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
                path="/account/resetpassword"
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
                path="/manage/confirmemail"
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

import moment from 'moment';

export const toUpdateUserModel = user => {
    if (!user) {
        return undefined;
    }

    const roles = {};
    for (const role of user.roles) {
        roles[role] = true;
    }

    return {
        ...user,
        dateOfBirth: moment(user.dateOfBirth).format('YYYY-MM-DD'),
        roles
    };
};

export const toUserDataModel = values => ({
    ...values,
    roles: Object.keys(values.roles || {})
        .filter(key => values.roles[key])
        .map(key => key)
});

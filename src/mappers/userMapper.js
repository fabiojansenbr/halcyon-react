import moment from 'moment';

export const toUpdateUserViewModel = user => {
    if (!user) {
        return undefined;
    }

    return {
        ...user,
        dateOfBirth: moment(user.dateOfBirth).format('YYYY-MM-DD'),
        roles: toRolesViewModel(user.roles)
    };
};

const toRolesViewModel = roles => {
    const model = {};

    for (const role of roles) {
        model[role] = true;
    }

    return model;
};

export const toUserDataModel = values => ({
    ...values,
    roles: Object.keys(values.roles || {})
        .filter(key => values.roles[key])
        .map(key => key)
});

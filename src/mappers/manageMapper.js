import moment from 'moment';

export const toProfileViewModel = profile => {
    if (!profile) {
        return undefined;
    }

    return {
        ...profile,
        dateOfBirth: moment(profile.dateOfBirth).format('LL')
    };
};

export const toUpdateProfileViewModel = profile => {
    if (!profile) {
        return undefined;
    }

    return {
        ...profile,
        dateOfBirth: moment(profile.dateOfBirth).format('YYYY-MM-DD')
    };
};

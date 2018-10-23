import moment from 'moment';

export const toProfileModel = profile => {
    if (!profile) {
        return undefined;
    }

    return {
        ...profile,
        dateOfBirth: moment(profile.dateOfBirth).format('LL')
    };
};

export const toUpdateProfileModel = profile => {
    if (!profile) {
        return undefined;
    }

    return {
        ...profile,
        dateOfBirth: moment(profile.dateOfBirth).format('YYYY-MM-DD')
    };
};

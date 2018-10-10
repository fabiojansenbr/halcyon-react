import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const providers = [
    {
        type: 'facebook',
        displayName: 'Facebook',
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        icon: faFacebook
    },
    {
        type: 'google',
        displayName: 'Google',
        appId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        icon: faGoogle
    }
];

export default providers;

import React from 'react';

const Footer = () => (
    <React.Fragment>
        <hr />
        <p>
            &copy; <a href="https://www.chrispoulter.com">Chris Poulter</a>{' '}
            {new Date().getFullYear()}
        </p>
    </React.Fragment>
);

export default Footer;

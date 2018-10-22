import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => (
    <React.Fragment>
        <hr />
        <p>
            &copy; <a href="https://www.chrispoulter.com">Chris Poulter</a>{' '}
            {currentYear}
        </p>
    </React.Fragment>
);

export default Footer;

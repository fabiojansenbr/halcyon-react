import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => (
    <>
        <hr />
        <p>
            &copy; <a href="https://www.chrispoulter.com">Chris Poulter</a>{' '}
            {currentYear}
        </p>
    </>
);

export default Footer;

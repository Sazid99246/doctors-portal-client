import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundImage: `url(${footer})` }} className="footer p-10 flex justify-between">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Emergency Checkup</a>
                    <a href="/" className="link link-hover">Monthly Checkup</a>
                    <a href="/" className="link link-hover">Weekly Chekcup</a>
                    <a href="/" className="link link-hover">Deep Chekcup</a>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <a href="/" className="link link-hover">Fluoride Treatment</a>
                    <a href="/" className="link link-hover">Cavity Filling</a>
                    <a href="/" className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </footer>
            <div className='footer-center'>
                <p>Copyright © 2022 - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
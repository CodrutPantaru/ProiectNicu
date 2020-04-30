import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <div className="footer" id="about">
            <div className="footer-container">
                 {/* <div className="contact-button">
                    Get in touch
                </div> */}
                <a href={`mailTo:${props.email}`} className="email-link">
                    <div className="email">{props.email}</div>
                </a>
                <div className="address">
                {props.address}
                </div>
            </div>
        </div>
    )
}

export default Footer;
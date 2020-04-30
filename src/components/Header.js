import React from 'react';
import './Header.scss';
import HamburgerMenu from './HamburgerMenu';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header(props) {

    return (
        <div className="header" id="header">
            <div className="backdrop"></div>
            <div className="wrapper">
                <div className="author">
                    <img src="https://assets.website-files.com/5bdc4010e035e2c083512543/5bdc4010e035e280e1512554_logo.svg" alt="" />
                    <div className="text">
                        {props.author}
                    </div>
                </div>
                <div className="title">
                    {props.title}
                </div>
                <div className="scroll-to-discover">
                    <div className="line"></div>
                    <div className="text-block">
                        Scroll to discover
                    </div>
                </div>
                <div className="projects-container-wrapper">
                    <div className="div-block">
                        <div className="div-block-2">

                        </div>
                        <AnchorLink href='#projects'>
                                Projects
                        </AnchorLink>
                    </div>
                </div>
                <HamburgerMenu email={props.email}></HamburgerMenu>
            </div>
        </div>
    )
}

export default Header
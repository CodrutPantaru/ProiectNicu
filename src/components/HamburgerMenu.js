import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Drawer from '@material-ui/core/Drawer';
import './HamburgerMenu.scss';
import CloseIcon from '@material-ui/icons/Close';

function HamburgerMenu(props) {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

const wrapper = React.createRef();
  return (
    <div>
      <div className="hamburger" onClick={() => {
        setDrawerIsOpen(true);
      }}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <Drawer ref={wrapper} anchor="right" open={drawerIsOpen} transitionDuration={1}>
        <div className="drawer">
          <div className="nav-bar">
            <div className="navbar-wrapper">
              <div className="navbar-logo">

              </div>
              <AnchorLink className="nav-link" href='#about'onClick={()=>{
                setDrawerIsOpen(false);
              }}>
                <div className="link-text">
                  About
                </div>
                <div className="link-image">
                  <img src='./assets/img/about.jpg' alt="" ></img>
                  </div>
              </AnchorLink>
              <AnchorLink className="nav-link" href='#projects' onClick={()=>{
                setDrawerIsOpen(false);
              }}>
                <div className="link-text">
                  Projects
                </div>
                <div className="link-image">
                  <img src='./assets/img/projects.jpg' alt="" ></img>
                  </div>
              </AnchorLink>
              <AnchorLink className="nav-link" href='#about'onClick={()=>{
                setDrawerIsOpen(false);
              }}>
                <div className="link-text">
                  Contact
                </div>
                <div className="link-image">
                  <img src='./assets/img/contact.jpg' alt="" ></img>
                  </div>
              </AnchorLink>
              <div className="separator"></div>
              <a className="email" href={`mailto:${props.email}`}>{props.email}</a>
              <div className="social-wrapper"></div>
              <div className="close-menu" onClick={() => {
                setDrawerIsOpen(false);
              }}>
                <CloseIcon className="close-icon"></CloseIcon> close menu
            </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default HamburgerMenu;
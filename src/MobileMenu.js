import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import 'react-slidedown/lib/slidedown.css'
 
class MobileMenu extends Component {
  render() {
    const showMobileMenu = this.props.showMobileMenu;
    const setMobileMenu = this.props.setMobileMenu;
    return (
      <React.Fragment>
        <nav className={`mobile-menu ${!showMobileMenu ? "closed" : ""}`}>
          <a href="#" onClick={setMobileMenu} className={showMobileMenu ? "active" : ""} id="menu-btn">
            <div aria-controls="menu">
              <div>
                <div className="menu-bar bar-one"></div>
                <div className="menu-bar bar-two"></div>
                <div className="menu-bar bar-three"></div>
              </div>
            </div>
          </a>
          <ul role="menu" aria-labelledby="menu-btn" className={showMobileMenu ? "active" : "inactive"}>
              <li><NavLink activeclassname="active" to="/" role="menuitem">About Me</NavLink></li>
              <li><NavLink activeclassname="active" to="/work" role="menuitem">Work</NavLink></li>
              <li><NavLink activeclassname="active" to="/contact" role="menuitem">Contact Me</NavLink></li>
              <li><NavLink activeclassname="active" to="/resume" role="menuitem">Resume</NavLink></li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default MobileMenu;
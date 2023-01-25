import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class DesktopMenu extends Component {
  render() {
    return (
        <nav className="desktop-menu">
            <ul role="menu" aria-labelledby="menu-btn">
                <li><NavLink activeclassname="active" to="/" role="menuitem">About Me</NavLink></li>
                <li><NavLink activeclassname="active" to="/work" role="menuitem">Work</NavLink></li>
                <li><NavLink activeclassname="active" to="/contact" role="menuitem">Contact Me</NavLink></li>
                <li><NavLink activeclassname="active" to="/resume" role="menuitem">Resume</NavLink></li>
            </ul>
        </nav>
    );
  }
}
 
export default DesktopMenu;
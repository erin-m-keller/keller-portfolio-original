import React, { useState, useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Work from "./Work";
import { 
    Link, 
    animateScroll as scroll 
  } from "react-scroll";
 
function Main () {
    const [showMobileMenu, setMobileMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    /* Close mobile menu when window is resized */
    if (!isMobile && showMobileMenu) {
        setMobileMenu(false)
        setIsMobile(false)
    }

    useEffect(() => {
        /* set isMobile true on page resize less than 600w */
        window.addEventListener('resize', () => {
            if (window.innerWidth < 600) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
        /* set isMobile true if window width is less than 600w on page load */
        if (windowSize.current[0] <= 600) {
            setIsMobile(true);
        }
    }, [isMobile,showMobileMenu]);
    return (
        <React.Fragment>
            {showMobileMenu != null && isMobile ? 
                <div className={showMobileMenu ? 'back-drop active' : 'back-drop closed'}></div>
            : 
                <div className="back-drop"></div>
            }
            <header className="header">
                <nav className="desktop-menu">
                    <ul role="menu" aria-labelledby="menu-btn">
                        <li><Link tabIndex="1" to="about-me" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">About Me</Link></li>
                        <li><Link tabIndex="1" to="work" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Work</Link></li>
                        <li><Link tabIndex="1" to="contact" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Contact Me</Link></li>
                        <li><Link tabIndex="1" to="resume" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Resume</Link></li>
                    </ul>
                </nav>
                <nav className={`mobile-menu ${!showMobileMenu ? "closed" : ""}`}>
                    <a href="#" onClick={() => setMobileMenu(!showMobileMenu)} className={showMobileMenu ? "active" : ""} id="menu-btn">
                        <div aria-controls="menu">
                        <div>
                            <div className="menu-bar bar-one"></div>
                            <div className="menu-bar bar-two"></div>
                            <div className="menu-bar bar-three"></div>
                        </div>
                        </div>
                    </a>
                    <ul role="menu" aria-labelledby="menu-btn" className={showMobileMenu ? "active" : "inactive"}>
                        <li><Link tabIndex="1" to="about-me" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">About Me</Link></li>
                        <li><Link tabIndex="1" to="work" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Work</Link></li>
                        <li><Link tabIndex="1" to="contact" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Contact Me</Link></li>
                        <li><Link tabIndex="1" to="resume" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Resume</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="content">
                <div className="hero">
                    <h1 className="header-title">Hi, I'm <span className="emphasis">Erin Keller</span>.</h1>
                </div>
                <section name="about-me">
                    <AboutMe />
                </section>
                <section name="work">
                    <Work />
                </section>
                <section name="contact">
                    <Contact />
                </section>
                <section name="resume">
                    <Resume />
                </section>
            </main>
            <footer className="footer">
                <div className="vertical-center">
                    <h3>&copy; 2023 Erin Keller</h3>
                    <a href="https://www.vecteezy.com/free-png/forest">Forest PNGs by Vecteezy</a>
                </div>
            </footer>
        </React.Fragment>
    );
}
 
export default Main;
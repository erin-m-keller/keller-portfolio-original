import React, { useState, useEffect, useRef } from "react";
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Resume from "./Resume";
import Work from "./Work";
 
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
        <HashRouter>
            <React.Fragment>
                {showMobileMenu != null && isMobile ? 
                    <div className={showMobileMenu ? 'back-drop active' : 'back-drop closed'}></div>
                : 
                    <div className="back-drop"></div>
                }
                <header className="header">
                    <DesktopMenu />
                    <MobileMenu showMobileMenu={showMobileMenu} setMobileMenu={() => setMobileMenu(!showMobileMenu)} isMobile={isMobile} />
                </header>
                <div className="hero">
                    <h1 className="header-title">Hi, I'm <span className="emphasis">Erin Keller</span>.</h1>
                </div>
                <main className="content">
                    <Routes>
                        <Route exact path="/" element={<AboutMe />}/>
                        <Route path="/work" element={<Work />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/resume" element={<Resume />}/>
                    </Routes>
                </main>
                <footer className="footer">
                    <h3>&copy; 2023 Erin Keller</h3>
                </footer>
            </React.Fragment>
        </HashRouter>
    );
}
 
export default Main;
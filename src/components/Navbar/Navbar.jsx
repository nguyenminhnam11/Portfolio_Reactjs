import React, { useState } from 'react';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from './MobileNav';

function Navbar() {
    const  [ openMenu, setOpenMenu ] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleScrollHome = () => {
        window.scrollTo(0 , 0)
    }

    const handleScrollAbout = () => {
        window.scrollTo(0 , 750)
    }
    const handleScrollSkills = () => {
        window.scrollTo(0 , 1390)
    }
    const handleScrollE = () => {
        window.scrollTo(0 , 2140)
    }
    const handleScrollContact = () => {
        window.scrollTo(0 , 2760)
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <a className="logo" onClick={handleScrollHome}>Portfolio</a>
                    <ul>
                        <li>
                            <a className="menu-item" onClick={handleScrollHome}>Home</a>
                        </li>

                        <li>
                            <a className="menu-item" onClick={handleScrollAbout}>About</a>
                        </li>

                        <li>
                            <a className="menu-item"  onClick={handleScrollSkills}>Skills</a>
                        </li>

                        <li>
                            <a className="menu-item"  onClick={handleScrollE}>Education</a>
                        </li>

                        <li>
                            <a className="menu-item"  onClick={handleScrollContact}>Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>Hire Me</button>
                    </ul>
                    <button class='menu-btn' onClick={(toggleMenu)}>
                        <MenuIcon>{openMenu ? "close" : "menu"}</MenuIcon>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
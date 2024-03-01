import React, { useState } from 'react';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from './MobileNav';
import resume_reactjs from '../../images/reactjs-resume.pdf'

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
    const handleScrollProject = () => {
        window.scrollTo(0 , 2140)
    }
    
    const handleScrollE = () => {
        window.scrollTo(0 , 2860)
    }

    const handleScrollContact = () => {
        window.scrollTo(0 , 3500)
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <p className="logo" onClick={handleScrollHome}>Portfolio</p>
                    <ul>
                        <li>
                            <p className="menu-item" onClick={handleScrollHome}>Home</p>
                        </li>

                        <li>
                            <p className="menu-item" onClick={handleScrollAbout}>About</p>
                        </li>

                        <li>
                            <p className="menu-item"  onClick={handleScrollSkills}>Skills</p>
                        </li>

                        <li>
                            <p className="menu-item"  onClick={handleScrollProject}>Projects</p>
                        </li>

                        <li>
                            <p className="menu-item"  onClick={handleScrollE}>Education</p>
                        </li>

                        <li>
                            <p className="menu-item"  onClick={handleScrollContact}>Contact Me</p>
                        </li>

                        <a style={{ textDecoration: 'none'}} href={resume_reactjs} download='Resume-ReactJS-PDF' className="resume-btn">Resume<i class='bx bx-download' style={{ fontSize: '20px', marginLeft: '6px'}}></i></a>
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
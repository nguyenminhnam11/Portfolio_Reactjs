import React from 'react';
import './MobileNav.css'
import resume from '../../../images/resume.pdf'

function MobileNav({ isOpen, toggleMenu}) {
    const handleScrollHome = () => {
        window.scrollTo(0 , 0)
    }

    const handleScrollAbout = () => {
        window.scrollTo(0 , 930)
    }

    const handleScrollSkills = () => {
        window.scrollTo(0 , 2000)
    }

    const handleScrollProjects = () => {
        window.scrollTo(0 , 3100)
    }
    
    const handleScrollEducate = () => {
        window.scrollTo(0 , 3830)
    }
    
    const handleScrollContact = () => {
        window.scrollTo(0 , 4900)
    }

    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ""}`}
                onClick={toggleMenu}
            >
                <div className='mobile-menu-container'>
                    <ul>
                        <li><p onClick={handleScrollHome} className="menu-item">Home</p></li>
                        <li><p onClick={handleScrollAbout} className="menu-item">About</p></li>
                        <li><p onClick={handleScrollSkills} className="menu-item">Skills</p></li>
                        <li><p onClick={handleScrollProjects} className="menu-item">Projects</p></li>
                        <li><p onClick={handleScrollEducate} className="menu-item">Education</p></li>
                        <li><p onClick={handleScrollContact} className="menu-item">Contact Me</p></li>

                        <a style={{ textDecoration: 'none'}} href={resume} download='Resume-PDF' className="resume-btn">Resume<i class='bx bx-download' style={{ fontSize: '20px', marginLeft: '6px'}}></i></a>
                    </ul>

                </div>
            </div>   
        </>
    );
}

export default MobileNav;
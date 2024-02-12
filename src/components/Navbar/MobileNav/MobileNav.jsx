import React from 'react';
import './MobileNav.css'
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
    const handleScrollEducate = () => {
        window.scrollTo(0 , 3150)
    }
    const handleScrollContact = () => {
        window.scrollTo(0 , 4250)
    }

    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ""}`}
                onClick={toggleMenu}
            >
                <div className='mobile-menu-container'>
                    <ul>
                        <li><a onClick={handleScrollHome} className="menu-item">Home</a></li>
                        <li><a onClick={handleScrollAbout} className="menu-item">About</a></li>
                        <li><a onClick={handleScrollSkills} className="menu-item">Skills</a></li>
                        <li><a onClick={handleScrollEducate} className="menu-item">Work Experience</a></li>
                        <li><a onClick={handleScrollContact} className="menu-item">Contact Me</a></li>

                        <button className="contact-btn" onClick={() => {}}>Hire Me</button>
                    </ul>

                </div>
            </div>   
        </>
    );
}

export default MobileNav;
import React from 'react';
import './MobileNav.scss'
import resume_reactjs from '../../../images/frontEnd_CV_en.pdf'
import { useTranslation } from 'react-i18next';

function MobileNav({ isOpen, toggleMenu}) {
    const {t} = useTranslation()

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
                        <li><p onClick={handleScrollHome} className="menu-item">{t('navbar-1')}</p></li>
                        <li><p onClick={handleScrollAbout} className="menu-item">{t('navbar-2')}</p></li>
                        <li><p onClick={handleScrollSkills} className="menu-item">{t('navbar-3')}</p></li>
                        <li><p onClick={handleScrollProjects} className="menu-item">{t('navbar-4')}</p></li>
                        <li><p onClick={handleScrollEducate} className="menu-item">{t('navbar-5')}</p></li>
                        <li><p onClick={handleScrollContact} className="menu-item">{t('navbar-6')}</p></li>

                        <a style={{ textDecoration: 'none'}} href={resume_reactjs} download='Resume-ReactJS-PDF' className="resume-btn">Resume<i class='bx bx-download' style={{ fontSize: '20px', marginLeft: '6px'}}></i></a>
                    </ul>

                </div>
            </div>   
        </>
    );
}

export default MobileNav;
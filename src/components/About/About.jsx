import React from 'react';
import './About.css'
import AboutImg from '../../images/z5023739927672_757efb7d985469d571c96d3cb58a268a.jpg'
import { useTranslation } from 'react-i18next';
function About(props) {
    const {t} = useTranslation()

    return (
        <div className='container-about'>
            <div className='about-img'>
                <img src={AboutImg} alt="logo" />
                <div className='icons'>
                    <i class='bx bxl-html5' style={{ color:'#EA572C', fontSize: '50px' }}></i>
                    <i class='bx bxl-css3' style={{ color:'#2C54E4', fontSize: '40px' }} ></i>
                    <i class='bx bxl-javascript' style={{ color:'#FFDA41' }} ></i>
                    <i class='bx bxl-react' style={{ color:'#00eeff', fontSize: '70px'}} ></i>
                    <i class='bx bxl-java' style={{ color:'#E65851', fontSize: '50px' }} ></i>
                    <i class='bx bxl-redux' style={{ color:'#ba8fff', fontSize: '50px' }} ></i>
                    <i class='bx bxl-github' style={{ color:'#331c5a', fontSize: '40px' }}  ></i>
                </div>
            </div>
            <div className='content'>
                <h1>{t("about-title")} <span>{t("about-title-span")}</span></h1>
                <h3>Frontend developer - <span style={{ color: '#0ef' }}>Reactjs</span></h3>
                <p>{t("about-text")}</p>
            </div>
        </div>
    );
}

export default About;
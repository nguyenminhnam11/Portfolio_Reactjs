import React from 'react';
import './About.css'
import AboutImg from '../../images/z5023739927672_757efb7d985469d571c96d3cb58a268a.jpg'
function About(props) {
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
                <h1>About <span>Me</span></h1>
                <h3>Frontend developer - <span style={{ color: '#0ef' }}>Reactjs</span></h3>
                <p>Hello there! My name is Nguyen Minh Nam, and I am a passionate and motivated React.js Developer. 
                As a recent graduate, I am entering the dynamic world of web development with a fresh perspective 
                and a hunger for learning. My journey with React.js has been an exciting exploration of crafting 
                interactive and efficient user interfaces. I am eager to contribute and collaborate on innovative 
                projects and am committed to continuously enhancing my skills and staying abreast of the latest industry trends. 
                </p>
            </div>
        </div>
    );
}

export default About;
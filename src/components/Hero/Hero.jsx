import React from 'react';
import './Hero.scss'

import ImgMe from '../../images/Screenshot 2024-01-03 001903.png'

import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';

function Hero(props) {
    const {t} = useTranslation()

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer','React Developer','Fullstack Developer'],
            typeSpeed:100,
            backSpeed:40,
            backDelay:1000,
            loop:true
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>{t("hero-title")}</h2>
                <span ref={el} />
                <p>{t("hero-text")}
                </p>
                <div class="home-sci">
                    <a href="https://www.facebook.com/nmnam11react" ><i class='bx bxl-facebook-circle'></i></a>
                    <a href="https://www.instagram.com/binn_11.11/" ><i class='bx bxl-instagram-alt'></i></a>
                    <a href="https://www.linkedin.com/in/namnguyen2003/" ><i class='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/nguyenminhnam11" ><i class='bx bxl-github'></i></a>
                </div>
            </div>
            <div className='hero-img'>
                <img src={ImgMe} alt="me"/>
            </div>
        </section>
    );
}

export default Hero;
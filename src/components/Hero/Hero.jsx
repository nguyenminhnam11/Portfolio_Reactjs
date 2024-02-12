import React from 'react';
import './Hero.css'

import ImgMe from '../../images/Screenshot 2024-01-03 001903.png'

import Typed from 'typed.js';

function Hero(props) {
        const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer','ReactJs Developer','Web Developer'],
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
                <h2>Hello, I'm Nguyen Minh Nam</h2>
                <span ref={el} />
                <p>Welcome to my portfolio! I'm a Front-end Developer with a specialization in React.js. 
                My commitment lies in crafting user-friendly interfaces to create exceptional websites. 
                Feel free to explore more about me on my linked social media profiles.
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
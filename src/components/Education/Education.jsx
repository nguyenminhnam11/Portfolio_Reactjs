import React from 'react';
import './Education.css'

import logoFpt from '../../images/logo-fpt-polytechnic.png'
import logoVti from '../../images/Logo-white.png'

function Education(props) {
    return (
        <section className='Wrapper'>
            <h1><span>Education</span></h1>

            <div className='container-ex'>

                <div className='item'>
                    <h3>FPT Polytechic Da Nang</h3>
                    <div className='paragraph'>
                        <ul>
                            <h4>Java (Spring Boot)</h4>
                            <li>Learning basic web development with HTML, CSS and Javascript</li>
                            <li>Learning Java programming from basic to advanced</li>
                            <li>Learning database and administration with SQL Server</li>
                            <li>Project Management with Agile Methodology</li>
                            <li>Learning English language</li>
                        </ul>
                        <img src={logoFpt} alt="logo" />
                    </div>
                </div>

                <div className='item'>
                    <h3>VTI ACADEMY</h3>
                    <div className='paragraph'>
                        <ul>
                            <h4>Frontend Reactjs</h4>
                            <li>Learning web development with HTML, CSS and Javascript basic to advanced</li>
                            <li>Learning to use Bootstrap, Ant Design, Sass, and Styled-components libraries</li>
                            <li>Learning use Reactjs framework from basic to advanced</li>
                            <li>Learning use Redux</li>
                            <li>Deploy project by vercel and use github</li>
                        </ul>
                        <img src={logoVti} alt="logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
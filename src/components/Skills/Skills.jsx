import React from 'react';
import './Skills.css'

function Skills(props) {
    return (
        <section className='skills'>
            <h1>My <span>Skills</span></h1>
            <div className='container'>

                <div className='skills-item'>
                    <h3>Technical skill</h3>

                    <div className='progress-bar'>
                        <div>
                            <i class='bx bxl-html5' style={{ color:'#EA572C' }}></i><span>HTML</span>
                            <div className='progress html'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>90%</span>
                            </div>
                        </div>
                        <div>
                            <i class='bx bxl-css3' style={{ color:'#2C54E4' }} ></i><span>CSS</span>
                            <div className='progress css'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>80%</span>
                            </div>
                        </div>
                        <div>
                            <i class='bx bxl-javascript' style={{ color:'#FFDA41' }} ></i><span>Javascript</span>
                            <div className='progress js'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>60%</span>
                            </div>
                        </div>
                        <div>
                            <i class='bx bxl-react' style={{ color:'#00eeff'}} ></i><span>REACT</span>
                            <div className='progress react'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>70%</span>
                            </div>
                        </div>
                        <div>
                            <i class='bx bxl-java' style={{ color:'#E65851' }} ></i><span>JAVA</span>
                            <div className='progress java'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>60%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='skills-item'>
                    <h3>Professional Skills</h3>

                    <div className='progress-bar second'>
                        <div>
                            <span className='title-persional'>Creativity</span>
                            <div className='progress creativity'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>80%</span>
                            </div>
                        </div>
                        <div>
                            <span className='title-persional'>Comunication</span>
                            <div className='progress comunication'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>70%</span>
                            </div>
                        </div>
                        <div>
                            <span className='title-persional'>Problem solving</span>
                            <div className='progress problem'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>80%</span>
                            </div>
                        </div>
                        <div>
                            <span className='title-persional'>TeamWork</span>
                            <div className='progress teamWork'>
                            </div>
                            <div className='ruler'>
                                <span className='unit'>90%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;
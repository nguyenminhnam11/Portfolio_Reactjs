import React from 'react';
import '../../App.scss'

import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Education from '../../components/Education';
import Contact from '../../components/Contact';
import Projects from '../../components/Projects';
import { ToastContainer } from 'react-toastify';
import Footer from '../../components/Footer';

function Portfolio(props) {
    return (
        <div>
        <Navbar />
        <div className="bg-hero">
          <div className="container">
            <Hero />
          </div>
        </div>
        <div className="container-Advanced">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        </div>
    );
}

export default Portfolio;
import React from "react";
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
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
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

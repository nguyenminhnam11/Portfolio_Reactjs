import React from "react";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import { ToastContainer } from "react-toastify";

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

export default App;

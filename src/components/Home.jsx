// components/Home.jsx
import React from 'react';
import './Section.css';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import HomeImg from '../assets/HomeImg.jpeg';

function Home() {
  return (
    <div className="home">
      <section id="home" className="intro">
        <div className="intro-text">
          <h1>AI-Driven Crop Disease Prediction</h1>
          <p>
            Our AI-powered platform helps farmers detect crop diseases early and manage them effectively. 
            Using state-of-the-art machine learning algorithms, we provide actionable insights to protect crops and increase yields.
          </p>
        </div>
        <div className="intro-image">
          <img src={HomeImg} alt="Crop Disease Prediction" />
        </div>
      </section>

      <Features />
      
      <div className="info-sections">
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default Home;

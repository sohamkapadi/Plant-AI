// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CaseStudies from './components/CaseStudies';
import Resources from './components/Resources';
import ImageAnalysis from './components/ImageAnalysis';
import RealTimeDataInsights from './components/RealTimeDataInsights';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/image-analysis" element={<ImageAnalysis />} />
          <Route path="/real-time-data-insights" element={<RealTimeDataInsights />} />
          {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/features" element={<KeyFeatures />} /> */}
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
    </div>
  );
}

export default App;

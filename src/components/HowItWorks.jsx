// src/components/HowItWorks.jsx
import React, { useState } from 'react';
import './HowItWorks.css'; // Import the CSS file


function HowItWorks() {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your question has been submitted: ${question}`);
    setQuestion('');
  };

  return (
    <div className="how-it-works-container">
      <h2>How It Works</h2>
      <p>Our system uses advanced AI to analyze crop images and provide insights. Here's how:</p>
      
      <div className="steps-grid">
        <div className="step-card">
          <h3>Step 1</h3>
          <p>Upload or capture crop images.</p>
        </div>
        <div className="step-card">
          <h3>Step 2</h3>
          <p>AI analyzes for diseases.</p>
        </div>
        <div className="step-card">
          <h3>Step 3</h3>
          <p>Receive predictions and recommendations.</p>
        </div>
      </div>

      <div className="video-section">
        <h3>Watch the Process in Action</h3>
        <div className="video-container">
          <video width="600" controls>
            <source src="/HowItWorksVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="question-form">
        <h3>Ask a Question</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={question}
            onChange={handleQuestionChange}
            placeholder="Have any questions? Feel free to ask..."
            rows="4"
            cols="50"
            className="question-textarea"
          />
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HowItWorks;

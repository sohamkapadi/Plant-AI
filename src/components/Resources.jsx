// components/Resources.jsx
import React, { useState } from 'react';
import './Resources.css';
import paperImage from '/crop.jpg'; // Sample image for research papers
import { FaDownload, FaFileAlt, FaMobileAlt, FaVideo, FaFilePdf, FaQuestionCircle } from 'react-icons/fa'; // Import necessary icons
import { GiBookshelf } from 'react-icons/gi'; // For categories icon

function Resources() {
  // State to manage the FAQ dropdown
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle the FAQ dropdown
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Function to open a guide in a popup window
  const openGuideInPopup = (url) => {
    window.open(url, 'Guide', 'width=800,height=600'); // Adjust popup window size as needed
  };

  // Function to open a video in a popup window
  const playVideoInPopup = (url) => {
    window.open(url, 'Video Player', 'width=800,height=600'); // Customize popup window size
  };

  return (
    <div className="resources">
      <section className="intro">
        <h1>Resources</h1>
        <p>Find helpful guides, tutorials, research papers, videos, and tools to manage your crops using AI technology.</p>
      </section>

      <section className="resource-categories">
        {/* Guides & Tutorials Section */}
        <div className="category">
          <h2><GiBookshelf /> Guides & Tutorials</h2> {/* Category icon */}
          <div className="card-container">
            <div className="card">
              <h3>Getting Started with PlantAi</h3>
              <button onClick={() => openGuideInPopup('/HMI_EXP4_52.pdf')} className="card-btn">
                <FaFilePdf /> Read Guide {/* PDF icon */}
              </button>
            </div>
            <div className="card">
              <h3>Diagnosing Crop Diseases with AI</h3>
              <button onClick={() => openGuideInPopup('/HMI_EXP4_52.pdf')} className="card-btn">
                <FaFilePdf /> Read Guide {/* PDF icon */}
              </button>
            </div>
            <div className="card">
              <h3>Best Practices for Managing Crop Health</h3>
              <button onClick={() => openGuideInPopup('/HMI_EXP4_52.pdf')} className="card-btn">
                <FaFilePdf /> Read Guide {/* PDF icon */}
              </button>
            </div>
          </div>
        </div>

        {/* Research Papers Section */}
        <div className="category">
          <h2><GiBookshelf /> Research Papers</h2> {/* Category icon */}
          <div className="card-container">
            <div className="card">
              <img src={paperImage} alt="AI in Agriculture" />
              <h3>AI in Agriculture: Future Trends</h3>
              <a href="/HMI_EXP4_52.pdf" className="card-btn" download>
                <FaDownload /> Download {/* Download icon */}
              </a>
            </div>

            <div className="card">
              <img src={paperImage} alt="AI on Crop Yields" />
              <h3>The Impact of AI on Crop Yields</h3>
              <a href="/HMI_EXP4_52.pdf" className="card-btn" download>
                <FaDownload /> Download {/* Download icon */}
              </a>
            </div>

            <div className="card">
              <img src={paperImage} alt="Disease Detection in Wheat" />
              <h3>AI Disease Detection in Wheat</h3>
              <a href="/HMI_EXP4_52.pdf" className="card-btn" download>
                <FaDownload /> Download {/* Download icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Videos & Webinars Section */}
        <div className="category">
          <h2><GiBookshelf /> Videos & Webinars</h2> {/* Category icon */}
          <div className="card-container">
            <div className="card">
              <h3>How AI is Revolutionizing Farming</h3>
              <button onClick={() => playVideoInPopup('https://youtu.be/90SY5wAZdbc?si=ZJ7X2RukNmUwVmS_')} className="card-btn">
                <FaVideo /> Watch Video {/* Video icon */}
              </button>
            </div>
            <div className="card">
              <h3>AI for Early Disease Detection in Crops</h3>
              <button onClick={() => playVideoInPopup('https://youtu.be/90SY5wAZdbc?si=ZJ7X2RukNmUwVmS_')} className="card-btn">
                <FaVideo /> Watch Video {/* Video icon */}
              </button>
            </div>
          </div>
        </div>

        {/* Tools & Downloads Section */}
        <div className="category">
          <h2><GiBookshelf /> Tools & Downloads</h2> {/* Category icon */}
          <div className="card-container">
            <div className="card">
              <FaFileAlt size={50} />
              <h3>Plant Disease Diagnosis Checklist</h3>
              <a href="#download-tool1" className="card-btn">
                <FaDownload /> Download {/* Download icon */}
              </a>
            </div>
            <div className="card">
              <FaMobileAlt size={50} />
              <h3>Farm and Inventory Management App</h3>
              <a href="#download-tool2" className="card-btn">
                <FaDownload /> Download {/* Download icon */}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Cards */}
      <section className="faq">
        <h2><FaQuestionCircle /> Frequently Asked Questions</h2> {/* FAQ icon */}
        <div className="card-container">
          <div className="card faq-card" onClick={() => toggleFaq(1)}>
            <h3>How does AI help with crop disease management?</h3>
            {openFaq === 1 && <p>AI can analyze large datasets and detect patterns in plant health to provide early warnings and suggestions for disease prevention.</p>}
          </div>
          <div className="card faq-card" onClick={() => toggleFaq(2)}>
            <h3>Is the platform suitable for small farmers?</h3>
            {openFaq === 2 && <p>Yes, the platform is designed for all types of farmers, from small to large-scale farms.</p>}
          </div>
          <div className="card faq-card" onClick={() => toggleFaq(3)}>
            <h3>How can I download the PlantAi mobile app?</h3>
            {openFaq === 3 && <p>You can download the app from the Google Play Store or Apple App Store using the links provided in the Tools & Downloads section.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpeg'; // Ensure the correct path for the logo
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Modal from 'react-modal';
import { FaHome, FaStar, FaFileAlt, FaQuestionCircle, FaFolderOpen, FaEnvelope, FaImage, FaChartLine, FaCogs, FaLeaf } from 'react-icons/fa'; // Import icons

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // State for modal control
  const [isImageAnalysisModalOpen, setIsImageAnalysisModalOpen] = useState(false);
  const [isDataInsightsModalOpen, setIsDataInsightsModalOpen] = useState(false);
  const [isPredictiveAnalyticsModalOpen, setIsPredictiveAnalyticsModalOpen] = useState(false);
  const [isTreatmentRecommendationsModalOpen, setIsTreatmentRecommendationsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  // Use location from react-router-dom
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm); // For testing; replace with your logic
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const contact = event.target.contact.value;
    console.log("Email:", email, "Contact Number:", contact); // For testing; replace with your logic
    setIsContactModalOpen(false);
  };

  const handleGetStartedSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const contact = event.target.contact.value;
    console.log("Get Started - Name:", name, "Email:", email, "Contact Number:", contact); // For testing; replace with your logic
    setIsGetStartedModalOpen(false);
  };

  // Modal styles
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '10px',
      width: '400px', // Set a fixed width for the modal
    },
  };

  // Close all modals on route change
  useEffect(() => {
    setIsImageAnalysisModalOpen(false);
    setIsDataInsightsModalOpen(false);
    setIsPredictiveAnalyticsModalOpen(false);
    setIsTreatmentRecommendationsModalOpen(false);
    setIsContactModalOpen(false);
    setIsGetStartedModalOpen(false);
  }, [location]); // Run this effect when location changes

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="G6 Logo" className="logo-image" />
        PlantAi
      </div>
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="#features" className="dropdown-toggle"><FaStar /> Features</a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <button onClick={() => setIsImageAnalysisModalOpen(true)}>
                  <FaImage /> Image Analysis
                </button>
              </li>
              <li>
                <button onClick={() => setIsDataInsightsModalOpen(true)}>
                  <FaChartLine /> Real-Time Data Insights
                </button>
              </li>
              <li>
                <button onClick={() => setIsPredictiveAnalyticsModalOpen(true)}>
                  <FaCogs /> Predictive Analytics
                </button>
              </li>
              <li>
                <button onClick={() => setIsTreatmentRecommendationsModalOpen(true)}>
                  <FaLeaf /> Treatment Recommendations
                </button>
              </li>
            </ul>
          )}
        </li>
        <li><Link to="/case-studies"><FaFileAlt /> Case Studies</Link></li>
        <li><Link to="/how-it-works"><FaQuestionCircle /> How It Works</Link></li>
        <li><Link to="/resources"><FaFolderOpen /> Resources</Link></li>
        <li><a href="#" onClick={() => setIsContactModalOpen(true)}><FaEnvelope /> Contact Us</a></li>
      </ul>
      
      {/* Search Bar */}
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearchChange} 
          placeholder="Search..." 
          className="search-input" 
          aria-label="Search"
        />
        <button type="submit" className="search-button" aria-label="Search Button">🔍</button>
      </form>
      
      <button className="cta" onClick={() => setIsGetStartedModalOpen(true)} aria-label="Get Started">Get Started</button>

      {/* Modal for Get Started */}
      <Modal
        isOpen={isGetStartedModalOpen}
        onRequestClose={() => setIsGetStartedModalOpen(false)}
        style={modalStyles}
        contentLabel="Get Started"
      >
        <h2>Get Started with PlantAi</h2>
        <form onSubmit={handleGetStartedSubmit} className="get-started-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" required placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input type="tel" name="contact" required placeholder="Enter your contact number" />
          </div>
          <button type="submit">Submit</button>
        </form>
        <span className="modal-close" onClick={() => setIsGetStartedModalOpen(false)}>&times;</span>
      </Modal>

      {/* Modal for Image Analysis */}
      <Modal
        isOpen={isImageAnalysisModalOpen}
        onRequestClose={() => setIsImageAnalysisModalOpen(false)}
        style={modalStyles}
        contentLabel="Image Analysis Details"
      >
        <span className="modal-close" onClick={() => setIsImageAnalysisModalOpen(false)}>&times;</span>
        <h2>Image Analysis</h2>
        <p>Our AI-based image analysis system helps identify crop diseases and assess plant health by analyzing images.</p>
        <Link to="/image-analysis">
          <button className="more-info">More Info</button>
        </Link>
      </Modal>

      {/* Modal for Real-Time Data Insights */}
      <Modal
        isOpen={isDataInsightsModalOpen}
        onRequestClose={() => setIsDataInsightsModalOpen(false)}
        style={modalStyles}
        contentLabel="Real-Time Data Insights"
      >
        <span className="modal-close" onClick={() => setIsDataInsightsModalOpen(false)}>&times;</span>
        <h2>Real-Time Data Insights</h2>
        <p>Get real-time insights into plant health, soil quality, and environmental conditions to optimize farming.</p>
        <button className="more-info">More Info</button>
      </Modal>

      {/* Modal for Predictive Analytics */}
      <Modal
        isOpen={isPredictiveAnalyticsModalOpen}
        onRequestClose={() => setIsPredictiveAnalyticsModalOpen(false)}
        style={modalStyles}
        contentLabel="Predictive Analytics"
      >
        <span className="modal-close" onClick={() => setIsPredictiveAnalyticsModalOpen(false)}>&times;</span>
        <h2>Predictive Analytics</h2>
        <p>Leverage AI-driven predictive analytics to forecast potential crop issues and recommend future actions.</p>
        <button className="more-info">More Info</button>
      </Modal>

      {/* Modal for Treatment Recommendations */}
      <Modal
        isOpen={isTreatmentRecommendationsModalOpen}
        onRequestClose={() => setIsTreatmentRecommendationsModalOpen(false)}
        style={modalStyles}
        contentLabel="Treatment Recommendations"
      >
        <span className="modal-close" onClick={() => setIsTreatmentRecommendationsModalOpen(false)}>&times;</span>
        <h2>Treatment Recommendations</h2>
        <p>Receive tailored treatment recommendations based on crop analysis and identified issues.</p>
        <button className="more-info">More Info</button>
      </Modal>

      {/* Modal for Contact */}
      <Modal
        isOpen={isContactModalOpen}
        onRequestClose={() => setIsContactModalOpen(false)}
        style={modalStyles}
        contentLabel="Contact Us"
      >
        <span className="modal-close" onClick={() => setIsContactModalOpen(false)}>&times;</span>
        <h2>Contact Us</h2>
        <form onSubmit={handleContactSubmit} className="contact-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input type="tel" name="contact" required placeholder="Enter your contact number" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </nav>
  );
}

export default Navbar;

// components/CaseStudies.jsx
import React, { useState } from 'react';
import './CaseStudies.css'; // Import your CSS file for styling

const caseStudiesData = [
  {
    id: 1,
    title: "Increased Yield in Tomato Farming",
    description: "This case study explores how advanced techniques led to a significant increase in tomato yields through optimized irrigation and pest management.",
    image: "/crop.jpg", // Replace with the actual image path
    pdf: "/HMI_EXP4_52.pdf", // Replace with the actual PDF path
  },
  {
    id: 2,
    title: "Efficient Water Management in Rice Cultivation",
    description: "Learn about innovative water management practices that reduced water usage while improving rice crop yields.",
    image: "/crop.jpg", // Replace with the actual image path
    pdf: "/HMI_EXP4_52.pdf", // Replace with the actual PDF path
  },
  {
    id: 3,
    title: "Disease Prediction in Wheat Crops",
    description: "Discover how predictive analytics can be used to forecast and mitigate diseases in wheat crops, ensuring better yields.",
    image: "/crop.jpg", // Replace with the actual image path
    pdf: "/HMI_EXP4_52.pdf", // Replace with the actual PDF path
  },
];

const CaseStudies = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    pdf: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isConfirmed, setIsConfirmed] = useState(false); // Confirmation checkbox state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setIsConfirmed(e.target.checked); // Update checkbox state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the checkbox is checked
    if (!isConfirmed) {
      alert('Please confirm that you want to submit the case study.'); // Alert if not checked
      return; // Prevent submission
    }
    // Handle case study submission logic here (e.g., save to database)
    console.log('Submitted Case Study:', formData);
    alert('Case study submitted successfully!'); // Confirmation box
    // Reset form after submission
    setFormData({
      title: '',
      description: '',
      image: '',
      pdf: '',
    });
    setIsConfirmed(false); // Reset checkbox state
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="case-studies-container">
      <h1>Case Studies</h1>
      <div className="case-studies-list">
        {caseStudiesData.map((caseStudy) => (
          <div key={caseStudy.id} className="case-study-card">
            <h2>{caseStudy.title}</h2>
            <img src={caseStudy.image} alt={caseStudy.title} className="case-study-image" />
            <p>{caseStudy.description}</p>
            <a href={caseStudy.pdf} download className="download-button">Download PDF</a>
          </div>
        ))}
      </div>

      {/* Button to open modal */}
      <button onClick={() => setIsModalOpen(true)} className="add-case-study-button">Add Case Study</button>

      {/* Modal for submitting case study */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Submit Your Own Case Study</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Image URL:</label>
                <input type="text" name="image" value={formData.image} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>PDF URL:</label>
                <input type="text" name="pdf" value={formData.pdf} onChange={handleInputChange} required />
              </div>
              {/* Confirmation Checkbox */}
              <div className="form-group">
                <input 
                  type="checkbox" 
                  id="confirm" 
                  checked={isConfirmed} 
                  onChange={handleCheckboxChange} 
                  required 
                />
                <label htmlFor="confirm">I confirm that I want to submit this case study.</label>
              </div>
              <div className="modal-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;

import React from 'react';
import { FaLeaf, FaTemperatureHigh, FaWater, FaCheckCircle } from 'react-icons/fa'; // Importing icons
import './ImageAnalysis.css'; // Import the updated CSS
import cropHealth from "/crop_health.png";
import healthStatus from "/crop_health2.png";

const ImageAnalysis = () => {
    return (
        <div className="image-analysis-container">
            {/* Left Section: Image Upload */}
            <div className="image-upload-section">
                <h1 className="image-upload-title">Image Analysis</h1>
                <p className="image-upload-intro">
                    Upload an image of your crop to get instant feedback on its health and any issues detected.
                </p>

                {/* Steps as Cards */}
                <div className="steps-container">
                    <div className="steps-card">
                        <h2>Step 1</h2>
                        <p>Click on the upload area or the button below.</p>
                    </div>
                    <div className="steps-card">
                        <h2>Step 2</h2>
                        <p>Select an image of your crop.</p>
                    </div>
                    <div className="steps-card">
                        <h2>Step 3</h2>
                        <p>Wait for analysis results to appear on the right.</p>
                    </div>
                </div>

                <div className="placeholder-image">
                    <input type="file" className="upload-input" />
                    <span>Drag and drop an image here or click to select</span>
                </div>

                <button className="upload-button">
                    <span className="upload-icon">📷</span> Upload Image
                </button>
            </div>

            {/* Right Section: Feedback and Statistics */}
            <div className="feedback-section">
                <h2>Feedback and Statistics</h2>
                <p>Results and insights will be displayed here after image analysis.</p>

                {/* KPI Section */}
                <div className="kpi-container">
                    <div className="kpi-card">
                        <FaLeaf size={30} />
                        <div className="kpi-value">Healthy Leaves: 80%</div>
                    </div>
                    <div className="kpi-card">
                        <FaTemperatureHigh size={30} />
                        <div className="kpi-value">Optimal Temperature: 24°C</div>
                    </div>
                    <div className="kpi-card">
                        <FaWater size={30} />
                        <div className="kpi-value">Water Levels: Adequate</div>
                    </div>
                </div>

                {/* Visualization Section */}
                <div className="charts-container">
                    <div className="chart-card">
                        <h3>Crop Health Over Time</h3>
                        <div className="chart">
                            <img src={cropHealth} alt="Crop Health Over Time" />
                        </div>
                    </div>
                    <div className="chart-card">
                        <h3>Health Status</h3>
                        <div className="chart">
                            <img src={healthStatus} alt="Crop Health Over Time" />
                        </div>
                    </div>
                </div>

                {/* Recommendations Section */}
                <div className="recommendations-card">
                    <h3>Recommendations</h3>
                    <p>Based on the analysis, consider the following actions:</p>
                    <ul>
                        <li><FaCheckCircle /> Water the crops regularly.</li>
                        <li><FaCheckCircle /> Monitor temperature levels.</li>
                        <li><FaCheckCircle /> Inspect for pests regularly.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ImageAnalysis;

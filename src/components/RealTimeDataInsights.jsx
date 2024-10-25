import React from 'react';
import { FaTint, FaLeaf, FaSun, FaWind, FaChartLine, FaHeartbeat, FaCloud, FaFlask, FaCheckCircle } from 'react-icons/fa';
import { Doughnut, Line, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, PointElement, RadialLinearScale, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import './RealTimeDataInsights.css';

// Register the required components with Chart.js
ChartJS.register(ArcElement, LineElement, PointElement, RadialLinearScale, CategoryScale, LinearScale, Tooltip, Legend);

const RealTimeDataInsights = () => {
    const plantHealthData = {
        labels: ['Health', ''],
        datasets: [{
            data: [85, 15],
            backgroundColor: ['#00796b', '#adc8cc'],
            borderWidth: 1,
        }]
    };

    const growthRateData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Growth Rate',
            data: [2, 4, 6, 5, 8, 7],
            fill: false,
            borderColor: '#009688',
            backgroundColor: '#009688',
            tension: 0.4,
        }]
    };

    const nutrientLevelsData = {
        labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium', 'Magnesium'],
        datasets: [{
            label: 'Nutrient Levels',
            data: [8, 6, 7, 5, 9],
            backgroundColor: 'rgba(0, 150, 136, 0.5)',
            borderColor: '#00796b',
        }]
    };

    const temperatureData = {
        labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM'],
        datasets: [{
            label: 'Temperature (°C)',
            data: [18, 20, 23, 22, 19, 16],
            fill: false,
            borderColor: '#009688',
            backgroundColor: '#009688',
            tension: 0.4,
        }]
    };

    const windData = {
        labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM'],
        datasets: [{
            label: 'Wind Speed (km/h)',
            data: [5, 12, 8, 15, 10, 7],
            fill: false,
            borderColor: '#00796b',
            backgroundColor: '#00796b',
            tension: 0.4,
        }]
    };

    const humidityData = {
        labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM'],
        datasets: [{
            label: 'Humidity (%)',
            data: [60, 65, 70, 55, 50, 45],
            fill: false,
            borderColor: '#004d40',
            backgroundColor: '#004d40',
            tension: 0.4,
        }]
    };

    // Latest growth rate value for display
    const latestGrowthRate = 8;

    return (
        <div className="data-insights-container">
            <h1 className="page-title">Real-Time Data Insights</h1>

            {/* Plant Health Section */}
            <div className="section">
                <h2>Plant Health</h2>
                <div className="section-content">
                    <div className="gauge-card">
                        <h3><FaLeaf size={40} /> Overall Health</h3>
                        <div className="gauge-container">
                            <Doughnut data={plantHealthData} options={{ cutout: '80%', maintainAspectRatio: true, responsive: true }} />
                            <div className="gauge-value">
                                <span>85%</span> {/* Display the value here */}
                            </div>
                        </div>
                        <p>Overall Health</p>
                    </div>
                    <div className="heatmap-card">
                        <h3><FaHeartbeat size={40} /> Health Variability</h3>
                        <div className="heatmap">
                            {/* Placeholder Heatmap */}
                            <div className="heatmap-grid">
                                {Array.from({ length: 16 }).map((_, idx) => (
                                    <div key={idx} className={`heatmap-cell cell-${idx % 4}`}></div>
                                ))}
                            </div>
                        </div>
                        <p>This chart displays the variability of plant health across different sections. A higher variability may indicate inconsistent growth conditions that could be addressed for optimal health.</p>
                        <p></p>
                        <div className="status-indicator">
                            <FaCheckCircle size={60} color="green" />
                            <span style={{fontSize:'50px', fontWeight:'bold'}}>  Good</span>
                        </div>
                    </div>
                    <div className="line-chart-card">
                        <h3><FaChartLine size={40} /> Growth Rate</h3>
                        <Line data={growthRateData} />
                        <p>This line chart illustrates the growth rate of crops over the past six months, highlighting trends and changes in growth patterns. Regular monitoring is essential for ensuring robust crop health.</p>
                        <p style={{fontSize:'30px'}}> Latest growth rate: <strong>{latestGrowthRate}</strong>%</p>
                    </div>
                </div>
            </div>

            {/* Soil Quality Section */}
            <div className="section">
                <h2>Soil Quality</h2>
                <div className="section-content">
                    <div className="gauge-card">
                        <h3><FaTint size={40} /> Moisture Levels </h3>
                        <div className="gauge-container">
                            <Doughnut data={{
                                labels: ['Moisture', 'Dry'],
                                datasets: [{ data: [60, 40], backgroundColor: ['#00796b', '#adc8cc'] }]
                            }} options={{ cutout: '80%' }} />
                            <div className="gauge-value">
                                <span>60%</span> {/* Display the value here */}
                            </div>
                        </div>
                    </div>
                    <div className="radar-chart-card">
                        <h3><FaChartLine size={40} /> Nutrient Levels</h3>
                        <Radar data={nutrientLevelsData} options={{ scales: { r: { beginAtZero: true } } }} />
                    </div>
                    <div className="gauge-card">
                        <h3><FaFlask size={40} /> Soil pH </h3>
                        <div className="gauge-container">
                            <Doughnut data={{
                                labels: ['Soil pH'],
                                datasets: [{ data: [7.2, 2.8], backgroundColor: ['#ffab00', '#adc8cc'] }]
                            }} options={{ cutout: '80%' }} />
                            <div className="gauge-value">
                                <span>7.2</span> {/* Display the value here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Environmental Conditions Section */}
            <div className="section">
                <h2>Environmental Conditions</h2>
                <div className="section-content">
                    <div className="gauge-card">
                        <h3><FaSun size={40} /> Temperature</h3>
                        <Line data={temperatureData} options={{ scales: { y: { min: 10, max: 30, title: { display: true, text: '°C' } } } }} />
                    </div>
                    <div className="gauge-card">
                        <h3><FaCloud size={40} /> Humidity</h3>
                        <Line data={humidityData} options={{ scales: { y: { min: 0, max: 100 } } }} />
                    </div>
                    <div className="gauge-card">
                        <h3><FaWind size={40} /> Wind Speed</h3>
                        <Line data={windData} options={{ scales: { y: { min: 0, max: 20 } } }} />
                    </div>
                </div>
            </div>

            {/* Actionable Insights */}
            <div className="section actionable-insights">
                <h2>Actionable Insights</h2>
                <ul>
                    <li>Soil moisture is low in Section A – Consider watering.</li>
                    <li>Plant growth rate is slower than usual – Check nutrient levels.</li>
                    <li>Sunlight exposure is suboptimal – Adjust shade.</li>
                </ul>
            </div>
        </div>
    );
};

export default RealTimeDataInsights;

// components/Features.jsx
import React from 'react';
import FeatureCard from './FeatureCard';
import './Section.css';

function Features() {
  const features = [
    { title: 'AI-Powered Detection', description: 'Identify diseases in crops using advanced AI algorithms.' },
    { title: 'Real-Time Monitoring', description: 'Monitor crops in real-time for early detection of issues.' },
    { title: 'Disease Management', description: 'Receive actionable insights to manage diseases effectively.' },
  ];

  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
}

export default Features;

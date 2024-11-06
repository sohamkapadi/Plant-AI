import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './PredictiveAnalytics.css';

const PredictiveAnalyticsMap = () => {
    // State to manage visibility of each layer
    const [showCropHealth, setShowCropHealth] = useState(false);
    const [showSoilPH, setShowSoilPH] = useState(false);
    const [showWeather, setShowWeather] = useState(false);

    return (
        <div className="predictive-analytics-container">
            <h2 className="section-title">Predictive Analytics Map</h2>

            <div className="map-with-sidebar">
                {/* Sidebar on the left side */}
                <div className="sidebar">
                    <h3>Controls</h3>
                    <button className="sidebar-button" onClick={() => setShowCropHealth(!showCropHealth)}>
                        {showCropHealth ? 'Hide' : 'Show'} Crop Health
                    </button>
                    <button className="sidebar-button" onClick={() => setShowSoilPH(!showSoilPH)}>
                        {showSoilPH ? 'Hide' : 'Show'} Soil pH
                    </button>
                    <button className="sidebar-button" onClick={() => setShowWeather(!showWeather)}>
                        {showWeather ? 'Hide' : 'Show'} Weather Patterns
                    </button>
                </div>

                {/* Map container on the right */}
                <MapContainer 
                    center={[20.5937, 78.9629]} 
                    zoom={5} 
                    className="map-container"
                >
                    <LayersControl position="topright">
                        <LayersControl.BaseLayer checked name="Standard View">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; OpenStreetMap contributors"
                            />
                        </LayersControl.BaseLayer>

                        {/* Conditional rendering for Crop Health layer */}
                        {showCropHealth && (
                            <LayersControl.Overlay checked name="Crop Health">
                                <LayerGroup>
                                    <Marker position={[20.5937, 78.9629]}>
                                        <Popup>Crop health is optimal in this region.</Popup>
                                    </Marker>
                                </LayerGroup>
                            </LayersControl.Overlay>
                        )}

                        {/* Conditional rendering for Soil pH Levels layer */}
                        {showSoilPH && (
                            <LayersControl.Overlay checked name="Soil pH Levels">
                                <LayerGroup>
                                    <Marker position={[21.1466, 79.0888]}>
                                        <Popup>Soil pH is balanced in this region.</Popup>
                                    </Marker>
                                </LayerGroup>
                            </LayersControl.Overlay>
                        )}

                        {/* Conditional rendering for Weather Patterns layer */}
                        {showWeather && (
                            <LayersControl.Overlay checked name="Weather Patterns">
                                <LayerGroup>
                                    <Marker position={[19.0760, 72.8777]}>
                                        <Popup>Recent rainfall detected.</Popup>
                                    </Marker>
                                </LayerGroup>
                            </LayersControl.Overlay>
                        )}
                    </LayersControl>
                </MapContainer>
            </div>
        </div>
    );
};

export default PredictiveAnalyticsMap;

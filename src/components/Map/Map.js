import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

const mapBoxToken = 'pk.eyJ1IjoiZG9icnluYW5pa2l0aWNoIiwiYSI6ImNrM2hvZnRzYTAwamYzY2s2MGI5M3VkMTkifQ.TKJNuJtkpc3BvGJwXLT1dA'

export default function Map({ geolocation }) {
  const [viewport, setViewport] = useState({
    latitude: geolocation[0].latitude,
    longitude: geolocation[0].longitude,
    zoom: 10,
    width: '100%',
    height: '350px',
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      mapboxApiAccessToken={mapBoxToken}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      {geolocation.map(location => (
        <Marker
          key={location.id}
          latitude={location.latitude}
          longitude={location.longitude}
        >
          <button
            type="button"
            className="marker-btn"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </Marker>
      ))}
    </ReactMapGL>
  );
}

Map.propTypes = {
  geolocation: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  })),
};

Map.defaultProps = {
  geolocation: '',
};

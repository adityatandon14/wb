import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const divStyles = {
  width: '500px',
  height: '500px',
  position: 'relative'
};

const markerStyle = {
  height: '50px',
  width: '50px',
  marginTop: '-50px'
};

const imgStyle = {
  height: '100%'
};

const Marker = ({ title }) => (
  <div style={markerStyle}>
    <img
      style={imgStyle}
      src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
      alt={title}
    />
    <h3>{title}</h3>
  </div>
);

class Map extends Component {
  render() {
    return (
      <div style={divStyles}>
        <GoogleMap
          style={mapStyles}
          bootstrapURLKeys={{ key: 'AIzaSyDRNU45ZMQLz76Qyf3IQR-33jFa2-K7Gu8' }}
          center={{ lat: 5.6219868, lng: -0.1733074 }}
          zoom={14}>
          <Marker title={'Current Location'} lat={5.6219868} lng={-0.1733074}></Marker>
        </GoogleMap>
      </div>
    );
  }
}

export default Map;

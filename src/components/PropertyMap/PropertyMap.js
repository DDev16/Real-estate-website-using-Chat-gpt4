import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './PropertyMap.module.css';



const PropertyMap = ({ property }) => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: property.latitude,
    lng: property.longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA_xD8_7EL76F4-Me_0HJ3dDd0Te4_hNE8">
      <div className={styles.mapContainer}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default PropertyMap;

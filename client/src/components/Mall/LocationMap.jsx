import React from 'react';
import PropTypes from 'prop-types';
import '../../dashboard/Admin/components/Styles/LocationMap.css';
import { FcGoogle } from "react-icons/fc";
import { SiGooglemaps } from "react-icons/si";

const LocationMap = ({ tehselectedMall }) => {
    const iframeElement = tehselectedMall.location;

    const handleOpenInGoogleMaps = (url) => {
        const regex = /<iframe.*?src="(.*?)"/; // Extract the URL from the iframe
        const matches = regex.exec(url);
        const mapsUrl = matches ? matches[1] : ''; // Get the URL from the regex match
        if (mapsUrl) {
            window.open(mapsUrl, '_blank'); // Open the Google Maps URL in a new tab
        }
    };

    return (
        <div className='main-map-container'>
            <div className="location-map-container" dangerouslySetInnerHTML={{ __html: iframeElement }} />
            <div className="map-button" onClick={() => handleOpenInGoogleMaps(iframeElement)}>
                <FcGoogle className="icon google-icon" />
                <SiGooglemaps className="icon maps-icon" />
                <span>Open in Google Maps</span>
            </div>
        </div>
    );
};

LocationMap.propTypes = {
    tehselectedMall: PropTypes.object.isRequired, // Ensure that tehselectedMall is a required object
};

export default LocationMap;
import React from 'react';
import PropTypes from 'prop-types';
import LocationMap from './LocationMap.jsx';
import '../../CSS/MallProfile.css';
import { FaArrowCircleDown } from "react-icons/fa";

import Logo from '/icons/MallStackTitledCleared.png'

const MallProfile = ({ selectedMall }) => {
    return (
        <div className="mall-profile">
            <h1>{selectedMall.name}</h1>
            <div id='MallComponentProfile'>
                <div className="mall-details" style={{
                    backgroundImage: `url(${selectedMall.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="mall-info">
                        <p>{selectedMall.address}</p>
                        <p>{selectedMall.openingTime}</p>
                        <p><FaArrowCircleDown/></p>
                        <p>{selectedMall.closingTime}</p>
                        <div className="mall-image">
                            <img src={selectedMall.image} alt={`${selectedMall.name}`} />
                        </div>
                    </div>
                </div>
                <LocationMap tehselectedMall={selectedMall} /> 
            </div>
            
            <br /> <hr />
            <h2 style={{textAlign:'center', color:'white', fontSize:'30px'}}>المحلات في المول</h2>
            <div className="stores-container">
                {selectedMall.stores.map((store) => (
                    <div className="store-card" key={store.name}>
                        <img src={store.image} alt={store.name} className="store-image" />
                        <h3>{store.name}</h3>
                        <p>{store.description}</p>
                    </div>
                ))}
            </div> <br /> <hr /> <br />
            <div id="LogoHolderMall">
                <img src={Logo} alt="Malls Logo" />
            </div>
        </div>
    );
};

MallProfile.propTypes = {
    selectedMall: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        openingTime: PropTypes.string.isRequired,
        closingTime: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        stores: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                address: PropTypes.string.isRequired,
                openingTime: PropTypes.string.isRequired,
                closingTime: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
            })
        ).isRequired,
        location: PropTypes.string.isRequired, // For LocationMap
    }).isRequired,
};

export default MallProfile;
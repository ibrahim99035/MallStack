import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LocationMap from './LocationMap.jsx';

import '../../CSS/MallProfile.css';

import { FaArrowCircleDown } from "react-icons/fa";

import Logo from '/icons/MallStackTitledCleared.png'

import { fetchStoresByMall } from '../../API/store/getStoresByMall.js';

const MallProfile = ({ selectedMall }) => {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        fetchTheStoresByMall();
    }, []);

    function navigateTo(route) {
        window.location.href = route;
    }

    const fetchTheStoresByMall = async () => {
        try {
            setLoading(true);
            const data = await fetchStoresByMall(selectedMall._id);
            setStores(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch The Mall');
            setLoading(false);
        }
    };

    return (
        <div className="mall-profile">
            <h1>{selectedMall.name}</h1>
            <div id='MallComponentProfile'>
                <div className="mall-details" style={{
                    backgroundImage: `url(${selectedMall.coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="mall-info">
                        <p>{selectedMall.address}</p>
                        <p>{selectedMall.openingDate}</p>
                        <p><FaArrowCircleDown/></p>
                        <p>{selectedMall.closingDate}</p>
                        <div className="mall-image">
                            <img src={selectedMall.coverImage} alt={`${selectedMall.name}`} />
                        </div>
                    </div>
                </div>
                <LocationMap tehselectedMall={selectedMall} /> 
            </div>
            
            <br /> <hr />
            <h2 style={{textAlign:'center', color:'white', fontSize:'30px'}}>المحلات في المول</h2>
            <div className="stores-container">
                {stores.map((store) => (
                    <div className="store-card" key={store.name} onClick={() => navigateTo(`/mall-info/${mall._id}`)}>
                        <img src={store.coverImage} alt={store.name} className="store-image" loading='lazy' />
                        <h3>{store.name}</h3>
                        <p>{store.description}</p>
                        <Link to={`/store-info/${store._id}`} className='storelink' target='_blank'>تفاصيل المحل</Link>
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
        openingDate: PropTypes.string.isRequired,
        closingDate: PropTypes.string.isRequired,
        coverImage: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired, // For LocationMap
    }).isRequired,
};

export default MallProfile;
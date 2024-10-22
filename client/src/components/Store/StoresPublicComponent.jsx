import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import '../../CSS/MallProfile.css';

import { FaArrowCircleDown } from "react-icons/fa";

import { fetchStores } from '../../API/store/getstores.js';

const StoresPublicComponent = () => {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        fetchTheStores();
    }, []);

    function navigateTo(route) {
        window.location.href = route;
    }

    const fetchTheStores = async () => {
        try {
            setLoading(true);
            const data = await fetchStores();
            setStores(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch The Mall');
            setLoading(false);
        }
    };

    return (
        <div className="mall-profile">
            <h2 style={{textAlign:'center', color:'white', fontSize:'30px'}}>المحلات</h2>
            <div className="stores-container">
                {stores.map((store) => (
                    <div className="store-card" key={store.name} onClick={() => navigateTo(`/store-info/${store._id}`)}>
                        <img src={store.coverImage} alt={store.name} className="store-image" loading='lazy'/>
                        <h3>{store.name}</h3>
                        <p>{store.description}</p>
                        <p>{store.openingDate}</p>
                        <p><FaArrowCircleDown /></p>
                        <p>{store.closingDate}</p>
                    </div>
                ))}
            </div> 
        </div>
    );
};

export default StoresPublicComponent;
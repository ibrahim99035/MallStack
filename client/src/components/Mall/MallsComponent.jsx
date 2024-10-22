import React, { useState, useEffect } from 'react';
import '../../CSS/MallsComponent.css';
import { FaArrowCircleDown } from "react-icons/fa";

import { fetchMalls } from '../../API/mall/getmalls';

const MallsComponent = () => {
    const [malls, setMalls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTheMalls();
    }, []);

    function navigateTo(route) {
        window.location.href = route;
    }

    const fetchTheMalls = async () => {
        try {
            setLoading(true);
            const data = await fetchMalls();
            setMalls(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch malls');
            setLoading(false);
        }
    };

    return (
        <div id='storemall-profile'>
            <h2>المعارض</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="mall-profile-grid">
                    {malls.length > 0 ? (
                        malls.map((mall) => (
                            <div
                                key={mall._id}
                                className="mall-profile-card"
                                onClick={() => navigateTo(`/mall-info/${mall._id}`)} 
                            >
                                <img src={mall.coverImage} alt={mall.name} />
                                <h3>{mall.name}</h3>
                                <p>{mall.address}</p>
                                <p>{mall.openingDate}</p>
                                <p><FaArrowCircleDown /></p>
                                <p>{mall.closingDate}</p>
                            </div>
                        ))
                    ) : (
                        <p>No malls available.</p>
                    )}
                </div>
            )}
        </div>
    );    
};

export default MallsComponent;
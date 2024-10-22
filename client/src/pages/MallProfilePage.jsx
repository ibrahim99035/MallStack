import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';
import MallProfile from '../components/Mall/MallProfile';
import { fetchMallById } from '../API/mall/getmall.js'; // Import the API function

const MallProfilePage = () => {
    const { id } = useParams();  // Get the mall ID from the URL
    const [selectedMall, setSelectedMall] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMall = async () => {
            try {
                setLoading(true);
                const mallData = await fetchMallById(id); // Fetch mall by ID from API
                setSelectedMall(mallData); // Set fetched data
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch mall data');
                setLoading(false);
            }
        };

        fetchMall();
    }, [id]); // Fetch mall when component mounts and when id changes

    if (loading) {
        return <p>Loading...</p>; // Display a loading state
    }

    if (error) {
        return <p>{error}</p>; // Display an error message
    }

    return (
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            {selectedMall && <MallProfile selectedMall={selectedMall} />} {/* Pass the fetched data */}
            <Up />
            <Footer />
        </div>
    );
};

export default MallProfilePage;
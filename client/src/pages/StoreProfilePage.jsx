import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';
import StoreProfile from '../components/Store/StoreProfile';

const StorePage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <StoreProfile />
            <Up />
            <Footer />
        </div>
    );

};

export default StorePage;
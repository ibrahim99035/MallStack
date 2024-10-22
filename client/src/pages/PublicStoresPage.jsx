import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';
import StoresPublicComponent from '../components/Store/StoresPublicComponent';

const PublicStoresPage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <StoresPublicComponent />
            <Up />
            <Footer />
        </div>
    );

};

export default PublicStoresPage;
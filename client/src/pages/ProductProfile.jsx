import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

const ProductProfilePage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            
            <Up />
            <Footer />
        </div>
    );

};

export default ProductProfilePage;
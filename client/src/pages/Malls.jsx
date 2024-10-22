import React from 'react';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

import MallsComponent from '../components/Mall/MallsComponent';

const MallsPage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <MallsComponent />
            <Up />
            <Footer />
        </div>
    );

};

export default MallsPage;
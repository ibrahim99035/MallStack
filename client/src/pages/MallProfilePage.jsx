import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';
import MallProfile from '../components/Mall/MallProfile';

const HomePage = () => {
    const selectedMall = {
        name: "مول الضجيج",
        address: "123 الضجيج, الجهراء, الكويت",
        openingTime: "10:00 AM",
        closingTime: "10:00 PM",
        image: "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg",
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        stores: [
            {
                name: "المحل الأول",
                description: "وصف المحل الأول",
                address: "الدور الاول",
                openingTime: "10:00 AM",
                closingTime: "9:00 PM",
                image: "https://media.timeout.com/images/103333354/750/562/image.jpg",
                id:1,
            },
            {
                name: "المحل الثاني",
                description: "وصف المحل الثاني",
                address: "الدور الثاني",
                openingTime: "10:00 AM",
                closingTime: "9:00 PM",
                image: "https://media.timeout.com/images/103333357/750/422/image.jpg",
                id:2,
            },
            {
              name: "المحل الثالث",
              description: "وصف المحل الثالث",
              address: "الدور الثالث",
              openingTime: "10:00 AM",
              closingTime: "9:00 PM",
              image: "https://media.timeout.com/images/103333357/750/422/image.jpg",
              id:3,
            },
            {
              name: "المحل الرابع",
              description: "وصف المحل الرابع",
              address: "الدور الرابع",
              openingTime: "10:00 AM",
              closingTime: "9:00 PM",
              image: "https://media.timeout.com/images/103333357/750/422/image.jpg",
              id:4,
            },
            {
              name: "المحل الخامس",
              description: "وصف المحل الخامس",
              address: "456 Store St, City, Country",
              openingTime: "10:00 AM",
              closingTime: "9:00 PM",
              image: "https://media.timeout.com/images/103333357/750/422/image.jpg",
              id:5,
            },
            {
                name: "المحل السادس",
                description: "وصف المحل السادس",
                address: "الدور السادس",
                openingTime: "10:00 AM",
                closingTime: "9:00 PM",
                image: "https://media.timeout.com/images/103333357/750/422/image.jpg",
                id:6,
            },
            
        ],
      };
    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <MallProfile selectedMall={selectedMall} />
            <Up />
            <Footer />
        </div>
    );

};

export default HomePage;
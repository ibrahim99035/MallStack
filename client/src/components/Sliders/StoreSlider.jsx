import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/slider.css';

const StoreSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Autoplay the slides
    autoplaySpeed: 2000, // Speed of autoplay (in ms)
    pauseOnHover: true, // Pause when hovering
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>تصفح المحلات</h2>
      <Slider {...settings}>
        <div>
          <img src="https://pdrmag.com/wp-content/uploads/2021/07/Silverthorne-Alpine-Paint660x330.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/135877652/photo/new-shopping-center.jpg?s=612x612&w=0&k=20&c=rmPt1VBDUhPI_nqvtOL7xgKUtk1n-HjLZi--njdgBPc=" alt="Slide 2" />
        </div>
        <div>
          <img src="https://federalheath.com/wp-content/uploads/2022/11/simon-xpress-photos-website_0001_SimonXpress-02.jpg.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1314210006/photo/grocery-store-shop-in-vintage-style-with-fruit-and-vegetables-crates-on-the-street.jpg?s=612x612&w=0&k=20&c=UFL3bRQkWH7dt6EMLswvM4u8-1sPQU9T5IFHXuBbClU=" alt="Slide 4" />
        </div>
        <div>
          <img src="https://images.squarespace-cdn.com/content/v1/62e7a92f066fa3730dcd4604/7e207a8b-a472-4865-b685-a9852319c37d/v2-92wtf-rccbx.jpg" alt="Slide 5" />
        </div>
      </Slider>
      <a href="/stores" className="slider-button">المزيد</a>
    </div>
  );
};

export default StoreSlider;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/slider.css';

const MallSlider = () => {
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
      <h2>تصفح المعارض</h2>
      <Slider {...settings}>
        <div>
          <img src="https://www.southtexasfurniture.com/hubfs/furniture%20showroom%20in%20corpus%20christi%2c%20texas.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://cdn.prod.website-files.com/58e984c0a0e2f91e7c795e7a/624fa7647320fa639b04e7e1_Furniture%20Shopping%20Medina.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://media.timeout.com/images/103333354/1024/576/image.webp" alt="Slide 3" />
        </div>
        <div>
          <img src="https://media.timeout.com/images/103331279/1024/576/image.webp" alt="Slide 4" />
        </div>
        <div>
          <img src="https://www.ulcdn.net/media/furniture-stores/coimbatore/avinashiroad/Avinashi-Road-TN-store-mobile.jpg?1683050227" alt="Slide 5" />
        </div>
      </Slider>
      <a href="/malls" className="slider-button">المزيد</a>
    </div>
  );
};

export default MallSlider;
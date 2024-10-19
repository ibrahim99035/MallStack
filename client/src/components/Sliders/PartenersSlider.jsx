import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/slider.css';

const PartenersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
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
    <div className="slider-container" id="parteners">
      <h2>شركائنا</h2>
      <Slider {...settings}>
        <div className="partener-image-div">
          <img src="https://cdn.vox-cdn.com/thumbor/ln4IHgPYpvNoIWpJ2Y1_c9msxXA=/0x0:2012x1341/2000x1333/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg" alt="Slide 1" className="partener-image" />
        </div>
        <div className="partener-image-div">
          <img src="https://www.majidalfuttaim.com/images/default-source/banners/maf-logo-sa141f6b59-fd6c-4ac7-a3bd-c4e4917e11a8.png?sfvrsn=68b0c302_3" alt="Slide 2" className="partener-image" />
        </div>
        <div className="partener-image-div">
          <img src="https://www.nasa.gov/wp-content/uploads/2018/07/s75-31690.jpeg" alt="Slide 3" className="partener-image" />
        </div >
        <div className="partener-image-div">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMPbViwO9GkdbOArGK3khg6sJ85ftrQAsfg&s" alt="Slide 4" className="partener-image" />
        </div>
        <div className="partener-image-div">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtJMLanUveetWInIRrdkhzKQEAj-BVGHoOw&s" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default PartenersSlider;
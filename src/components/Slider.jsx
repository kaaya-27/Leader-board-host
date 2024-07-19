import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Custom styles if needed


//import image1 from '../assets/image1.png';
//import image2 from '../assets/image2.png';


const image1 = 'https://via.placeholder.com/800x400.png?text=Image+1';
const image2 = 'https://via.placeholder.com/800x400.png?text=Image+2';


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [image1, image2];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

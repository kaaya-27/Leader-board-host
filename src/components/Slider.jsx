import React,{ useState} from 'react';
import './Slider.css'; 


const images = [
  'image1.png',
  'image2.png',
];


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
};

const goToNext = () => {
  const isLastSlide = currentIndex === images.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};

return (
  <div className="slider">
  <div className="slider__button--prev" onClick={goToPrevious}>
    &#10094;
  </div>
  <div className="slider__image">
    <img src={images[currentIndex]} alt="Slider" />
  </div>
  <div className="slider__button--next" onClick={goToNext}>
    &#10095;
  </div>
</div>
);
};

export default ImageSlider;

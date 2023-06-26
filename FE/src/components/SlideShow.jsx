import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import web1 from '../assets/web1.png';
import web2 from '../assets/web2.png';
import web3 from '../assets/web3.png';
import web4 from '../assets/web4.png';
import tablet1 from '../assets/tablet1.png';
import tablet2 from '../assets/tablet2.png';
import tablet3 from '../assets/tablet3.png';
import tablet4 from '../assets/tablet4.png';
import mobil1 from '../assets/mobil1.png';
import mobil2 from '../assets/mobil2.png';
import mobil3 from '../assets/mobil3.png';
import mobil4 from '../assets/mobil4.png';
import { Box } from '@mui/material';
import { useDispatch} from 'react-redux';
import { setGridInvisible } from '../redux/features/navbar/navbarSlice';

const webSlides = [{image: web1,caption: 'Slide 1',},{image: web2,caption: 'Slide 2',},{image: web3,caption: 'Slide 3',},{image: web4,caption: 'Slide 4',},];
const tabletSlides = [{image: tablet1,caption: 'Slide 1',},{image: tablet2,caption: 'Slide 2',},{image: tablet3,caption: 'Slide 3',},{image: tablet4,caption: 'Slide 4',},];
const mobileSlides = [{image: mobil1,caption: 'Slide 1',},{image: mobil2,caption: 'Slide 2',},{image: mobil3,caption: 'Slide 3',},{image: mobil4,caption: 'Slide 4',},];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Navbar menüsünü kapa
  const dispatch = useDispatch();
  const changeGridInvisible = () => {
    dispatch(setGridInvisible())
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Web */}
      <Box sx={{display:{xs:'none',md:'block'}}} onClick={changeGridInvisible} >
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          onChange={(slideIndex) => setCurrentSlide(slideIndex)}
        >
            
              {webSlides.map((slide, index) => (
                <div key={index}>
                  <img src={slide.image} alt={slide.caption} />
                </div>
              ))}
        </Carousel> 
      </Box>
      {/* Tablet */}
       <Box sx={{display:{xs:'none',sm:'block',md:'none'}}}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          onChange={(slideIndex) => setCurrentSlide(slideIndex)}
        >
            
              {tabletSlides.map((slide, index) => (
                <div key={index}>
                  <img src={slide.image} alt={slide.caption} />
                </div>
              ))}
        </Carousel> 
      </Box>
      {/* Mobil */}
      <Box sx={{display:{xs:'block',sm:'none'}}}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          onChange={(slideIndex) => setCurrentSlide(slideIndex)}
        >
            
              {mobileSlides.map((slide, index) => (
                <div key={index}>
                  <img src={slide.image} alt={slide.caption} />
                </div>
              ))}
        </Carousel> 
      </Box>
    </>
  );
};

export default Slideshow;

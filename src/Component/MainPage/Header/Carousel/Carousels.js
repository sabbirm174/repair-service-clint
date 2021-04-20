import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousels.css'
import slide1 from './../../../../img/slide1.jpg'
import slide2 from './../../../../img/slide2.jpg'
import slide3 from './../../../../img/slide3.jpg'


const Carousels = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>First slide label</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Second slide label</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Third slide label</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Carousels;
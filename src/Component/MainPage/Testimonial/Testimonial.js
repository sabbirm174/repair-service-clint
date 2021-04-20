import React, { Component,useEffect,useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './testimonial.css'

const Testimonial = () => {

  const [review,setReview] = useState([])
    useEffect(()=>{
        fetch('https://stormy-crag-38445.herokuapp.com/allreview')
        .then(res=>res.json())
        .then(data => {
          setReview(data)
            console.log(review)
        });
    },[])


    return (
        <div className="container ">
            <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {
            review.map(rvw=>{
              return <div>
                <img src={rvw.serviceImg}/>
            <div className="myCarousel">
              <h3>{rvw.name}</h3>
              <h4>{rvw.Designation}</h4>
              <p>
                {rvw.description}
              </p>
            </div>
              </div>
            })
          }
          
        </Carousel>
        </div>
      );
};

export default Testimonial;
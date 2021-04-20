import React from 'react';
import Header from './Header/Header';
import OurServices from './OurServices/OurServices';
import BookNow from './../Dashbord/BookNow/BookNow';
import Title from './../Title/Title';
import Footer from './Footer/Footer';
import Testimonial from './Testimonial/Testimonial';
import OurAim from './OurAim/OurAim';
import BlogPost from './BlogPost/BlogPost';


const MainPage = () => {
    return (
        <div>
            
            <Header></Header>
            <Title title={'Our Services'} text1={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}></Title>
            <OurServices></OurServices>
            <Title title={'Our Clint Say'} text1={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}></Title>
            <Testimonial></Testimonial>
            <Title title={'Our Aim'} text1={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}></Title>
            <OurAim></OurAim>
            <BlogPost></BlogPost>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;
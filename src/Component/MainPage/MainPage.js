import React from 'react';
import Header from './Header/Header';
import OurServices from './OurServices/OurServices';
import BookNow from './../Dashbord/BookNow/BookNow';
import Title from './../Title/Title';
import Footer from './Footer/Footer';
import Testimonial from './Testimonial/Testimonial';
import OurAim from './OurAim/OurAim';
import BlogPost from './BlogPost/BlogPost';
import Heading from './Heading/Heading';
import OurTeam from './OurTeam/OurTeam';


const MainPage = () => {
    return (
        <div>
            
             <Header></Header>
            <OurServices></OurServices>
            <OurTeam></OurTeam>
            <Testimonial></Testimonial>
            <BlogPost></BlogPost>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;
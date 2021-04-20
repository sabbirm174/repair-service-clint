import React from 'react';
import NavBar from './NavBar/NavBar';
import HeaderContent from './HeaderContentt/HeaderContent';
import Carousels from './Carousel/Carousels';


const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Carousels></Carousels>
        </div>
    );
};

export default Header;
import React from 'react';
import './title.css'
const Title = ({title,text1}) => {
    return (
        <div  className='title-wrapper text-center'>
         <h2>{title}</h2>
         <p>{text1}</p>
         </div>
    );
};

export default Title;

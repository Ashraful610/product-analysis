import React from 'react';
import img from '../Images/404-img.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notFoundImg'>
           <img src={img}  alt="" />
        </div>
    );
};

export default NotFound;
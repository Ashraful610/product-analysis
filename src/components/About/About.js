import React from 'react';
import './About.css'
import img from '../Images/laptop.jpg'
const About = () => {
    return (
        <div>
             <h1 className='text-purple-400'>The whole website has been created about this laptop</h1>
             <div className='d-flex justify-center m-4'>
            <img src={img} className='laptop-img' w-100 alt="" />
             </div>
        </div>
       
    );
};

export default About;
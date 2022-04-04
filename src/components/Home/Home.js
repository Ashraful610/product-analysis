import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import img from '../Images/laptop.jpg'
import './Home.css'
const Home = () => {
    return (
    <div>
        <div className='d-flex justify-content-between m-8 gap-4'>
            <div className=' text-left text-purple-300 pt-5 w-50'>
                 <div className='p-3'>
                    <h2 className='text-4xl'>ASUS ROG ZEPHYRUS G15 <span className='text-pink-300'>Laptop</span> 
                     </h2>
                    <h3 className='text-4xl'>  <span className='text-pink-300'>for</span> Gaming </h3>
                 </div>
                 <div className='p-2 text-2xl text-purple-400'>
                     <p>Gaming laptops are basically the same as standard or business laptops only with upgraded features, but it's these upgraded features which make all the difference</p>
                 </div>
            </div>
            <div className='laptop w-50 d-flex justify-center'>
                    <img src={img} alt="" />
            </div>
        </div>
        <div>
            <CustomerReviews></CustomerReviews>
          <button className='bg-pink-300 m-6 px-6 py-2 rounded-xl'>
              <Link to="/reviews" className='all-reviews'> All Reviews</Link>
          </button>   
        </div>
 </div>
        
    );
};

export default Home;
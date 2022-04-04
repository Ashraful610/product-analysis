import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar m-8 bg-white shadow-sm'>
           <div className='ms-5 p-2 text-pink-300'>
               <h1>BEST LAPTOP SHOP</h1>
           </div>
           <div >
              <Link to='/'
               className='no-underline  text-2xl text-pink-300 me-4'>HOME</Link>
              <Link to='/reviews' 
              className='no-underline text-2xl text-pink-300  me-4'>REVIEWS</Link>
              <Link to='/dashboard'
               className='no-underline  text-2xl text-pink-300 me-4'>DASHBOARD</Link>
              <Link to='/blogs' 
              className='no-underline  text-2xl text-pink-300 me-4'>BLOGS</Link>
              <Link to='about' 
              className='no-underline text-2xl text-pink-300  me-4'>ABOUT</Link>
           </div>
        </nav>
    );
};

export default Header;
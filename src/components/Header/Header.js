import React from 'react';
import CustomLink from '../CustomLink/CustomLInk';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar m-8 bg-white shadow-md'>
                <div className='ms-5 p-2 text-pink-300'>
                     <h1>BEST LAPTOP SHOP</h1>
               </div>
               <nav className='d-flex'>
                 <CustomLink to='/'
                      className='no-underline  text-2xl text-pink-300 me-4'>HOME</CustomLink>
                 <CustomLink to='/reviews' 
                       className='no-underline text-2xl text-pink-300  me-4'>REVIEWS</CustomLink>
                 <CustomLink to='/dashboard'
                       className='no-underline  text-2xl text-pink-300 me-4'>DASHBOARD</CustomLink>
                 <CustomLink to='/blogs' 
                        className='no-underline  text-2xl text-pink-300 me-4'>BLOGS</CustomLink>
                 <CustomLink to='about' 
                        className='no-underline text-2xl text-pink-300  me-4'>ABOUT</CustomLink>
              </nav>
        </div>
       
    );
};

export default Header;
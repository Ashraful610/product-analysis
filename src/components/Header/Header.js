import React from 'react';
import CustomLink from '../CustomLink/CustomLInk';
import './Header.css'
const Header = () => {
  return (
        <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden ghost-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
              <CustomLink to='/' className='no-underline  lg:text-2xl text-xl text-pink-300 me-4 me-2'>   HOME  </CustomLink>         
              </li>          
              <li>
              <CustomLink to='/reviews' className='no-underline lg:text-2xl text-xl text-pink-300 me-4 me-2'>  REVIEWS  </CustomLink>           
              </li>
              <li>
              <CustomLink to='/dashboard' className='no-underline  lg:text-2xl text-xl text-pink-300 me-5 me-2'> DASHBOARD   </CustomLink>           
              </li>
              <li>
              <CustomLink to='/blogs' className='no-underline  lg:text-2xl text-xl text-pink-300 me-4 me-2'> BLOGS  </CustomLink>
              </li>
              <li>
              <CustomLink to='about' className='no-underline lg:text-2xl text-xl text-pink-300  me-4 me-2'>  ABOUT   </CustomLink>   
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost   ">
            <h2 className="text-pink-300 text-3xl">BEST LAPTOP SHOP</h2></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li>
              <CustomLink to='/' className='no-underline mt-3  lg:text-2xl text-xl text-pink-300 '>   HOME  </CustomLink>         
              </li>          
              <li>
              <CustomLink to='/reviews' className='no-underline mt-3 lg:text-2xl text-xl text-pink-300'>  REVIEWS  </CustomLink>           
              </li>
              <li>
              <CustomLink to='/dashboard' className='no-underline  mt-3 lg:text-2xl text-xl text-pink-300 '> DASHBOARD   </CustomLink>           
              </li>
              <li>
              <CustomLink to='/blogs' className='no-underline mt-3  lg:text-2xl text-xl text-pink-300'> BLOGS  </CustomLink>
              </li>
              <li>
              <CustomLink to='about' className='no-underline mt-3 lg:text-2xl text-xl text-pink-300 '>  ABOUT   </CustomLink>   
              </li>
          </ul>
        </div>
   </div>
    );
};

export default Header;
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
             <div className="row footer m-0 gx-2 p-4">
                 <div className="col-lg-5 col-12 column">
                     <h2 className='text-white footer-heading1 '>
                         BEST   
                                <span className='text-warning'>    LAPTOP    </span> 
                          SHOP
                     </h2>
                    <p className='text-white fs-5'>Our list of Top 10 best laptops in Bangladesh offers a good blend of performance and vital features at every price point.</p>
                 </div>
                 <div className="col-lg-3 col-12 column">
                        <h2 className='text-white footer-heading2'>Our Office</h2>
                        <p className='text-white fs-5'>
                          TSC ROAD <br />
                          Ashuganj ,Brahmanbaria <br />
                          Dhaka , Bangladesh 
                        </p>
                        <p className='text-white fs-5'>
                           ashalam@610gmail.com
                           
                        </p>           
                 </div>
                 <div className="col-lg-3 col-12 column ">
                     <h2 className='text-white footer-heading3'>About Us</h2>         
                     <p className='text-white fs-5'>
                         Home <br />
                         Services <br />
                         Features <br />
                         Contact Us
                     </p>
                 </div>
                 
             </div>
        </div>
    );
};

export default Footer;
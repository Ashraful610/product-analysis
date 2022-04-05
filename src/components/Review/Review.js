import React from 'react';
import './Review.css'
const Review = ({review}) => {
        const {img,name,rating} =review
      
    return (
         <div className='col-lg-3 bg-white shadow-lg p-3 rounded-xl'>
              <div className=' d-flex justify-center p-4 review'>
                  <img src={img} alt="" />
              </div>
              <div className='review-detail'>
                  <div className='d-flex justify-center'>
                      <h3>{name}</h3>
                  </div>
                  <p className=''><span className='fw-bold'>Review :</span>  {review.review}</p>
                    <h5> <span className='fw-bold'>Rating :</span>{rating}</h5>
              </div>
         </div>
        
    );
};

export default Review;
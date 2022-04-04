import React from 'react';
import './Review.css'
const Review = ({review}) => {
        const {img,name,rating} =review
      
    return (
         <div className='col-3 bg-white shadow-lg p-3 '>
              <div className=' d-flex justify-center p-4 review'>
                  <img src={img} alt="" />
              </div>
              <div className='review-detail'>
                  <h3>{name}</h3>
                  <p className=''>Review : {review.review}</p>
                    <h5> Rating : {rating}</h5>
              </div>
         </div>
        
    );
};

export default Review;
import React from 'react';
import useRiviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] =useRiviews()
    return (
        <div className='m-8 mt-16'>
        <h1 className='text-pink-300 text-5xl'>Customer Riviews</h1>
         <div className='row gap-24 ps-5 pe-5 reviews'>
             {
                reviews.map(review => <Review
                        key={review.id}
                        review={review}>
                        </Review>)
              }
         </div>
        
   </div>
    );
};

export default Reviews;
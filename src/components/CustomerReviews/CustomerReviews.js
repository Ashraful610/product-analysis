import React from 'react';
import useRiviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './CustomerReviews.css'
const CustomerReviews = () => {
    const [reviews,setReviews] = useRiviews()
    const reviewS = reviews.slice(0,3)
    return (
        <div className='m-8 mt-16'>
             <h1 className='text-pink-300 text-5xl review'>Customer Reviews</h1>
              <div className='row gap-24 ps-5 pe-5 reviews'>
                  {
                     reviewS.map(review => <Review 
                             key={review.id}
                             review={review}>
                             </Review>)
                   }
              </div>
            
        </div>
    );
};

export default CustomerReviews;
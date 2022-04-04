import React from 'react';
import useRiviews from '../hooks/useReviews';
import Review from '../Review/Review';

const CustomerReviews = () => {
    const [reviews,setReviews] = useRiviews()
    const review = reviews.slice(0,3)
    return (
        <div>
             <h1 className='text-pink-300 text-5xl'>Customer Riviews</h1>
                {
                    review.map(review => <Review 
                        key={review.id}
                        review={review}
                        ></Review>)
                }
        </div>
    );
};

export default CustomerReviews;
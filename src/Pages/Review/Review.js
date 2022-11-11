import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = ({service}) => {
    const {_id, title} = service;
    const {user} = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user.displayName;
        const review = form.review.value;

        const reviews = {
            service: _id,
            serviceName: title,
            userName: name,
            review: review,
        }
    }
    return (
        <div>
            <form onSubmit={handleReview}>
                <textarea className='textarea textarea-bordered h-24 w-full' type="text" name="review" placeholder='Enter Your Review' id="" />
                <input className='btn' type="submit" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default Review;
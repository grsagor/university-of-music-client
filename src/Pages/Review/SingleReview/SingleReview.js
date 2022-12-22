import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SingleReview = ({review}) => {
    const {user} = useContext(AuthContext);
    console.log(review.photo);
    return (
        <div className='bg-slate-800 mx-2 md:w-1/4 md:mx-auto my-4 p-8 rounded'>
            <div className='flex'>
                <div><img className='w-6 rounded-full items-center' src={review.photo} alt="" srcset="" /></div>
                <div className='ml-4'><h2 className='text-xs'>{review.userName}</h2></div>
            </div>
            <h2 className='ml-10 text-orange-500'>{review.review}</h2>
        </div>
    );
};

export default SingleReview;
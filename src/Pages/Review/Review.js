import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleReview from './SingleReview/SingleReview';

const Review = ({service}) => {
    const {_id, title} = service;
    const {user, setLoading} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    if(!reviews){
        setLoading(true);
    }

    const url = `https://assignment-11-server-iota-six.vercel.app/reviews?id=${_id}`
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[])

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const review = form.review.value;

        const newreviews = {
            service: _id,
            serviceName: title,
            userName: name,
            review: review,
            photo: user.photoURL,
            email: user.email
        }

        fetch('https://assignment-11-server-iota-six.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newreviews)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Review submitted successfully');
                const newReviews = [newreviews,...reviews]
                setReviews(newReviews);
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }


    return (
        <div>
            <form className='mx-auto w-3/4' onSubmit={handleReview}>
                <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="review" placeholder='Enter Your Review' id="" />
                <div className='w-1/4 mx-auto'><input className='btn w-full' type="submit" value="Submit Your Review" /></div>
            </form>
            <div>
                {
                    reviews.map( review => <SingleReview
                        review = {review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;
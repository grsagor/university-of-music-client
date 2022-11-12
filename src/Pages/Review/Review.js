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

    const url = `http://localhost:5000/reviews?id=${_id}`
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
        }

        fetch('http://localhost:5000/reviews', {
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

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remaining = reviews.filter(review => review._id !== id);
                console.log(remaining);
                setReviews(remaining);
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleReview}>
                <textarea className='textarea textarea-bordered h-24 w-full' type="text" name="review" placeholder='Enter Your Review' id="" />
                <input className='btn' type="submit" value="Submit Your Review" />
            </form>
            <div>
                {
                    reviews.map( review => <SingleReview
                        review = {review}
                        handleDelete = {handleDelete}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;
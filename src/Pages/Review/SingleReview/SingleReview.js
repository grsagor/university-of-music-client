import React from 'react';

const SingleReview = ({review}) => {
    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <h2>{review.review} <button onClick={() => handleDelete(review._id)} className='btn'>Delete</button></h2>
        </div>
    );
};

export default SingleReview;
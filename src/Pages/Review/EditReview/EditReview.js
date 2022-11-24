import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditReview = () => {
    const review = useLoaderData();
    const navigate = useNavigate();
    const [reviewText, setReviewText] = useState('')
    const update = (event) => {
        event.preventDefault();
        const form = event.target;
        const editedReview = form.edited.value;

        const body = {review: reviewText, id: review._id};

        fetch('https://assignment-11-server-iota-six.vercel.app/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            alert('Review Edited');
            navigate('/myreviews');
        })
    }
    return (
        <div>
            {/* <h2>{review.review}</h2> */}
            <form onSubmit={update}>
                <div className='w-3/4 mx-auto'>
                    <input className='w-full h-10' onChange={(e)=>setReviewText(e.target.value)} type="text" name="edited" id="" value={reviewText?reviewText:review.review}/> <br />
                </div>
                <div className='w-1/4 mx-auto my-4'>
                    <input className='btn w-full' type="submit" value="Edit" />
                </div>
                {/* <p>{review}</p> */}
            </form>
        </div>
    );
};

export default EditReview;
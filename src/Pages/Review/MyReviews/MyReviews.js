import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SingleMyReview from './SingleMyReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    const url = `http://localhost:5000/reviews?name=${user?.displayName}`;

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyreviews(data);
        })
    },[])
    return (
        <div>
            <h2>My Reviews</h2>
            <div>
                {
                    myreviews.map(myreview => <SingleMyReview
                        myreview = {myreview}
                    ></SingleMyReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;
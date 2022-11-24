import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import SingleMyReview from './SingleMyReview';

const MyReviews = () => {
    let show;
    useTitle('My Reviews');
    const {user} = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);
    if(myreviews.length>0){
         show = true;
    }
    else{
         show = false;
    }

    const url = `https://assignment-11-server-iota-six.vercel.app/reviews?email=${user?.email}`;

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyreviews(data);
        })
    },[])

    const handleDelete = id => {
        fetch(`https://assignment-11-server-iota-six.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remaining = myreviews.filter(myreview => myreview._id !== id);
                console.log(remaining);
                setMyreviews(remaining);
            }
        })
    }

    

    return (
        <div>
            <h2 className='text-4xl text-orange-600 text-center'>All Reviews Which Was Done By Me</h2>
            {
                show
                ?
                <>
                {
                    myreviews?.map(myreview => <SingleMyReview
                        myreview = {myreview}
                        handleDelete = {handleDelete}
                    ></SingleMyReview>)
                }
            </>
            :
            <h2 className='text-5xl m-12 text-center'>No Reviwes Found</h2>
            }
            
        </div>
    );
};

export default MyReviews;
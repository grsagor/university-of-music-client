import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';


const SingleMyReview = ({myreview, handleDelete}) => {
    return (
        <div className='bg-slate-800 w-1/4 mx-auto my-4'>
            <div className=''>
                <h2 className='text-center text-sm'>Service Name: {myreview.serviceName}</h2>
                <h2 className='text-center text-xl text-orange-500 mb-2'>{myreview.review}</h2>
                <div className='flex justify-between px-2 pb-2'>
                    <button className='btn btn-error' onClick={() => handleDelete(myreview._id)}><MdDelete className='text-xl'></MdDelete></button>
                    <Link to={`/editreview/${myreview._id}`}><button className="btn btn-warning"><AiFillEdit className='text-xl'></AiFillEdit></button></Link>
                </div>
            </div>

        </div>
    );
};

export default SingleMyReview;
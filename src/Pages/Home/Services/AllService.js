import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const AllService = ({service}) => {
    const {img, title, price, _id, descriptioin} = service;
    return (
        <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
                        <figure>
                <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='mx-auto' src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>                <div className="card-body text-center">
                    <h2 className="card-title text-center">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: $ {price}</p>
                    <p>{descriptioin.slice(0,100)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllService;
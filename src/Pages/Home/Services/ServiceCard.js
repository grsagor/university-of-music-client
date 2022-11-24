import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceCard = ({service}) => {
    const {img, price, title, _id, descriptioin} = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 mx-auto">
                <figure>
                <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='mx-auto' src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: $ {price}</p>
                    <p>{descriptioin.slice(0,100)}...</p>
                    <div className="card-actions justify-center">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
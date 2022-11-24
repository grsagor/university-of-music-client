import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Review from '../../Review/Review';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../hooks/useTitle';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    useTitle(`${service.title}`);
    return (
        <div>
            <div className='text-center w-3/4 mx-auto'>
                <h2 className='text-4xl text-orange-500 font-extrabold m-2'>{service.title}</h2>

                {/* <img className='mx-auto m-2' src={service.img} alt="" srcset="" /> */}

                <div>
                            <img className='mx-auto' src={service.img} alt="" />
                </div>

                <p className='text-justify m-2'>{service.descriptioin}</p>
                <p className='text-orange-500 m-2'>You have to pay- $ {service.price} to buy this service.</p>
            </div>
            {
                user?.email
                ?
                <Review
                service = {service}
            ></Review>
            :
            <div className='w-96 mx-auto mb-4'><Link to='/login'><button className='btn w-96'>Sign In For Review</button></Link></div>
            }
            
        </div>
    );
};

export default ServiceDetails;
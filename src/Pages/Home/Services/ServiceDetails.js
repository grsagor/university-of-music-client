import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PrivateRoute from '../../../Router/Routes/PrivateRoute';
import Review from '../../Review/Review';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div>
            <h2>Service Details</h2>
            <h2>{service.title}</h2>
            <PrivateRoute>
            <Review
                service = {service}
            ></Review>
            </PrivateRoute>
        </div>
    );
};

export default ServiceDetails;
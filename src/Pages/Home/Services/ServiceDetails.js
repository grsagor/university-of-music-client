import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../../Review/Review';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div>
            <h2>Service Details</h2>
            <h2>{service.title}</h2>
            <Review
                service = {service}
            ></Review>
        </div>
    );
};

export default ServiceDetails;
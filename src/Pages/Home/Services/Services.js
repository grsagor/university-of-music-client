import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState();
    useEffect( () => {
        fetch('https://assignment-11-server-iota-six.vercel.app/home')
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setCount(data.count);
            })
    }, [])
    return (
        <div className='text-center mb-4'>
            <div className='my-4'>
                <h2 className="text-5xl font-semibold text-orange-600">Our Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service = {service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/allservices'><button class="btn">See All Services</button></Link>
        </div>
    );
};

export default Services;
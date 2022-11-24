import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import AllService from './AllService';

const AllServices = () => {
    useTitle('All Services');
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('https://assignment-11-server-iota-six.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
        })
    },[])
    return (
        <div className='text-center'>
            <div className='mb-4'>
                <h2 className='text-5xl font-semibold text-orange-600'>Check All The Services Here</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <AllService
                        key={service._id}
                        service = {service}
                    ></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;
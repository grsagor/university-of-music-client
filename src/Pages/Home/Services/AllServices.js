import React, { useEffect, useState } from 'react';
import AllService from './AllService';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
        })
    },[])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <AllService
                    key={service._id}
                    service = {service}
                ></AllService>)
            }
        </div>
    );
};

export default AllServices;
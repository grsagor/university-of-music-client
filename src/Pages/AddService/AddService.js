import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const descriptioin = form.descriptioin.value;

        const service = {
            title,
            img,
            price,
            descriptioin
        }

        fetch('https://assignment-11-server-iota-six.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Service submitted successfully');
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }
    return (
        <div>
            <h2 className='text-5xl text-orange-600 text-center'>Add More Service</h2>
            <div className='w-3/4 mx-auto my-6'>
                <form onSubmit={handleAddService}>
                    <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="title" placeholder='Enter Service Title' id="" />
                    <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="img" placeholder='Enter Image Link' id="" />
                    <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="price" placeholder='Enter Service Price' id="" />
                    <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="descriptioin" placeholder='Enter Service Description' id="" />
                    <div className='w-12 mx-auto'><input className='btn' type="submit" value="Add Service" /></div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
import React from 'react';

const AddService = () => {
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

        fetch('http://localhost:5000/services', {
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
            <h2>Add More Service</h2>
            <form onSubmit={handleAddService}>
                <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="title" placeholder='Enter Service Title' id="" />
                <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="img" placeholder='Enter Image Link' id="" />
                <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="price" placeholder='Enter Service Price' id="" />
                <textarea className='textarea textarea-bordered h-16 w-full' type="text" name="descriptioin" placeholder='Enter Service Description' id="" />
                <input className='btn' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;
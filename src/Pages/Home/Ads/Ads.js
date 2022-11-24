import React from 'react';
import YouTube from 'react-youtube';

const Ads = () => {
    return (
        <div className='mb-5 bg-slate-700 p-8'>
            <div>
                <h2 className='text-center text-orange-600 text-3xl mb-6'>Here is  my latest covered song -</h2>
            </div>
            <div className='w-1/2 mx-auto'>
            <YouTube videoId="QKzBkYpne9w"/>
            </div>
        </div>
    );
};

export default Ads;
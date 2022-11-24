import React from 'react';
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import img4 from './Images/4.jpg';
import img5 from './Images/5.jpg';
import img6 from './Images/6.jpg';

const PhotoGroup = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center mb-4'>Some Pictures Of Our Classroom</h2>
            </div>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto mb-4'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
                <div>
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PhotoGroup;
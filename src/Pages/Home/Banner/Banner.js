import React from 'react';
import img1 from '../Banner/1.jpg'
import img2 from '../Banner/2.jpg'
import img3 from '../Banner/3.jpg'
import img4 from '../Banner/4.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute transform -translate-y-1/2 right-5 bottom-0 left-2">
                        <h2 className='text-6xl'>
                            Learn Music
                        </h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute transform -translate-y-1/2 right-5 bottom-0 left-2">
                        <h2 className='text-6xl'>
                            Love Music
                        </h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute transform -translate-y-1/2 right-5 bottom-0 left-2">
                        <h2 className='text-6xl'>
                            Promote Music
                        </h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute transform -translate-y-1/2 right-5 bottom-0 left-2">
                        <h2 className='text-6xl'>
                            Do Music
                        </h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
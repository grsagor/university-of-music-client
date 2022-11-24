import React from 'react';
import useTitle from '../../hooks/useTitle';
import Ads from './Ads/Ads';
import Banner from './Banner/Banner';
import PhotoGroup from './PhotoGroup/PhotoGroup';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Services></Services>
            <Banner></Banner>
            <Ads></Ads>
            <PhotoGroup></PhotoGroup>
        </div>
    );
};

export default Home;
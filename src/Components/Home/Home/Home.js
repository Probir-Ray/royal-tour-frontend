import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Gallery from '../Gallery/Gallery';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
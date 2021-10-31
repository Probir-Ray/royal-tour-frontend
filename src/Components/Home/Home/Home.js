import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Gallery from '../Gallery/Gallery';
import Testimonials from '../Testimonials/Testimonials';
import VacationCart from '../../VacationCart/VacationCart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <VacationCart></VacationCart>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
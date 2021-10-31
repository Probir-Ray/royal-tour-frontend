import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel className='mt-1'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/mzGsjFB/Tree-House-Villas.jpg"
                    alt="TreeHouse Villas, Ko Yao, Thailand"
                    />
                    <Carousel.Caption>
                    <h3 className='mb-3'>TreeHouse Villas</h3>
                    <p className='bg-primary p-1'>Ko Yao, Thailand</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/cx5Y7XF/explora-Patagonia.jpg"
                    alt="Explora Patagonia"
                    />

                    <Carousel.Caption>
                    <h3 className='mb-3'>Explora Patagonia</h3>
                    <p className='bg-primary p-1'>Torres Del Paine, Chile</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/2kJ098C/HOSHINOYA-Fuji.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className='mb-3'>HOSHINOYA Fuji</h3>
                    <p className='bg-primary p-1'>Fujikawaguchiko, Japan</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
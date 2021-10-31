import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="row testimonial">
            <div class="col-12 col-md-4 col-sm-6 text-center mb-4">
                <img src="https://i.ibb.co/z4PCpCD/Ophthalmology.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed doe iusmod sectetur adipisc elemen</p>
                <h6>Marc Green, US</h6>
            </div>
            <div class="col-12 col-md-4 col-sm-6 text-center mb-4">
                <img src="https://i.ibb.co/z4PCpCD/Ophthalmology.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed doe iusmod sectetur adipisc elemen</p>
                <h6>Marc Green, US</h6>
            </div>
            <div class="col-12 col-md-4 col-sm-6 text-center mb-4">  
                <img src="https://i.ibb.co/z4PCpCD/Ophthalmology.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed doe iusmod sectetur adipisc elemen</p>
                <h6>Marc Green, US</h6>
            </div>
        </div>
    );
};

export default Testimonial;
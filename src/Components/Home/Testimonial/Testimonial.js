import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="row testimonial" id="testimonial">
            <div class="col-12 col-md-4 col-sm-6 text-center border border-rounded p-3">
                <img src="https://i.ibb.co/SVgCXM7/mechanic-01.jpg" alt="" />
                <p>Many thanks for making such a trip possible. The organisation, the effectiveness, the planning and on top the driver were just perfect. We felt so comfortable although being so far from home. Everything worked out in time and perfectly;</p>
                <h6>Marc Green, US</h6>
            </div>
            <div class="col-12 col-md-4 col-sm-6 text-center border border-rounded p-3">
                <img src="https://i.ibb.co/4N2xBPr/mechanic-05.jpg" alt="" />
                <p>It is a great pleasure to let you know that above tour you organized was a huge success for our group in every possible way we could imagine. So on behalf of everyone in that tour group, let me thank you and your Royal Tour</p>
                <h6>Mr. Jonas, UK</h6>
            </div>
            <div class="col-12 col-md-4 col-sm-6 text-center border border-rounded p-3">
                <img src="https://i.ibb.co/s5NRZ8j/mechanic-03.jpg" alt="" />
                <p>I must say I was delighted with the service you provided - it was just what I wanted. This is the second time I have used your services, and both times you provided a faultless experience.</p>
                <h6>Jemmy Clinton, Franch</h6>
            </div>
        </div>
    );
};

export default Testimonial;
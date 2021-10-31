import React from 'react';
import { Link } from 'react-router-dom';

const Offer = props => {
    const {_id, name, location, desc, img, price} = props.plan;
    return (
        <div className="col-md-6">
            <div className="card card-default">
                <img className="card-img-top img-fluid" src={img} alt="" />
                <div className="card-body">
                    <h6>Location: <span>{location}</span></h6>
                    <h5 className="card-text">{name}</h5>
                    <p>{desc}</p>
                    <h4>Price: ${price}</h4>
                <Link to={`/place-order/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;
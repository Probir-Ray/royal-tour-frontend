import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';

const Offers = () => {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => setPlans(data))
    }, [])

    return (
        <div className="container-fluid my-5">
            <h2 className="text-center my-4">Plans</h2>
            <div className="row g-3">
                {
                    plans.map(plan => <Offer key={plan._id} plan={plan}></Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;
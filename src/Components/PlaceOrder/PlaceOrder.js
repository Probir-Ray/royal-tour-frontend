import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { planId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(()=> {
        const url = `http://localhost:5000/place-order/${planId}`;
        fetch(url).then(res => res.json()).then(data => setOrder(data));
    }, []);

    return (
        <div className="container-fluid my-5 py-3">
            <h3 className="text-center mb-4">Place Order</h3>
            <div className="w-75 text-center mx-auto">
                <div className="order-desc">
                    <img className="w-75 mb-3" src={order.img} alt="" />
                    <h5>{order.name}</h5>
                    <p>{order.desc}</p>
                    <p>Location: {order.location}</p>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default PlaceOrder;